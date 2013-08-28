'use strict';

Controller.createPageHtml();

/* Tabs */

/* Tab Trigger */
$('.ind-trigger').each(function (i, elem) {
    var indicatorEl = $(elem);
    var indicatorModalId = indicatorEl.attr('data-modal');

    indicatorEl.click(function () {
        Router.showIndicator(indicatorModalId);
    });
});

$('.back-to-matrix').each(function (i, elem) {
    $(elem).click(function () {
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

