# sauce-demo-automation-task
###### This is a repository for automation testing of *Swag Labs*.

###### This project contains 3 tests:
- automationScenario1.spec.js
- automationScenario1.spec.js
- automationScenario1.spec.js

###### Run the tests with: ```npm run test:allure```
###### Running this custom command will run all 3 spec.js files one after another in Google Chrome (headed) and generate Allure report (in project root).
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
_Optional:_
###### In addition to the Allure report, the Mocha report is also integrated in this project.
###### To run all tests and generate a Mochawesome report (in project root) use the following command:
###### ```npm run test:sauceDemoSpecs```
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
###### To run a specific test, for example 'automationScenario1' use the following command:
###### ```npx cypress run --spec **/automationScenario1.spec.js --headed --browser chrome```
###### Using this command will run the test in Google Chrome (headed) as well and generate a Mochawesome report for that test (in project root).
