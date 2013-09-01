'use strict';

var Router = {

    hashSymbol: '#',
    matrixPrefix: 'matrix-',

    /**
     * Initializes the URL Routing
     */
    init: function () {

        // Open the given hash value from the URL
        var urlHash = window.location.hash;
        if (urlHash && urlHash.length > 1) {
            var hash = urlHash.substr(1);

            if (hash.startsWith(Router.matrixPrefix)) {
                // hack: assumes the format "matrix-<pageid>"
                if (hash.length === 9) {
                    Router.showPage(hash);
                } else if (hash.length > 9) {
                    var indicatorId = hash.substr(0, 9);
                    var indicatorDetailId = urlHash.substr(10);
                    Router.showPage(indicatorId, indicatorDetailId);
                }
            }
        }

        // if the user clicks the back button to go the main page, show the matrix
        $(window).bind('hashchange', function () {
            var urlHash = window.location.hash;
            if(!urlHash) {
                Router.showMatrix();
            }
        });
    },

    showPage: function (indicatorId, indicatorDetailId) {

        // init params
        if (indicatorId.startsWith(Router.matrixPrefix)) { // if matrix URL
            if (indicatorId.startsWith('n')) { // negative criteria URL
                indicatorDetailId = ''; // no details
            } else {
                indicatorDetailId = typeof indicatorDetailId !== 'undefined' ?
                    indicatorDetailId : '-goals';
            }
        }
        currentIndicatorId = indicatorId;

        $('#gwoe-matrix').fadeOut(100, function () {
            $(Router.hashSymbol + indicatorId).fadeIn(300);
        });
        window.location.hash = Router.hashSymbol + indicatorId + indicatorDetailId;
    },

    showMatrix: function () {
        $('#' + currentIndicatorId).fadeOut(100, function () {
            $('#gwoe-matrix').fadeIn(300);
        });
        window.location.hash = '';
        currentIndicatorId = '';
    }

};
