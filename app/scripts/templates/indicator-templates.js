/*jshint multistr: true */

var indicatorTabsTemplate =
    '<div id="matrix-{shortcodeSlug}" class="indicator-modal display-none">\
        <button class="back-to-matrix">Zeige die Matrix</button>\
        \
        <div class="indicator-page-title">\
            <h2>{shortcode}: {name}</h2>\
        </div>\
        \
        <div id="tabs">\
            <ul id="tablist">\
            \
                <span id="matrix-{shortcodeSlug}-goals" class="fixedanchor"></span>\
                <li class="tabcontainer">\
                    <a href="#matrix-{shortcodeSlug}-goals" class="tablink matrix-goals-tab-title"></a>\
                    <div id="matrix-{shortcodeSlug}-goals-content" class="tabcontent">\
                    </div>\
                </li>\
            \
                <span id="matrix-{shortcodeSlug}-impulsQuestions" class="fixedanchor"></span>\
                <li class="tabcontainer">\
                    <a href="#matrix-{shortcodeSlug}-impulsQuestions" class="tablink matrix-impulsQuestions-tab-title"></a>\
                    <div id="matrix-{shortcodeSlug}-impulsQuestions-content" class="tabcontent">\
                    </div>\
                </li>\
            \
                <span id="matrix-{shortcodeSlug}-table" class="fixedanchor"></span>\
                <li class="tabcontainer">\
                    <a href="#matrix-{shortcodeSlug}-table" class="tablink matrix-table-tab-title"></a>\
                    <div id="matrix-{shortcodeSlug}-table-content" class="tabcontent">\
                        <div id="matrix-{shortcodeSlug}-indicator-table-legend" class="indicator-table-legend"></div>\
                        <table id="matrix-{shortcodeSlug}-indicator-table" class="dtable">\
                        </table>\
                    </div>\
                </li>\
            \
            </ul> \
        </div>\
    </div>';

