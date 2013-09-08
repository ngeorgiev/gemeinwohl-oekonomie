'use strict';

var Utils = {};

/**
 * Returns the sum of all integers in the given array.
 *
 * @param intArray the array contain integers of type number and string.
 * @returns {number} the sum of all integers in the array.
 */
Utils.sumIntegersInArray = function (intArray) {

    var sum = 0;
    var arrayLength = intArray.length;
    for (var arrayIndex = 0; arrayIndex < arrayLength; arrayIndex++) {
        sum += parseInt(intArray[arrayIndex], 10);
    }
    return sum;
};

Utils.applyEqualHeightOnWidthChange = function () {
    var currentResizeWidth = $(window).width();

    // calculate only once for a given width
    if (currentResizeWidth !== Utils.lastResizeWidth) {
        Utils.lastResizeWidth = currentResizeWidth;
        Utils.applyEqualHeight();
    }
};

Utils.applyEqualHeightOnResize = function () {
    var currentResizeWidth = $(window).width();

    // fix for Chrome issue: http://code.google.com/p/chromium/issues/detail?id=133869
    if (currentResizeWidth !== Utils.lastResizeWidth) {
        Utils.lastResizeWidth = currentResizeWidth;

        var jsEqualHeightElements = $('.js-equal-height');

        // set height to auto (default) to calculate it again
        jsEqualHeightElements.each(function() { // for each element
            $(this).children().each(function () {
                $(this).css({ height: 'auto' });
            });
        });

        // set the max height to all elements
        Utils.applyEqualHeight();
    }
};

Utils.applyEqualHeight = function () {

    var jsEqualHeightElements = $('.js-equal-height');
    jsEqualHeightElements.each(function() { // for each element

        var maxHeight = 0;
        $(this).children().each(function () {
            if ($(this).outerHeight() > maxHeight) { // compare heights
                maxHeight = $(this).outerHeight();
            }
        });
        if (maxHeight !== 0) {
            $(this).children().each(function () {
                $(this).css({ height: maxHeight + 'px' });
            });
        }
    });
};
