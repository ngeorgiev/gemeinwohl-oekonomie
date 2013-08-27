'use strict';

var Router = {

    /**
     * Initializes the URL Routing
     */
    init : function () {

        // Open the given hash value from the URL
        var urlHash = window.location.hash;
        if (urlHash && urlHash.length > 1) {
            var hash = urlHash.substr(1);

            // hack: assumes the format "matrix-a1"
            if (hash.length === 9) {
                Router.showIndicator(hash);
            } else if (hash.length > 9) {
                var indicatorId = hash.substr(0, 9);
                var indicatorDetailId = urlHash.substr(10);
                Router.showIndicator(indicatorId, indicatorDetailId);
            }
        }
    },

    showIndicator : function (indicatorId, indicatorDetailId) {

        // init params
        indicatorDetailId = typeof indicatorDetailId !== 'undefined' ?
            indicatorDetailId : '-goals';
        currentIndicatorId = indicatorId;

        $('#gwoe-matrix').fadeOut(100, function () {
            $('#' + indicatorId).fadeIn(300);
        });
        window.location.hash = '#' + indicatorId + indicatorDetailId;
    },

    showMatrix : function () {
        $('#' + currentIndicatorId).fadeOut(100, function () {
            $('#gwoe-matrix').fadeIn(300);
        });
        window.location.hash = '';
        currentIndicatorId = '';
    }

};
