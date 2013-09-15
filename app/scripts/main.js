'use strict';

Controller.createPageHtml();

/* Tabs */

/* Tab Trigger */
$('.ind-trigger').each(function (i, elem) {
    var indicatorEl = $(elem);
    var indicatorModalId = indicatorEl.attr('data-modal');

    indicatorEl.click(function () {
        Router.showPage(indicatorModalId);
//        window.scrollTo(0, 170);
        $("html, body").animate({ scrollTop: 170 }, "slow");
    });
});

$('.back-to-matrix').each(function (i, elem) {
    $(elem).click(Router.showMatrixByHash);
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

