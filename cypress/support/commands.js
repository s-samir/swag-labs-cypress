/// <reference types="cypress" />

import { LoginPageObject } from "../integration/sauceDemoProject/test/pageObjects/loginPageObject"
import { CheckoutPageObject } from "../integration/sauceDemoProject/test/pageObjects/checkoutPageObject"
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const loginPageObject = new LoginPageObject();
const checkoutPageObject = new CheckoutPageObject();

Cypress.Commands.add('login', (username, password) => {
    loginPageObject.getUsernameField().type(username)
    loginPageObject.getPasswordField().type(password)
    loginPageObject.clickLoginButton()
})

Cypress.Commands.add('checkoutInfo', (firstName, lastName, postalCode) => {
    checkoutPageObject.getFirstNameField().type(firstName)
    checkoutPageObject.getLastNameField().type(lastName)
    checkoutPageObject.getPostalCodeField().type(postalCode)
    checkoutPageObject.clickContinueButton()
})

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add('saveLocalStorage', () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    })
})

Cypress.Commands.add('restoreLocalStorage', () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    })
})



//Run sauceDemo tests:

// npx cypress run --spec cypress/integration/sauceDemoProject/test/specs/automationScenario1.spec.js --headed --browser chrome
// npx cypress run --spec cypress/integration/sauceDemoProject/test/specs/automationScenario2.spec.js --headed --browser chrome
// npx cypress run --spec cypress/integration/sauceDemoProject/test/specs/automationScenario3.spec.js --headed --browser chrome

// or

// npx cypress run --spec **/automationScenario1.spec.js --headed --browser chrome
// npx cypress run --spec **/automationScenario2.spec.js --headed --browser chrome
// npx cypress run --spec **/automationScenario3.spec.js --headed --browser chrome

// npm run test:allure