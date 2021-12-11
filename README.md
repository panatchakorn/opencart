# Opencart Demo Test

## Description
This is a web UI automation test using Cypress automation framework and Cucumber plugin. Cypress supports Chrome, Firefox, Edge, Electron and Brave browsers.

For More info:

 [<img src="/image/cypress.JPG" alt="Cypress logo" style="height: 100px; width:100px;"/>](https://cypress.io/) [<img src="/image/cucumber.JPG" alt="Cucumber logo" style="height: 100px; width:100px;"/>](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)

## Pre-requisites
Please download and install these softwares if you don't have them already.

- [Git Downloads and install](https://git-scm.com/downloads)
- NodeJS. Recommend version 12 or 14 or above. Check if this is installed by running the command in terminal  `node --version`
- NPM. Check if this is installed by running the command `npm --version`
- [NodeJS Downloads and install](https://nodejs.org/en/download/). Download LTS .msi installer and install NodeJS for your system. The installer will also install npm.
- [Visual Studio Code Downloads and install](https://code.visualstudio.com/download)
- Open Visual Studio Code and Install extension : Cucumber (Gherkin) Full Support by Alexander Krechik. This will make feature files more readable.


## Clone repo and Install Dependencies (including Cypress and cucumber) 
- Clone/Download repo and open it in Visual Studio Code
- In terminal go to project root folder ./opencart and run command
```
npm install
```

## Configuration
- Test environment url configured in ./cypress/support/hostconfig.js
- Custom command to run test configured in package.json 

## Running the Tests

- In terminal go to project rootfolder eg. opencart

- Opening Cypress UI

-- Run below command to open Cypress UI. From Cypress UI , select browser and click on Integration Tests/feature to run the test.\
-- Click stop button to stop the test\
-- After each test, screenshot can be found in ./cypress/screenshot folder. 
```
npm run cy:open:demo
```
<img src="/image/cypressui.JPG" alt="Cypress UI"/>

- Running from CLI

-- Run below command to run tests in headless mode. It will record a video for each feature file, which can be located in ./cypress/videos. If there is a failure, it will capture a screenshot in ./cypress/screenshot/.

```
npm run cy:run:demo
```
<img src="/image/cypresscli.JPG" alt="Cypress CLI"/>

## Additional Comments
I'm using Windows10, Chrome and Edge during implmentation of this test suite. I'm currently using Cypress in my current role however this is my first time trying Cucumber in Cypress :grin: 

I'm using datatable to keep the user details more readable in the feature file. It's not meant to be for adding more user details for multiple test iterations. 

To enhance the test coverage for the site, I choose to search/view product details and checkout. These are the key features of an online shopping website.

### Thank you :smiley:
