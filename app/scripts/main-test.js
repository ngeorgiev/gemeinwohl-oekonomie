'use strict';

Controller.createMainPageTestHtml();
Controller.createQuickTestHtml();
Controller.createFooterHtml();

$(document).ready(function () {
    Router.init();
});
