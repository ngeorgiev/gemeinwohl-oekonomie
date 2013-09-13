'use strict';

Controller.numberOfQuestions = 0;

Controller.quickTestIntroId = 'quick-test-introduction';
Controller.quickTestProfileId = 'quick-test-question-profile';
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

        // participants info
        companyName : '',
        participantType : 'oneperson',

        /**
         * string array of the given evaluation values
         */
        answers : [],
        resultPoints : '',
        resultPercentage : 0,
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

    // add click listeners
    $('.js-quick-test-start').click(Controller.showProfileFormForTestQuestion);
    $('.js-quick-test-question-button').click(Controller.onTestAnswerClick);
    $('.js-start-test-button').click(Controller.onProfileFormSubmit);


    // REMOVE ME:
//    $('#quick-test-result-progress-bar').progressbar({display_text: 'fill'});
//    var testState = Controller.testState;
//    document.getElementById('quick-test-result-companyName').innerHTML = 'My Company GmBWohl';
//    document.getElementById('quick-test-points').innerHTML = testState.resultPoints;
//    document.getElementById('quick-test-max-points').innerHTML = testState.maxPoints;
//    document.getElementById('quick-test-result-text').innerHTML = testState.feedbackContent;
    // Controller.initializeQuickTest();
};

Controller.onTestAnswerClick = function (event) {
    var answerValue = $(event.target).attr('data-value');
    // Controller.testState.questionIndex
    var weight = Data.testQuestions[Controller.testState.questionIndex].weight;
    if (weight !== undefined) {
        answerValue = parseInt(answerValue, 10) * weight + '';
    }
    console.log('       points: ' + answerValue);

    Controller.testState.answers.push(answerValue);
    Controller.showNextTestQuestion();
};

Controller.initializeQuickTest = function () {
    // add click listener
    Controller.showNextTestQuestion();
};

Controller.showProfileFormForTestQuestion = function () {
//    console.log('Showing profile form');
    Controller.previousQuestionId = Controller.quickTestIntroId;
    Controller.currentQuestionId = Controller.quickTestProfileId;
    Controller.fadeQuestions();
    $('quick-test-participant-companyName').focus();
};

Controller.onProfileFormSubmit = function () {
    var companyName = $('#quick-test-participant-companyName').val();
    var participantType = $('#js-quick-test-participant-participantType :selected').val();
    Controller.testState.companyName = companyName;
    Controller.testState.participantType = participantType;
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
        return $.inArray(Controller.testState.participantType, question.excludedParticipants);
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
        if (finalCalc.participantType === testState.participantType) {
            if (finalCalc.multiplyBy) {
                finalPoints = pointsSum * parseFloat(finalCalc.multiplyBy);
            } else {
                console.log('No \'multiplyBy\' defined in the final calculation ' +
                    'for the participantType ' + finalCalc.participantType);
            }
        }
    }

    // 62.44 is converted to 62
    testState.resultPoints = Math.floor(finalPoints);

    console.log('Result points sum: ' + pointsSum);
    console.log('Result points multiplied: ' + testState.resultPoints);
    console.log('Result percentage: ' + testState.resultPercentage);

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

    testState.resultPercentage = Number(testState.resultPoints / testState.maxPoints).toFixed(2) * 100;
    var progressBarElement = $('#quick-test-result-progress-bar');
    progressBarElement.attr('aria-valuetransitiongoal', testState.resultPercentage);

    // set the result values in the template
    document.getElementById('quick-test-result-companyName').innerHTML = testState.companyName;
    document.getElementById('quick-test-points').innerHTML = testState.resultPoints;
    document.getElementById('quick-test-max-points').innerHTML = testState.maxPoints;
    document.getElementById('quick-test-result-text').innerHTML = testState.feedbackContent;

    // set the color:
    var testColorClass = '';
    if (testState.resultLevel === 0) {
        testColorClass = 'basic-level-bg-text';
    } else if (testState.resultLevel === 1) {
        testColorClass = 'advanced-level-bg-text';
    } else if (testState.resultLevel === 2) {
        testColorClass = 'experienced-level-bg-text';
    } else if (testState.resultLevel === 3) {
        testColorClass = 'model-level-bg-text';
    }
    $('#quick-test-result-progress-bar').addClass(testColorClass);
//    document.getElementById('quick-test-result-progress-bar').className += ' ' + testColorClass;

    // show final result page
    Controller.currentQuestionId = Controller.quickTestResultId;
    Controller.fadeQuestions();

    progressBarElement.progressbar({display_text: 'fill'});
};

Controller.fadeQuestions = function () {
//    console.log("Fading out " + Controller.previousQuestionId);
    $('#' + Controller.previousQuestionId).fadeOut(
        Router.fadeOutSpeed, Controller.fadeInQuestion);
};

Controller.fadeInQuestion = function () {
//    console.log("Fading in " + Controller.currentQuestionId);
    $('#' + Controller.currentQuestionId).fadeIn(Router.fadeInSpeed);
};
