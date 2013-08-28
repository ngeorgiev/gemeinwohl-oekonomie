'use strict';

var Controller = {

    /**
     * Creates the HTML for all indicators
     *
     * @returns {boolean}
     */
    createIndicatorsHTML : function () {


        var structure = Data.indicators.structure;
        var indicatorsData = Data.indicators.data;
        var numOfIndicators = indicatorsData.length;

        var indicatorHtml = '';
        var indicatorIndex;
        var indicator;

        for (indicatorIndex = 0; indicatorIndex < numOfIndicators; indicatorIndex++) {

            // the current indicator data
            indicator = indicatorsData[indicatorIndex];

            //
            var compiledTemplate = dust.compile(indicatorTabsTemplate, 'indicatorTabsTemplate');
            dust.loadSource(compiledTemplate);
            dust.render('indicatorTabsTemplate', indicator, function(err, out) {
                indicatorHtml += out;
            });
        }

        console.log(indicatorHtml);

        document.getElementById('indicators-container').innerHTML = indicatorHtml;

        for (indicatorIndex = 0; indicatorIndex < numOfIndicators; indicatorIndex++) {
            // the current indicator data
            indicator = indicatorsData[indicatorIndex];

            // add tab names
            $('.matrix-goals-tab-title').html(structure.goals);
            $('.matrix-impulsQuestions-tab-title').html(structure.impulsQuestions);
            $('.matrix-table-tab-title').html(structure.table);
            $('.matrix-definition-tab-title').html(structure.definition);
            $('.matrix-implementationHelp-tab-title').html(structure.implementationHelp);
            $('.matrix-moreinfo-tab-title').html(structure.moreinfo);

            // add tab contents
            document.getElementById('matrix-'+indicator.shortcodeSlug+'-goals-content').innerHTML =
                indicator.goals.content;
            document.getElementById('matrix-'+indicator.shortcodeSlug+'-impulsQuestions-content').innerHTML =
                indicator.impulsQuestions.content;
            document.getElementById('matrix-'+indicator.shortcodeSlug+'-indicator-table').innerHTML =
                Controller.getMeasurementTableHTMLString(indicator);
            document.getElementById('matrix-'+indicator.shortcodeSlug+'-indicator-table-legend').innerHTML =
                Controller.getTableLegendString();
            // TODO: add the rest.
        }

        return true; // avoid message 'function has inconsistent return points'
    },

    getTableLegendString : function () {
        // TODO: create the string from the JSON data.
        return 'Table Legend: ';
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
        if (typeof indicatorTableData === 'undefined') {
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
                        hmlString += '<td rowspan="2" class="dtable-cell indicator-cell dheader-style" >';
                    } else {
                        hmlString += '<td class="dtable-cell indicator-cell dheader-style">';
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
        hmlString += '<th class="dtable-cell col-1-6 subindicator-header">'+
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
    }
};
