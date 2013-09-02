'use strict';

// The first test question is the current
Controller.currentQuestionIndex = 0;
Controller.questionIdPrefix = 'quick-test-question-';

Controller.quickTestIntroId = 'quick-test-introduction';
Controller.previousQuestionId = '';
Controller.currentQuestionId = '';
Controller.nextQuestionId = '';

Controller.createQuickTestHtml = function () {

    var quickTestHtml = '';
    var compiledTemplate = dust.compile(Template.quickTestTemplate, 'quickTestTemplate');
    dust.loadSource(compiledTemplate);
    dust.render('quickTestTemplate', Data.quickTest, function(err, out) {
        quickTestHtml += out;
    });

    document.getElementById('quick-test-container').innerHTML = quickTestHtml;

    Controller.initializeQuickTest();
};

Controller.initializeQuickTest = function () {
    // add click listener
    $('.quick-test-start').click(Controller.startQuickTest);
};


Controller.startQuickTest = function () {
    Controller.currentQuestionId = Controller.quickTestIntroId;
    // 0 is the index for the first question
    Controller.showTestQuestion(0);
};

Controller.showTestQuestion = function (questionIndex) {
    console.log('Question ' + questionIndex);
    var questionId = Controller.questionIdPrefix + questionIndex;

    Controller.previousQuestionId = Controller.currentQuestionId;
    Controller.currentQuestionId = questionId;

    $('#' + Controller.previousQuestionId).fadeOut(
        Router.fadeOutSpeed, Controller.fadeInQuestion);
};

Controller.fadeInQuestion = function () {
    $('#' + Controller.currentQuestionId).fadeIn(Router.fadeInSpeed);
};
