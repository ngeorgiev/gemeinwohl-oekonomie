'use strict';

var Controller = {

    createPageHtml : function () {
        Controller.createMainPageHtml();
        // Controller.createQuickTestHtml();
        Controller.createMatrixHtml();
        Controller.createIndicatorsHtml();
        Controller.createFooterHtml();
    },

    createMainPageHtml : function () {

        var mainPageHtml = '';
        var compiledTemplate = dust.compile(Template.mainPageTemplate, 'mainPageTemplate');
        dust.loadSource(compiledTemplate);
        dust.render('mainPageTemplate', {}, function(err, out) {
            mainPageHtml += out;
        });

        document.getElementById('main-page-container').innerHTML = mainPageHtml;
    },

    createQuickTestHtml : function () {

        var quickTestHtml = '';
        var compiledTemplate = dust.compile(Template.quickTestTemplate, 'quickTestTemplate');
        dust.loadSource(compiledTemplate);
        dust.render('quickTestTemplate', Data.quickTest, function(err, out) {
            quickTestHtml += out;
        });

        document.getElementById('quick-test-container').innerHTML = quickTestHtml;
    },

    createMatrixHtml : function (matrixData) {
        if (matrixData == undefined) {
            matrixData = Data.matrix;
        }

        var matrixHtml = '';
        var compiledTemplate = dust.compile(Template.gwoeMatrixTemplate, 'gwoeMatrixTemplate');
        dust.loadSource(compiledTemplate);
        dust.render('gwoeMatrixTemplate', matrixData, function(err, out) {
            matrixHtml += out;
        });

        document.getElementById('gwoe-matrix-container').innerHTML = matrixHtml;

        $(window).resize(Controller.applyEqualHeightOnResizeOfMatrix);
    },

    applyEqualHeightOnResizeOfMatrix : function () {
        // resize only if the matrix page is opened
        if (Router.getCurrentPageUrl() === Router.hashSymbol + Router.hashMatrix) {
            Utils.applyEqualHeightOnResize();
        }
    },

    /**
     * Creates the HTML for all indicators
     *
     * @returns {boolean}
     */
    createIndicatorsHtml : function () {

        var dataIndicators = Data.indicators;
        var structure = dataIndicators.structure;

        var indicators = dataIndicators.data.indicators;
        var negativeCriteria = dataIndicators.data.negativeCriteria;

        Controller.createIndicatorContainer(indicators, negativeCriteria);
        Controller.createIndicatorTabs(structure, indicators, negativeCriteria);

        return true; // avoid message 'function has inconsistent return points'
    },

    /**
     * Creates the HTML for the Indicator Container from JSON data
     * @param indicators - JSON data
     * @param negativeCriteria - JSON data
     */
    createIndicatorContainer : function (indicators, negativeCriteria) {

        var indicatorHtml = '';

        var numOfIndicators = indicators.length;
        var indicator;
        for (var indicatorIndex = 0; indicatorIndex < numOfIndicators; indicatorIndex++) {

            // the current indicator data
            indicator = indicators[indicatorIndex];
            
            //
            var compiledTemplate = dust.compile(Template.indicatorTabsTemplate, 'indicatorTabsTemplate');
            dust.loadSource(compiledTemplate);
            dust.render('indicatorTabsTemplate', indicator, function(err, out) {
                indicatorHtml += out;
            });
        }

        indicatorHtml += Controller.getNegativeCriteriaHtml(negativeCriteria);

        document.getElementById('indicators-container').innerHTML = indicatorHtml;
    },

    /**
     * Creates the HTML for the Negative Criteria from JSON data
     * @param negativeCriteria - JSON data
     * @returns {string}
     */
    getNegativeCriteriaHtml : function (negativeCriteria) {

        var negativeCriteriaHtml = '';

        var numOfNegativeCriteria = negativeCriteria.length;
        var negativeCriterion;
        for (var criteriaIndex = 0; criteriaIndex < numOfNegativeCriteria; criteriaIndex++) {

            // the current negative criterion data
            negativeCriterion = negativeCriteria[criteriaIndex];

            var compiledTemplate = dust.compile(Template.negativeCriteriaTemplate, 'negativeCriteriaTemplate');
            dust.loadSource(compiledTemplate);
            dust.render('negativeCriteriaTemplate', negativeCriterion, function(err, out) {
                negativeCriteriaHtml += out;
            });
        }

        return  negativeCriteriaHtml;
    },

    /**
     * Creates the HTML for the Indicator Tabs from JSON data
     * @param structure - JSON data
     * @param indicators - JSON data
     * @param negativeCriteria - JSON data
     */
    createIndicatorTabs : function (structure, indicators, negativeCriteria) {

        var numOfIndicators = indicators.length;
        var indicator;

        for (var indicatorIndex = 0; indicatorIndex < numOfIndicators; indicatorIndex++) {
            // the current indicator data
            indicator = indicators[indicatorIndex];

            // add tab names
            $('.matrix-goals-tab-title').html(structure.goals);
            $('.matrix-impulsQuestions-tab-title').html(structure.impulsQuestions);
            $('.matrix-table-tab-title').html(structure.table);
            $('.matrix-definition-tab-title').html(structure.definition);
            $('.matrix-implementationHelp-tab-title').html(structure.implementationHelp);
            $('.matrix-moreinfo-tab-title').html(structure.moreinfo);

            // add tab contents
            if (indicator.goals) {
                document.getElementById('matrix-'+indicator.shortcodeSlug+'-goals-content').innerHTML =
                    indicator.goals.content;
            }
            if (indicator.impulsQuestions) {
                document.getElementById('matrix-'+indicator.shortcodeSlug+'-impulsQuestions-content').innerHTML =
                    indicator.impulsQuestions.content;
            }
            if (indicator.details) {
                document.getElementById('matrix-'+indicator.shortcodeSlug+'-details-content').innerHTML =
                    indicator.details.content;
            }
            if (indicator.definition && indicator.definition.content) {
                document.getElementById('matrix-'+indicator.shortcodeSlug+'-definition-content').innerHTML =
                    indicator.definition.content;
            }
            if (indicator.implementationHelp && indicator.implementationHelp.content) {
                document.getElementById('matrix-'+indicator.shortcodeSlug+'-implementationHelp-content').innerHTML =
                    indicator.implementationHelp.content;
            }
            if (indicator.moreinfo) {
                document.getElementById('matrix-'+indicator.shortcodeSlug+'-moreinfo-content').innerHTML =
                    indicator.moreinfo.content;
            }
            document.getElementById('matrix-'+indicator.shortcodeSlug+'-indicator-table').innerHTML =
                Controller.getMeasurementTableHTMLString(indicator);
            document.getElementById('matrix-'+indicator.shortcodeSlug+'-indicator-table-legend').innerHTML =
                Controller.getTableLegendString(indicator.table);
            // TODO: add the rest.
        }

        var numOfNegativeCriteria = negativeCriteria.length;
        var negativeCriterion;
        for (var criteriaIndex = 0; criteriaIndex < numOfNegativeCriteria; criteriaIndex++) {

            // the current negative criterion data
            negativeCriterion = negativeCriteria[criteriaIndex];

            // add contents
            document.getElementById('matrix-'+negativeCriterion.shortcodeSlug+'-content').innerHTML =
                negativeCriterion.content;
        }
    },

    getTableLegendString : function (indicatorTable) {
        // TODO: create the string from the JSON data.
        if (indicatorTable.legend !== undefined) {

            var tableLegendHtml = '';

            var compiledTemplate = dust.compile(Template.tableLegend, 'tableLegend');
            dust.loadSource(compiledTemplate);
            dust.render('tableLegend', indicatorTable, function(err, out) {
                tableLegendHtml += out;
            });

            return tableLegendHtml;
        } else {
            return '';
        }
    },

    /**
     * Creates the HTML string for the whole subindicator HTML table.
     *
     * @param indicator
     * @returns {string}
     */
    getMeasurementTableHTMLString : function (indicator) {

        var hmlString = Controller.getMeasurementTableHeaderHTMLString(Data.indicators.structure);

        var indicatorTableData = indicator.table;

        // return emtpy table if no table data is defined.
        if (indicatorTableData === undefined ||
            indicatorTableData.subindicators === undefined) {
            return hmlString;
        }

        var numOfSubindicators = indicatorTableData.subindicators.length;
        for (var indicatorIndex = 0; indicatorIndex < numOfSubindicators; indicatorIndex++) {
            var subindicator = indicatorTableData.subindicators[indicatorIndex];
            var subindicatorAdded = false;

            var numOfDevTracks = subindicator.developmentTracks.length;
            for (var devTrackIndex = 0; devTrackIndex < numOfDevTracks; devTrackIndex++) {
                var devTrack = subindicator.developmentTracks[devTrackIndex];
                var numOfDevDetails = devTrack.developmentDetails.length;

                // one row for every dev track
                hmlString += '<tr>';

                if (!subindicatorAdded) {
                    // add subindicator info
                    // if more than one dev track and this is the first one
                    if (numOfDevTracks > 1) {
                        hmlString += '<td rowspan="2" class="dtable-cell indicator-cell dheader-style dheader-style-border-l" >';
                    } else {
                        hmlString += '<td class="dtable-cell indicator-cell dheader-style dheader-style-border-l">';
                    }
                    hmlString += subindicator.title + '<br/><br/>';
                    hmlString += '('+Data.indicators.structure.relevance+': '+
                        Data.indicators.structure.relevances[subindicator.relevance]+')';
                    hmlString += '</td>';
                }

                // add development tracks
                for (var devDetailsIndex = 0; devDetailsIndex < numOfDevDetails; devDetailsIndex++) {
                    var devDetail = devTrack.developmentDetails[devDetailsIndex];

                    // if more than one dev track and this is the first one
                    if (devDetail.levels.length > 1) {
                        hmlString += '<td colspan="'+devDetail.levels.length+'"  class="dtable-cell indicator-cell" >';
                    } else {
                        hmlString += '<td class="dtable-cell indicator-cell">';
                    }

                    hmlString += devDetail.description;
                    hmlString += '</td>';
                }

                subindicatorAdded = true;
                hmlString += '</tr>';
            }
        }

        return hmlString;
    },

    /**
     * Creates the HTML string for the subindicator table header.
     *
     * @param structure - the JSON structure data
     * @returns {string}
     */
    getMeasurementTableHeaderHTMLString : function (structure) {
        var indicatorLevels = structure.levels;

        var hmlString = '';
        hmlString += '<thead><tr class="dheader-style">';
        hmlString += '<th class="dtable-cell dheader-style dheader-style-border-l col-1-6 subindicator-header">'+
            structure.subindicator+'</th>';

        var beginner = indicatorLevels.beginner;
        var advanced = indicatorLevels.advanced;
        var experienced = indicatorLevels.experienced;
        var model = indicatorLevels.model;

        hmlString += '<th class="dtable-cell col-1-6 basic-level-header">' +
            beginner.title+'<br/>'+
            Controller.getMinMaxRangeString(beginner.min, beginner.max)+'</th>';

        hmlString += '<th class="dtable-cell col-1-6 advanced-level-header">'+
            indicatorLevels.advanced.title+'<br/>'+
            Controller.getMinMaxRangeString(advanced.min, advanced.max)+'</th>';

        hmlString += '<th class="dtable-cell col-1-6 experienced-level-header">'+
            indicatorLevels.experienced.title+'<br/>'+
            Controller.getMinMaxRangeString(experienced.min, experienced.max)+'</th>';

        hmlString += '<th class="dtable-cell col-1-6 model-level-header">'+
            indicatorLevels.model.title+'<br/>'+
            Controller.getMinMaxRangeString(model.min, model.max)+'</th>';

        hmlString += '</tr></thead>';
        return hmlString;
    },

    getMinMaxRangeString : function (minStr, maxStr) {
        return '(' + minStr + ' - ' + maxStr + ' %)';
    },

    createFooterHtml : function () {
        var footerHtml = '';
        var compiledTemplate = dust.compile(Template.footerTemplate, 'footerTemplate');
        dust.loadSource(compiledTemplate);
        dust.render('footerTemplate', {}, function(err, out) {
            footerHtml += out;
        });
        document.getElementById('footer-container').innerHTML = footerHtml;
        console.log('createFooterHtml');
    }
};
