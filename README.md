# BullsfirstAngular2

# FIXES
## DONE
* JS
  * Angular
    * Now that Angular 2 is out, we **MUST** use it, instead of Angular 1. Because *everything that you are writing in Angular 1, is technical debt, said John Papa(Angular Expert and Style Guide author).* So implemented from scratch in Angular2.
    * used angular-cli, because Angular team is working closely with their team, and has lots of cool features, my favorite one is:
      * A solid environment from start. 
      * No need for Webpack setup, it already has transpilation, Hot module replacement, Ahead of Time compilation, Tree Shaking support, and many more things.
      * Code is automatically generated, and is already Style Guide compliant.
      * It might support auto upgrade to future Angular versions.
      * Generates a good number of tests automatically.
    * Should not re-invent the wheel:
      * Data Table - There are some nice NG2 components out there for it. I just used "swimlane/ngx-datatable" as it was easiest and has almost all the features. I got sorting for free. And you can also use it for Column resizing, Column reordering, Paging. I have just implemented the client side sorting, but could have done it server side if wanted. That would be scalable solution.
      * Components Libraries - Not sure if I used the best, but we shouldn't create our own framework for Buttons, Lists, DatePickers, Forms etc. I have used '@angular/material'.
    * As per PNG, we wanted currency symbol(which is not a good idea in my opinion). Currency filter allows us to show Symbol instead of three char code, so enable that. But we can't differentiate between different dollars now.
* CSS
  * Icons - We should use any of the font based icon libraries. They are easier to maintain for size and color. They are light available for almost any purpose. I have used Material Icons. Due to time restrictions, I have pull the whole library, we can definitely customize it and reduce it for our usage.
  * Preprocessor - SCSS style used for maintainability. More cleanup needs to be done. CSSs need to move closer to the components.
  * AS per PNG, implemented header color for site and table, could have been better, if I had actual color codes. But anyways, the design is really ugly and those colors are hurting my eyes.
* HTML
  * Should adopt HTML5 elements e.g. Main,Aside,Header,Footer. They are loved by Search Engines.
* Design
  * Website header did not have the Bull's Horns, so tried to hack it from the PNG. Would have been better, if it was provided.
* Build
  * Thanks to Angular-Cli, nothing much is left to for now.
* Unit tests
  * Tried to write some unit tests, still not sufficient, need more time.
* Minor UI changes
  * Trade and Transfer button color, size and icon
  * Add Account and Refresh button color and icon
  * Table header color and style
  * Sorting functionality
  * Row separators and hover effect
  * Content alignment
  * Currency symbol
  * Logo image
  * Logo font
  * Logo subtitle
  * Gray background of page
  * Disclaimer at the bottom

## TO BE DONE: if time permits
1. Align headers perfectly. The Sort indicator should be on left.
2. Interactive chart on right side.
3. Fix all test cases
4. More coverage
5. There is a bug that I want to fix, once we sort on a column the data-binding gets broken.
6. Configure and run Karma on multiple browsers.
7. Not very comfirtable with TypeScript, need more time to brush up and implement more Typings.

## NOTE: *This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.*
## DISCLAIMER: Touching Angular after long time and Angular2 for the first time(working on ReactJS for a while), so there might be some obvious blunders. I request you to please embarass me.


# NPM commands

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
