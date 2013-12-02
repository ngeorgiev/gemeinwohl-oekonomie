'use strict';

Controller.createMainPageBalancingHtml = function (indicators, negativeCriteria) {

    var compiledTemplate;

    var mainPageBalancingHtml = '';
    compiledTemplate = dust.compile(Template.mainPageBalancingTemplate, 'mainPageBalancingTemplate');
    dust.loadSource(compiledTemplate);
    dust.render('mainPageBalancingTemplate', indicator, function (err, out) {
        mainPageBalancingHtml += out;
    });

    document.getElementById('main-page-container').innerHTML = mainPageBalancingHtml;
};

/**
 * Creates the HTML for the Indicator Container from JSON data
 * @param indicators - JSON data
 * @param negativeCriteria - JSON data
 */
Controller.createIndicatorTemplates = function (indicators, negativeCriteria) {

    var compiledTemplate;

    var indicatorHtml = '';
    var numOfIndicators = indicators.length;
    var indicator;
    for (var indicatorIndex = 0; indicatorIndex < numOfIndicators; indicatorIndex++) {

        // the current indicator data
        indicator = indicators[indicatorIndex];

        compiledTemplate = dust.compile(Template.indicatorBalancingTemplate, 'indicatorBalancingTemplate');
        dust.loadSource(compiledTemplate);
        dust.render('indicatorBalancingTemplate', indicator, function (err, out) {
            indicatorHtml += out;
        });
    }

    var negativeCriteriaHtml = '';
    var numOfNegativeCriteria = negativeCriteria.length;
    var negativeCriterion;
    for (var criteriaIndex = 0; criteriaIndex < numOfNegativeCriteria; criteriaIndex++) {

        // the current negative criterion data
        negativeCriterion = negativeCriteria[criteriaIndex];

        compiledTemplate = dust.compile(Template.negativeCriteriaBalancingTemplate, 'negativeCriteriaBalancingTemplate');
        dust.loadSource(compiledTemplate);
        dust.render('negativeCriteriaBalancingTemplate', negativeCriterion, function (err, out) {
            negativeCriteriaHtml += out;
        });
    }

    indicatorHtml += negativeCriteriaHtml;

    document.getElementById('indicators-container').innerHTML = indicatorHtml;
};
