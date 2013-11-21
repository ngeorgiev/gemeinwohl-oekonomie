'use strict';

/**
 * Creates the HTML for the Indicator Container from JSON data
 * @param indicators - JSON data
 * @param negativeCriteria - JSON data
 */
Controller.createIndicatorTemplates = function (indicators, negativeCriteria) {

    var indicatorHtml = '';

    var numOfIndicators = indicators.length;
    var indicator;
    for (var indicatorIndex = 0; indicatorIndex < numOfIndicators; indicatorIndex++) {

        // the current indicator data
        indicator = indicators[indicatorIndex];

        //
        var compiledTemplate = dust.compile(Template.indicatorBalancingTemplate, 'indicatorBalancingTemplate');
        dust.loadSource(compiledTemplate);
        dust.render('indicatorBalancingTemplate', indicator, function (err, out) {
            indicatorHtml += out;
        });
    }

    indicatorHtml += Controller.getNegativeCriteriaHtml(negativeCriteria);

    document.getElementById('indicators-container').innerHTML = indicatorHtml;

};
