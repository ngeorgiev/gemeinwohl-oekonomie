/*jshint multistr: true */

Template.quickTestTemplate =
    '<div id="quick-test" class="display-none">\
        <h1>Schnelltest</h1>\
        <div id="quick-test-introduction">\
            <br/>\
            <p>\
                <button type="button" class="btn btn-lg btn-gwoe quick-test-start">Schnelltest starten</button>\
            </p>\
            <br/>\
            {#data.tests}\
            {introduction.content|s}\
            <br/>\
            <button type="button" class="btn btn-lg btn-gwoe quick-test-start">Schnelltest starten</button>\
            {/data.tests}\
        </div>\
        {#data.tests}\
        <div id="quick-test-questions">\
            {#questions}\
            <div id="quick-test-question-{$idx}" class="quick-test-question display-none">\
                <div class="quick-test-questions-indicator">\
                    {stakeholders}{gwoeValue}\
                </div>\
                <div class="quick-test-questions-text">\
                    {text}\
                </div>\
                <div class="quick-test-questions-buttons">\
                    {#structure.testTypes[0].individualAnswer.evaluationValues}\
                    <button data-value="{value}" type="button" class="btn btn-lg btn-default btn-gwoe-level-{$idx} quick-test-question-button">\
                        {text}\
                    </button>\
                    {/structure.testTypes[0].individualAnswer.evaluationValues}\
                </div>\
            </div>\
            {/questions}\
        </div>\
        {/data.tests}\
        <div id="quick-test-result" class="display-none">\
            <div class="quick-test-result-points-container">\
                Ergebnis: <span id="quick-test-points"></span> von \
                <span id="quick-test-max-points"></span> Punkte.\
            </div>\
            <div id="quick-test-result-text">\
                \
            </div>\
        </div>\
    </div>';
