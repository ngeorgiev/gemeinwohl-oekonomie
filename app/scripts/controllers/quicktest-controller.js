'use strict';

Controller.numberOfQuestions = 0;

Controller.quickTestIntroId = 'quick-test-introduction';
Controller.questionIdPrefix = 'quick-test-question-';
Controller.previousQuestionId = '';
Controller.currentQuestionId = '';
Controller.nextQuestionId = '';
Controller.quickTestResultId = 'quick-test-result';

Controller.initializeTestState = function () {

    Controller.testState = {
        // -1 means intro page, 0 means first question
        questionIndex : -1,
        furthestQuestionIndex : -1,

        // read from the JSON data
        operandOnIndividualResults : '',
        numberOfEvaluationValues : 0,
        maxPoints : 0,

        participant : 'oneperson',

        // array of the given evaluation values
        answers : [],
        resultPoints : '',
        feedbackContent : '',
        resultLevel : -1
    };
};

Controller.createQuickTestHtml = function () {

    Controller.initializeTestState();

    var quickTestHtml = '';
    var compiledTemplate = dust.compile(Template.quickTestTemplate, 'quickTestTemplate');
    dust.loadSource(compiledTemplate);
    dust.render('quickTestTemplate', Data.quickTest, function(err, out) {
        quickTestHtml += out;
    });

    Data.testQuestions = Data.quickTest.data.tests[0].questions;

    document.getElementById('quick-test-container').innerHTML = quickTestHtml;

    Controller.initializeQuickTest();

    // add click listeners
    $('.quick-test-question-button').click(Controller.onTestAnswerClick);
};

Controller.onTestAnswerClick = function (event) {
    var answerValue = $(event.target).attr('data-value');
    Controller.testState.answers.push(answerValue);
    Controller.showNextTestQuestion();
};

Controller.initializeQuickTest = function () {
    // add click listener
    $('.quick-test-start').click(Controller.startQuickTest);
    Controller.showNextTestQuestion();
};

Controller.startQuickTest = function () {
    Controller.currentQuestionId = Controller.quickTestIntroId;
    Controller.showNextTestQuestion();
};

Controller.showNextTestQuestion = function () {
    Controller.previousQuestionId = Controller.currentQuestionId;

    Controller.testState.questionIndex += 1;

    if (Controller.isEndOfTest()) {
        Controller.showEndOfTest();
    } else {
        if (Controller.canAccessQuestion()) {

            Controller.currentQuestionId =
                Controller.questionIdPrefix + Controller.testState.questionIndex;
            console.log('Question ' + Controller.testState.questionIndex);

            Controller.fadeQuestions();
        } else {
//            console.log('can NOT access Question.');
            Controller.showNextTestQuestion();
        }
    }
};

Controller.isEndOfTest = function () {
    return Controller.testState.questionIndex >= Data.testQuestions.length;
};

Controller.canAccessQuestion = function () {
    if(Controller.testState.questionIndex < Data.testQuestions.length) {
        var question = Data.testQuestions[Controller.testState.questionIndex];
        return $.inArray(Controller.testState.participant, question.excludedParticipants);
    } else {
        return false;
    }
};


Controller.showEndOfTest = function () {

    console.log('End of test .');

    var testState = Controller.testState;

    // execute operand on the individual answers
    var pointsSum = 0;
    var testResultStructure = Data.quickTest.structure.testTypes[0].result;
    if (testResultStructure.operandOnIndividualResults === 'add') {
        pointsSum = Utils.sumIntegersInArray(testState.answers);
    }

    // calculate the final points
    var finalPoints = 0;

    var finalCalculations = testResultStructure.finalCalculation;
    var numOfFinalCalculations = finalCalculations.length;
    for (var calcIndex = 0; calcIndex < numOfFinalCalculations; calcIndex++) {
        var finalCalc = finalCalculations[calcIndex];
        if (finalCalc.participant === testState.participant) {
            if (finalCalc.multiplyBy) {
                finalPoints = pointsSum * parseFloat(finalCalc.multiplyBy);
            } else {
                console.log('No \'multiplyBy\' defined in the final calculation ' +
                    'for the participant ' + finalCalc.participant);
            }
        }
    }

    // 62.44 is converted to 62
    testState.resultPoints = Math.floor(finalPoints);

    console.log('Result points sum: ' + pointsSum);
    console.log('Result points multiplied: ' + testState.resultPoints);

    // get the feedback content

    var feedbackContent;
    var feedbacks = testResultStructure.feedbacks;
    var numOfFeedbacks = feedbacks.length;
    var maxPoints = 0;
    for (var feedbackIndex = 0; feedbackIndex < numOfFeedbacks; feedbackIndex++) {
        var feedback = feedbacks[feedbackIndex];
        if (finalPoints >= feedback.minValue && finalPoints <= feedback.maxValue) {
            feedbackContent = feedback.content;
            testState.resultLevel = feedbackIndex;
        }

        if (feedbackIndex === (numOfFeedbacks - 1)) {
            maxPoints = feedback.maxValue;
        }
    }
    testState.maxPoints = maxPoints;
    testState.feedbackContent = feedbackContent;

    // set the result values in the template
    document.getElementById('quick-test-points').innerHTML = testState.resultPoints;
    document.getElementById('quick-test-max-points').innerHTML = testState.maxPoints;
    document.getElementById('quick-test-result-text').innerHTML = testState.feedbackContent;

    // show final result page
    Controller.currentQuestionId = Controller.quickTestResultId;
    Controller.fadeQuestions();
};

Controller.fadeQuestions = function () {
    $('#' + Controller.previousQuestionId).fadeOut(
        Router.fadeOutSpeed, Controller.fadeInQuestion);
};

Controller.fadeInQuestion = function () {
    $('#' + Controller.currentQuestionId).fadeIn(Router.fadeInSpeed);
};
