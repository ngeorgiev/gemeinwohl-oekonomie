'use strict';

window.addEventListener('load', function () {
    FastClick.attach(document.body);
    var hoverDelay = $.mobile.buttonMarkup.hoverDelay = 0;
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
}, false);
