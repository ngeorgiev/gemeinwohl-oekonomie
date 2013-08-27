'use strict';

Controller.createIndicatorsHTML();

/* Tabs */

/* Tab Trigger */
$('.ind-trigger').each(function (i, elem) {
    console.log('found.');
    var indicatorEl = $(elem);
    var indicatorModalId = indicatorEl.attr('data-modal');

    console.log('adding listener... ');
    indicatorEl.click(function () {
        console.log('listener added. ' + indicatorModalId);
        Router.showIndicator(indicatorModalId);
    });
});

$('.back-to-matrix').each(function (i, elem) {
    $(elem).click(function () {
        console.log('Back clcked');
        Router.showMatrix();
    });
});


$(document).ready(function () {
    Router.init();
});

/* comment */
/*

var templateTest = 'Hi {name}';
var mydata = {
    name : 'Nikolay'
};

var compiledTemplate = dust.compile(templateTest, 'templateTest');
dust.loadSource(compiledTemplate);
dust.render("templateTest", mydata, function(err, out) {
  console.log(out);
});
*/

