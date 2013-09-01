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
     * Initializes the URL Routing
     */
    init: function () {

        var urlHash = window.location.hash;

        var pageWasShown = Router.onHashChange();

        if(!pageWasShown && urlHash && urlHash.length > 1) {
            var hash = urlHash.substr(1);

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
                Router.showMatrix();
            } else if (hash.startsWith(Router.hashMatrix)) {
                Router.showQuickTest();
            } else {
                Router.showMainPage();
            }
        }

        $(window).bind('hashchange', Router.onHashChange);
    },

    /**
     * Return true if it has shown a page (main or matrix)
     * @returns {boolean}
     */
    onHashChange: function () {
        console.log('on hash change');
        var urlHash = window.location.hash;
        if(!urlHash) {
            Router.showMainPage();
            return true;
        } else if (urlHash === Router.hashSymbol + Router.hashMatrix) {
            Router.showMatrix();
            return true;
        } else if (urlHash === Router.hashSymbol + Router.hashQuickTest) {
            Router.showQuickTest();
            return true;
        }
        return false;
    },

    showPage: function (indicatorId, indicatorDetailId) {

        // init params
        if (indicatorId.startsWith(Router.hashMatrixMinus)) { // if matrix URL
            if (indicatorId.startsWith('n')) { // negative criteria URL
                indicatorDetailId = ''; // no details
            } else {
                indicatorDetailId = typeof indicatorDetailId !== 'undefined' ?
                    indicatorDetailId : '-goals';
            }
        }
        visibleElementId = indicatorId;

        $('#gwoe-matrix').fadeOut(100, function () {
            $(Router.hashSymbol + indicatorId).fadeIn(300);
        });
        window.location.hash = Router.hashSymbol + indicatorId + indicatorDetailId;
    },

    showMainPage : function () {
        if (visibleElementId) {
            $('#' + visibleElementId).fadeOut(100, Router.fadeInMainPage);
        } else {
            Router.fadeInMainPage();
        }
        window.location.hash = '';
        visibleElementId = Router.mainPageId;
    },

    showQuickTest : function () {
        console.log('Hiding: ' + visibleElementId);
        $('#' + visibleElementId).fadeOut(100, Router.fadeInQuickTest());
        visibleElementId = Router.quickTestId;
    },

    showMatrix : function () {
        console.log('Hiding: ' + visibleElementId);
        $('#' + visibleElementId).fadeOut(100, Router.fadeInMatrix());
        visibleElementId = Router.matrixId;
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
    }

};
