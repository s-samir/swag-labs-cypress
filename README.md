# sauce-demo-automation-task
###### This is a repository for automation testing of *Swag Labs*.

###### This project contains 3 tests:
- automationScenario1.spec.js
- automationScenario2.spec.js
- automationScenario3.spec.js

###### Run the tests with: ```npm run test:allure```
###### Running this custom command will run all 3 spec.js files one after another in Google Chrome (headed) and generate Allure report (in project root).
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
_Optional:_
###### In addition to the Allure report, the Mocha report is also integrated in this project.
###### To run a specific test, for example 'automationScenario1' use the following command:
###### ```npx cypress run --spec **/automationScenario1.spec.js --headed --browser chrome```
###### Using this command will run the test in Google Chrome (headed) as well and generate a Mochawesome report for that test (in project root).

## Swagger PetStore API requests
###### This project also includes a requestMethod.spec.js file created for *Swagger PetStore* API requests.
###### Run this spec.js file with a custom command:
###### ```npm run test:petStore```
###### This spec.js file includes following requests:
- Add new pet to the store
- Find pet by id
- Update pet in the store with form data
- Delete pet
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## test-api.k6.io
###### Automation testing of *Test API k6* requests is also added to this repo for auth testing purposes.
###### It includes a *k6.spec.js* file which consists of user Register and Login tests followed by handling Bearer token needed for sending requests to private endpoints.
###### Run *k6.spec.js* file with a custom command:
###### ```npm run test:k6```
###### Using this command will run the tests in Google Chrome (headed) as well and generate a Mochawesome report for that test (in project root).