/*jshint multistr: true */

var gwoeMatrixTemplate =
    '<div id="gwoe-matrix" class="bubble">\
        \
        <table class="dtable">\
        \
            <thead>\
            <tr class="dheader-style">\
                <th class="dtable-cell col-1-6">\
                    <span class="matrix-value-header">{valueName}</span> / <span class="gwoe-blue">{stakeholdersName}</span>\
                </th>\
                <th class="dtable-cell col-1-6 gwoe-green">{values[0]}</th>\
                <th class="dtable-cell col-1-6 gwoe-green">{values[1]}</th>\
                <th class="dtable-cell col-1-6 gwoe-green">{values[2]}</th>\
                <th class="dtable-cell col-1-6 gwoe-green">{values[3]}</th>\
                <th class="dtable-cell col-1-6 gwoe-green">{values[4]}</th>\
            </tr>\
            </thead>\
            \
            <tbody>\
                <tr>\
                    <td class="dtable-cell col-1-6 dheader-style gwoe-blue-b">\
                        {stakeholders[0].shortcode}) {stakeholders[0].name}\
                    </td>\
                    <td class="dtable-cell indicator-cell" colspan="5">\
                        <div class="indicator-title">\
                            {stakeholders[0].values[0].shortcode}) {stakeholders[0].values[0].title}\
                        </div>\
                        <div class="indicator-description">\
                            {stakeholders[0].values[0].content}\
                        </div>\
                        <div class="indicator-points">\
                            {stakeholders[0].values[0].points}\
                        </div>\
                    </td>\
                </tr>\
            <tr>\
                <td class="dtable-cell col-1-6 dheader-style gwoe-blue-b">\
                    {stakeholders[1].shortcode}) {stakeholders[1].name}\
                </td>\
                <td class="dtable-cell indicator-cell" colspan="5">\
                    <div class="indicator-title">\
                        {stakeholders[1].values[0].shortcode}) {stakeholders[1].values[0].title}\
                    </div>\
                    <div class="indicator-description">\
                        {stakeholders[1].values[0].content}\
                    </div>\
                    <div class="indicator-points">\
                        {stakeholders[1].values[0].points}\
                    </div>\
                </td>\
            </tr>\
            \
            <tr>\
                <td class="dtable-cell col-1-6 dheader-style gwoe-blue-b">\
                    {stakeholders[2].shortcode}) {stakeholders[2].name}\
                </td>\
                \
                {#stakeholders[2].values}\
                <td class="dtable-cell indicator-cell col-1-6 ind-trigger" data-modal="matrix-{shortcodeSlug}">\
                    <div class="indicator-title">\
                        {shortcode}) {title}\
                    </div>\
                    <div class="indicator-description">\
                        {content}\
                    </div>\
                    <div class="indicator-points">\
                        {points}\
                    </div>\
                </td>\
                {/stakeholders[2].values}\
            </tr>\
            \
            <tr>\
                <td class="dtable-cell col-1-6 dheader-style gwoe-blue-b">\
                    {stakeholders[3].shortcode}) {stakeholders[3].name}\
                </td>\
                {#stakeholders[3].values}\
                <td class="dtable-cell indicator-cell col-1-6 ind-trigger" data-modal="matrix-{shortcodeSlug}">\
                    <div class ="indicator-title">\
                        {shortcode}) {title}\
                    </div>\
                    <div class="indicator-description">\
                        {content}\
                    </div>\
                    <div class="indicator-points">\
                        {points}\
                    </div>\
                </td>\
                {/stakeholders[3].values}\
            </tr>\
            \
            <tr>\
                <td class="dtable-cell col-1-6 dheader-style gwoe-blue-b">\
                    {stakeholders[4].shortcode}) {stakeholders[4].name}\
                </td>\
                {#stakeholders[4].values}\
                <td class="dtable-cell indicator-cell col-1-6 ind-trigger" data-modal="matrix-{shortcodeSlug}">\
                    <div class ="indicator-title">\
                        {shortcode}) {title}\
                    </div>\
                    <div class="indicator-description">\
                        {content}\
                    </div>\
                    <div class="indicator-points">\
                        {points}\
                    </div>\
                </td>\
                {/stakeholders[4].values}\
            </tr>\
            \
            </tbody>\
        </table>\
        <!-- end of matrix table -->\
        \
    </div>\
    <!-- end of bubble -->\
        ';
