## Economy for the Common Good
The [Economy for the Common Good (ECG)](http://gemeinwohl-oekonomie.org) is an alternative economic system built on values that promote the needs of the entire population.
 It is a tool for economic, political, and social change – a bridge to a better future.

## Project Goals
Open Source, modular, user-friendly, multi-language, mobile, beautiful:

* interactive ECG matrix (German: Interaktive Gemeinwohl-Matrix).
* ECG balancing web application (German: GWÖ Online Bilanzierung).

## Interactive ECG matrix

- [x] [interactive online ECG Matrix 4.1 (open the demo)](http://sinnwerkstatt.github.io/gemeinwohl-oekonomie/#).
- [ ] add multi-language support.
- [ ] create mobile version.

## ECG balancing web app

* [x] [ECG balancing web app (open the demo)](http://sinnwerkstatt.github.io/gemeinwohl-oekonomie/storage.html)
* [ ] clean separation between backend and frontend. Enables offline application use (no need for Internet)
* [ ] add multi-language support.

## Download

* Open the [GitHub repository](https://github.com/sinnwerkstatt/gemeinwohl-oekonomie) and click on "Download ZIP" button on the right.
* Interactive ECG matrix: open the file ```dist/index.html```
* ECG balancing web application: open the file ```dist/index.html```

## Modularity

### Offline
Offline (only frontend, no Internet needed) use can be implemented in the following ways:

* use the HTML5 localStorage
* [read](http://www.html5rocks.com/en/tutorials/file/dndfiles/) and [save matrix files](http://stackoverflow.com/a/20194533/2510374)

### Frontend separate from Backend
The application offers a clean separation between frontend (browser) and backend (server). Being backend independent enables easily adding needed backends.

### Modular frontend

* Matrix structure and balances are saved as JSON file.
* Matrix contents are saved in HTML files.
* needs a clean separation of : collections, routing, templates.
* ...

## Wishlist

 * Server-side grunt compilation (and rendering) of the templates.
 * Responsive Indicator Tabs.
 * More best practices of Javascript and CSS.

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
