'use strict';

var Router = {

    hashSymbol : '#',
    hashQuickTest : 'quick-test',
    hashMatrix : 'matrix',
    hashMatrixMinus : 'matrix-',

    mainPageId : 'main-page',
    quickTestId : 'quick-test',
    matrixId : 'gwoe-matrix',

    fadeOutSpeed : 100,
    fadeInSpeed : 300,

    /**
     * The default subIndicator Id to be shown.
     */
    defaultSubIndicatorId : '-table',

    visibleElementId : '',

    lastUrlHash : '---',

    /**
     * Initializes the URL Routing
     */
    init: function () {

        var urlHash = Router.getUrlHash();
        console.log('urlHash = ' + urlHash);

        var pageWasShown = Router.onHashChange();

        if(!pageWasShown && urlHash && urlHash.length > 1) {
            var hash = urlHash.substr(1);
            console.log('hash = ' + hash);

            if (hash.startsWith(Router.hashMatrixMinus)) {
                // hack: assumes the format "matrix-<pageid>"
                if (hash.length === 9) {
                    Router.showPage(hash);
                } else if (hash.length > 9) {
                    var indicatorId = hash.substr(0, 9);
                    var indicatorDetailId = urlHash.substr(10);
                    Router.showPage(indicatorId, indicatorDetailId);
                } else {
                    Router.showMatrix();
                }
            } else if (hash.startsWith(Router.hashMatrix)) {
                console.log('showMatrix');
                Router.showMatrix();
            } else if (hash.startsWith(Router.hashMatrix)) {
                Router.showQuickTest();
                console.log('showQuickTest');
            } else {
                Router.showMainPage();
                console.log('showMainPage');
            }
        }

        $(window).bind('hashchange', Router.onHashChange);
    },

    getCurrentPageUrl : function() {
        return window.location.hash;
    },

    /**
     * Return true if it has shown a page (main,  matrix or test)
     * @returns {boolean}
     */
    onHashChange: function () {
        var urlHash = Router.getUrlHash();
        var pageWasShown = false;

        if(!urlHash && urlHash !== Router.lastUrlHash) {
            Router.showMainPage();
            pageWasShown = true;
        } else if (urlHash === Router.hashSymbol + Router.hashMatrix) {
            Router.showMatrix();
            pageWasShown = true;
        } else if (urlHash === Router.hashSymbol + Router.hashQuickTest) {
            Router.showQuickTest();
            pageWasShown = true;
        }
        Router.lastUrlHash = urlHash;
        return pageWasShown;
    },

    getUrlHash: function () {
        var urlHash = window.location.hash;

        if (urlHash === Router.hashSymbol && urlHash.length === 1) {
            urlHash = ''; // IE fix: remove the # symbol
        }
        return urlHash;
    },

    showPage: function (indicatorId, indicatorDetailId) {

        // init params
        if (indicatorId.startsWith(Router.hashMatrixMinus)) { // if matrix URL
            if (indicatorId.startsWith('n')) { // negative criteria URL
                indicatorDetailId = ''; // no details
            } else {
                indicatorDetailId = typeof indicatorDetailId !== 'undefined' ?
                    indicatorDetailId : Router.defaultSubIndicatorId;
            }
        }
        Router.visibleElementId = indicatorId;

        $('#gwoe-matrix').fadeOut(Router.fadeOutSpeed, function () {
            $(Router.hashSymbol + indicatorId).fadeIn(Router.fadeInSpeed);
        });
        window.location.hash = Router.hashSymbol + indicatorId + indicatorDetailId;
    },

    showMainPage : function () {
        if (Router.visibleElementId) {
            $('#' + Router.visibleElementId).fadeOut(Router.fadeOutSpeed, Router.fadeInMainPage);
        } else {
            Router.fadeInMainPage();
        }
        window.location.hash = '';
        Router.visibleElementId = Router.mainPageId;
    },

    showQuickTest : function () {
        $('#' + Router.visibleElementId).fadeOut(
            Router.fadeOutSpeed, Router.fadeInQuickTest());
        Router.visibleElementId = Router.quickTestId;
    },

    showMatrix : function () {
        $('#' + Router.visibleElementId).fadeOut(
            Router.fadeOutSpeed, Router.fadeInMatrix());
        Router.visibleElementId = Router.matrixId;
    },

    showMatrixByHash : function () {
        window.location.hash = Router.hashMatrix;
    },

    fadeInContainer : function (containerId) {
        $('#' + containerId).fadeIn(Router.fadeInSpeed);
    },

    fadeInMainPage : function (containerId) {
        Router.fadeInContainer(Router.mainPageId);
    },

    fadeInQuickTest : function (containerId) {
        Router.fadeInContainer(Router.quickTestId);
    },

    fadeInMatrix : function (containerId) {
        Router.fadeInContainer(Router.matrixId);
        Utils.applyEqualHeightRecalculate();
    }

};
