# Opencart Demo Test

## Description
This is a web UI automation test using Cypress automation framework and Cucumber plugin. Cypress supports Chrome, Firefox, Edge, Electron and Brave browsers.\

More info:\
- [Visit Cypress](https://cypress.io/)
- [Visit Cucumber Plugin](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor).

## Prequisites
- NodeJS needs to be installed on the system. Recommend version 12 or 14 or above. Check if this is installed by running the command `node --version`
- NPM needs to be installed on the system. Check if this is installed by running the command `npm --version`
- Refer [NodeJS Downloads](https://nodejs.org/en/download/) to download and install NodeJS for your system.
- Visual Studio Code needs to be installed. Visit [https://code.visualstudio.com/download](https://code.visualstudio.com/download).
- Install Visual Studio Code extension : Cucumber (Gherkin) Full Support by Alexander Krechik. This will make feature files more readable.

## Install Dependencies (including Cypress and cucumber) 
- In terminal go to project root folder ./opencart and run command
```
npm install
```

## Configuration
- To update test environment url, go to ./cypress/support/hostconfig.js
- To add more command for running the test, go to scripts properties in package.json 

## Running the Tests

- In terminal go to project rootfolder eg. opencart

- Opening Cypress UI
-- Run below command to open Cypress UI. From Cypress UI , select browser and click on Integration Tests\feature to run the test.\
-- Click stop button to stop the test\
-- After each test, screenshot can be found in ./cypress/screenshot folder. 
```
npm run cy:open:demo
```
- Running from CLI
-- Run below command to run tests in headless mode. It will record a video for each feature file, which can be located in ./cypress/videos. If there is a failure, it will capture a screenshot in ./cypress/screenshot/.
-- Test run faster in this mode.
```
npm run cy:run:demo
```

## Additional Comments
I'm using Windows10, Chrome and Edge during implmentation of this test suite. I'm currently using Cypress in my current role however this is my first time trying Cucumber in Cypress :smiley: \
I'm using datatable to keep the user details more readable in the feature file. It's not meant to be for adding more user details for multiple test iterations. \

To enhance the test coverage for the site, I choose to search/view product details and checkout. These are the key features of an online shopping website.\