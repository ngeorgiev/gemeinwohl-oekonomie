## Online Demo
 * [Open the demo](http://sinnwerkstatt.github.io/gemeinwohl-oekonomie/#)

## Use locally
 * Copy the repository
     * Click on "Download ZIP" button on the right.
 * Open the file ```dist/index.html```

## Wishlist

 * Server-side grunt compilation (and rendering) of the templates.
 * Responsive Indicator Tabs.
 * More best practices of Javascript and CSS.

## Version
 * This the GWÖ-Matrix v4.1.
 * Due to the modularity of the source code we can easily adapt the matrix to new versions.
 * The same applies also for future quick tests (Schnelltest).

## Roadmap

### Create a web application to save a company's GWÖ balance.

* Add rich text editor (completed)
* Use localstorage
* Add backend with Django


## Progress
See the [CHANGELOG](CHANGELOG.md).

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
The indicators data is stored in HTML files. In order to change it, you:

* can change any indicator HTML contents in the files: https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/tree/master/app/scripts/data/matrix
* can change the indicator evaluation tables in the file: https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/blob/master/app/scripts/data/gwoe-indicators-data-base.js
* can change the structure of the matrix in the file: https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/blob/master/app/scripts/data/gwoe-matrix-data.js
* should run ```grunt build``` to update the JS templates (see [how to install Grunt](https://github.com/sinnwerkstatt/sinnwerkstatt-web/wiki/Grunt#install)). This will update the file ```app/scripts/data/gwoe-indicators-data.js``` with the new matrix data.

The changed data can be viewed from the ```dist/index.html``` file.

## Learn more
 * Visit the official [Gemeinwohl-Ökonomie website](http://www.gemeinwohl-oekonomie.de/).
