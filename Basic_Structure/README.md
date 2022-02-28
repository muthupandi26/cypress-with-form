# DemoTest

To run:
 - npm install
 - npm run test

To run on multiple machines at same time:
 -  export BUILD_TAG=$(date +"%Y_%m_%d"); npm run record3x

Run a single set of tests:
 - npx node scripts/cypress.js --browser chrome --spec cypress/integration/*.feature