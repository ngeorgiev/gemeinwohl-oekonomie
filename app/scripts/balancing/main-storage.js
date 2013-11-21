'use strict';

console.log('Local Storage');

Controller.createMatrixHtml(Data.balances);

var ckeditor_config = {
    // Define changes to default configuration here.
    // For the complete reference:
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config

    language : 'de',
    uiColor : '#F8F8F8',

    // The toolbar groups arrangement, optimized for two toolbar rows.
    toolbar : [
        {
            name: 'styles',
            items: [ 'Format', 'Font', 'FontSize' ]
        },
        {
            name: 'clipboard',
            groups: [ 'clipboard', 'undo' ],
            items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ]
        },
        {
            name: 'tools',
            items: [ 'Maximize', 'ShowBlocks' ]
        },
        '/',
        {
            name: 'basicstyles',
            groups: [ 'basicstyles', 'cleanup' ],
            items: [ 'Bold', 'Italic', 'Underline']
        },
        {
            name: 'colors',
            items: [ 'TextColor', 'BGColor' ]
        },
        {
            name: 'paragraph',
            groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ],
            items: [ 'BulletedList', 'NumberedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
        },
        {
            name: 'links',
            items: [ 'Link', 'Unlink']
        },
        {
            name: 'insert',
            items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar']
        }
    ],

    // Toolbar groups configuration.
    toolbarGroups : [
        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ] },
        { name: 'forms' },
        '/',
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
        { name: 'links' },
        { name: 'insert' },
        '/',
        { name: 'styles' },
        { name: 'colors' },
        { name: 'tools' },
        { name: 'others' },
        { name: 'about' }
    ],


    // Remove some buttons, provided by the standard plugins, which we don't
    // need to have in the Standard(s) toolbar.
    // config.removeButtons = 'Subscript,Superscript';

    // Se the most common block elements.
    format_tags : 'p;h1;h2;h3;pre',

    // Make dialogs simpler.
    removeDialogTabs : 'image:advanced;link:advanced'
};

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

    var editorId = 'matrix-' + indicator.shortcodeSlug + '-editor';
    CKEDITOR.disableAutoInline = true;
    CKEDITOR.inline(editorId, ckeditor_config);
}

CKEDITOR.inline('header-company-title', ckeditor_config);

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