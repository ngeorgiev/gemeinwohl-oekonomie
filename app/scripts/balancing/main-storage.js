'use strict';

console.log('Local Storage');

Controller.createMatrixHtml(Data.balances);

// Controller
var dataIndicators = Data.indicators;
var indicators = dataIndicators.data.indicators;
var negativeCriteria = dataIndicators.data.negativeCriteria;
Controller.createIndicatorTemplates(indicators, negativeCriteria);

// Add CKEditor

var numOfIndicators = indicators.length;
var indicator;
for (var indicatorIndex = 0; indicatorIndex < numOfIndicators; indicatorIndex++) {

    // the current indicator data
    indicator = indicators[indicatorIndex];

    CKEDITOR.disableAutoInline = true;
    CKEDITOR.inline('matrix-' + indicator.shortcodeSlug + '-editor');
}


Router.fadeInMatrix();

// Routing
/* Tab Trigger */
$('.ind-trigger').each(function (i, elem) {
    var indicatorEl = $(elem);
    var indicatorModalId = indicatorEl.attr('data-modal');

    indicatorEl.click(function () {
        Router.showPage(indicatorModalId);
        $("html, body").animate({ scrollTop: 170 }, "slow");
    });
});

$('.back-to-matrix').each(function (i, elem) {
    $(elem).click(Router.showMatrixByHash);
});


$(document).ready(function () {
    Router.init();
});