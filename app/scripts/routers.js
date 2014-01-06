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
    lastIndicatorId : '',
    lastIndicatorDetailId : '',

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
        return Router.getUrlHash();
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

        // hack: assumes the format "matrix-<pageid>"
        if (urlHash.length > 9) {
            var hash = urlHash.substr(1);
            var indicatorId = hash.substr(0, 9);
            var indicatorDetailId = hash.substr(9);
            Router.fixIECssTabs(indicatorId, indicatorDetailId);
        }

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

        console.log('showPage: ('+indicatorId+', '+indicatorDetailId+')');
        // init params
        if (indicatorId.startsWith(Router.hashMatrixMinus)) { // if matrix URL
            if (indicatorId.startsWith('n')) { // negative criteria URL
                indicatorDetailId = ''; // no details
            } else {
                indicatorDetailId = typeof indicatorDetailId !== 'undefined' ?
                    indicatorDetailId : Router.defaultSubIndicatorId;
            }
        }
        console.log('indicatorDetailId = '+indicatorDetailId);
        Router.visibleElementId = indicatorId;

        $('#gwoe-matrix').fadeOut(Router.fadeOutSpeed, function () {
            $(Router.hashSymbol + indicatorId).fadeIn(Router.fadeInSpeed);
        });

        window.location.hash = Router.hashSymbol + indicatorId + indicatorDetailId;
    },

    fixIECssTabs : function (indicatorId, indicatorDetailId) {

        if ($('html').hasClass('lt-ie9')) {

            var tabContentCssClass = 'js-tabcontainer';
            if (Router.lastIndicatorId.length > 0) {
                var lastTabContentId = Router.lastIndicatorId+Router.lastIndicatorDetailId+'-content';
                var lastTabContent = document.getElementById(lastTabContentId);
                //lastTabContent.setAttribute('class', 'tabcontent');
                lastTabContent.setAttribute('style', 'visibility: hidden !important');

                var lastTabLinkId = Router.lastIndicatorId+Router.lastIndicatorDetailId+'-link';
                console.log('lastTabLinkId = ' + lastTabLinkId);
                var lastTabLink = document.getElementById(lastTabLinkId);
                // var tabLink = $(tabLinkId);
                // tabLink.toggleClass('js-tablink'); // added, but not painted in IE8
                lastTabLink.setAttribute('style', 'border-bottom: 1px solid #D8D8D8; color: #888888;');
            }
            var tabContentId = indicatorId+indicatorDetailId+'-content';
            var tabContent = document.getElementById(tabContentId);
            console.log('document.getElementById(\''+tabContentId+'\')');
            var newCssClass = 'tabcontent ' + tabContentCssClass;
            //tabContent.setAttribute('class', newCssClass);
            tabContent.setAttribute('style', 'visibility: visible !important');

            var tabLinkId = indicatorId+indicatorDetailId+'-link';
            var tabLink = document.getElementById(tabLinkId);
            // var tabLink = $(tabLinkId);
            // tabLink.toggleClass('js-tablink'); // added, but not painted in IE8
            tabLink.setAttribute('style', 'border-color: #D8D8D8; border-radius: 3px 3px 0 0; border-style: solid solid none; border-width: 1px 1px 0; color: #000000;');
        }

        Router.lastIndicatorId = indicatorId;
        Router.lastIndicatorDetailId = indicatorDetailId;
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
