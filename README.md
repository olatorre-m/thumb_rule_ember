# Thumb-rule

This repository has a front end project based on the specifications of this repository. https://github.com/zemoga/ui-test
This app allows the user to rate different celebrities with positive and negative votes that are reflected in the inferior bar that is updated every time you vote.
The initial data are obtained from a json file and the new votes are stored in the local storage.

This project uses Ember js as a front end framework. The styles are done with CSS and use media responsive service (https://www.npmjs.com/package/ember-responsive) to recognize screen size.

The time since updating at the post use moment (https://www.npmjs.com/package/ember-responsive) to convert the data object into a more natural sentence for human understanding.

The remaining components use HTML and CSS to mock up this Figma's design (https://www.figma.com/file/NlQ6PjfanVO2YyuDUaohjx/Rule-of-Thumb---FED-Challenge) and use javascript to add functionalities.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd thumb-rule`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying


## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
