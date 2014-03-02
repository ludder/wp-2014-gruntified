/*global casper, phantomcss */
(function (casper, phantomcss) {

    'use strict';

    casper.start('http://localhost/2014/02/nog-een-judoka-in-huis/')
        .thenClick('.search-toggle') // doesn't make sense, because search box appears outside #masthead
        .then(function () {
            phantomcss.screenshot('#masthead', 'Header');
            phantomcss.screenshot('.site-description', 'Site description');
        });

})(casper, phantomcss);
