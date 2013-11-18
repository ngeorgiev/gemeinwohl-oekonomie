## Online Demo
 * [Open the demo](http://sinnwerkstatt.github.io/gemeinwohl-oekonomie/#)

## Use locally
 * Copy the repository
     * Click on "Download ZIP" button on the right.
 * Open the file dist/index.html

## Progress

 * 08.10.2013 - quick test removed to be improved for the public.
 * 16.09.2013 - Project Open Sourced! :)
 * 15.09.2013 - Matrix text is unselectable for better User Experience (UX). Sass refactoring. Page top scrolling on opening an indicator. Firefox border fix.
 * 14.09.2013 - Better design of the quick test. Added table data for D1-E5. Created small icon for the back-to-matrix button.
 * 13.09.2013 - Moved external JS and CSS scripts into vendor for easier deployment. Fixed deployment issues.
 * 12.09.2013 - Generating all templates with the grunt plugin. Matrix table height fixes. Quick test - created icon and adapted result colors for the Quick Test.
 * 11.09.2013 - Few design fixes for the quick test. Create beautiful matrix icon.
 * 10.09.2013 - Added header. Update the Grunt plugin to generate also the templates.
 * 09.09.2013 - Added table data for A1-C5.
 * 08.09.2013 - Adapted code to the new templating engine and imported all matrix data.
 * 07.09.2013 - Templating engine refactoring. Open sourced the [Files to JSON grunt plugin](https://github.com/sinnwerkstatt/grunt-files-to-json-appender).
 * 06.09.2013 - Matrix looks now professionally beautiful.
 * 05.09.2013 - Matrix - bootstrap layout, equal heigth of divs fixed with jquery.
 * 04.09.2013 - Quick test - added profile page and animation of the final result.
 * 03.09.2013 - Completed basic pages for the quick test. Calculations and final recommendations are shown.
 * 02.09.2013 - Created templates for the quick test intro page and first implementation of the question templates. Started with the quick test controllers.
 * 01.09.2013 - Refactored the matrix table into a row spannable div table. Added empty main page and quick test page with their routing. Entered quick test data.
 * 31.08.2013 - Added the right borders for the row spannable div table.
 * 30.08.2013 - Created negative criteria template and automated populating it with JSON data. Major: found a way to create a div table with a equal heights and rowspan.
 * 29.08.2013 - Automated generation of negative criteria in the matrix from JSON data.
 * 28.08.2013 - Automated matrix generation from from JSON data.
 * 27.08.2013 - Automated indicator tabs generation from from JSON data.
 * 26.08.2013 - Selected JS Templating engine: [LinkedIn's dust.js](http://linkedin.github.io/dustjs/).
 * 25.08.2013 - Javascript refactoring. Added simple string templating.
 * 24.08.2013 - Extracted PDF data for C1 into JSON. Added UI for tabs and link functionality. Defined JSON structure for subindicators. Wrote JS code for converting the table of subindicator into HTML table.
 * 23.08.2013 - Beautiful UI of the Matrix (migrated from div table to html table).
 * 22.08.2013 - Researched appropriate front-end technologies. Started lean development: created two wireframes.
 * 21.08.2013 - Extracted PDF data into JSON. Small UI improvements.
 * 19.08.2013 - Researched appropriate front-end technologies.
 * 18.08.2013 - First basic UI of the Gemeinwohl-Matrix.

## Wishlist

 * Server-side grunt compilation (and rendering) of the templates.
 * Responsive Indicator Tabs.
 * More best practices of Javascript and CSS.

## Version
 * This the GWÖ-Matrix v4.1.
 * Due to the modularity of the source code we can easily adapt the matrix to new versions.
 * The same applies also for future quick tests (Schnelltest).

## Roadmap
The next steps we really want to develop are:
 * Create your GWÖ-Balance (GWÖ-Matrix) online - with company-specific data for every (sub)indicator.
 * GWÖ-Web-Plattform:
     * GWÖ-companies can create and publish GWÖ-Balances. All GWÖ-Balances can be searched, filtered, visualized.
     * Social plattform for the GWÖ.
Currently Nikolay (Berlin, Sinnwerkstatt) and Heike (Karlsruhe, Student) are creating a concrete concept containing 1) What 2) How we work together 3) Financing and 4) Software Development.
When the concept is ripe we will propose it in the GWÖ movement.

## License
 * Source code is under the MIT License.
 * All data belongs to the [Gemeinwohl-Ökonomie movement](http://gemeinwohl-oekonomie.de)

## Developers
 * [Nikolay Georgiev](http://nikolay-georgiev.net), [sinnwerkstatt Medienagentur GmbH](https://www.sinnwerkstatt.com/), Berlin

## Contribute
### Send a bug or propose new features
If you want to send a bug, or want a new feature for the online GWÖ-Matrix, please:

 * [Create a new issue here](https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/issues/new) (you will need a GitHub account)
 * [Help with (comment on) the current issues](https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/issues/).
 * You can write in English or German.

### Contribute to the source code
 * Fork, improve it and send a pull request.

## Integration
 * Due to the modular architecture, the interactive matrix can be integrated easily in other projects

### Change the data
In order to change the data, you:
* can change any files within the matrix data files: https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/tree/master/app/scripts/data/matrix
* should run ```grunt build``` to update the JS templates. This will update the file ```app/scripts/data/gwoe-indicators-data.js``` with the new matrix data.

## Learn more
 * Visit the official [Gemeinwohl-Ökonomie website](http://www.gemeinwohl-oekonomie.de/).

