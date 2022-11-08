/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();

var randomNumber = Math.floor(Math.random() * 10000) + 1
let username = "test" + randomNumber + "user"
let password = "pass" + randomNumber + "WORD" + "!#$%?"
let authToken;
let firstCrocName;
let firstCrocId;
let secondCrocName;
let secondCrocId;
let firstCrocSex;
let firstCrocDOB;
let firstCrocAge;
let secondCrocSex;
let secondCrocDOB;
let secondCrocAge;

describe('Registration and Authentication - k6', function() {

    // Navigate Test API k6 url:
    it('Navigate to the Test API k6 url', function() {
        cy.visit(Cypress.env('k6Url'));
        cy.url().should('eq', 'https://test-api.k6.io/')
    })

    // Register a new user:
    it('Register a new user', function() {
        cy.request('POST', Cypress.env('k6UserRegisterUrl'), { 
            first_name: randomFirstName,
            last_name: randomLastName,
            username: username,
            password: password
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('first_name', randomFirstName)
            expect(response.body).to.have.property('last_name', randomLastName)
            expect(response.body).to.have.property('username', username)
        })
    })

    // Login with new user:
     it('Login with new user', function() {
        cy.request('POST', Cypress.env('k6UserLoginUrl'), {
            username: username,
            password: password
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.include.keys('refresh', 'access')
            authToken = response.body.access
            expect(response.body.access).to.eq(authToken)
        })
    })
    // Create first crocodile:
    it('Create first crocodile', function() {
        cy.request({
            method: 'POST',
            url: Cypress.env('k6CreateCrocodileUrl'), 
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            body: {   
                name: "Lacoste",
                sex: "M",
                date_of_birth: "1991-05-09" 
            }               
        }).then((response) => {
            expect(response.status).to.eq(201)
            firstCrocName = response.body.name
            firstCrocId = response.body.id
            firstCrocSex = response.body.sex
            firstCrocDOB = response.body.date_of_birth
            firstCrocAge = response.body.age
            expect(response.body.name).to.eq(firstCrocName)
            expect(response.body.id).to.eq(firstCrocId)
        })
    })

    // Get first crocodile:
    it('Get first crocodile', function() {
        cy.request({
            method: 'GET',
            url: Cypress.env('k6CreateCrocodileUrl') + firstCrocId, 
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            body: {   
                name: firstCrocName,
                sex: firstCrocSex,
                date_of_birth: firstCrocDOB 
            }  
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq(firstCrocName)
            expect(response.body.id).to.eq(firstCrocId)
            expect(response.body.sex).to.eq(firstCrocSex)
            expect(response.body.date_of_birth).to.eq(firstCrocDOB)
            expect(response.body.age).to.eq(firstCrocAge)
        })
    })

    // Create second crocodile:
    it('Create second crocodile', function() {
        cy.request({
            method: 'POST',
            url: Cypress.env('k6CreateCrocodileUrl'), 
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            body: {   
                name: "Krox",
                sex: "F",
                date_of_birth: "1992-04-08" 
            }               
        }).then((response) => {
            expect(response.status).to.eq(201)
            secondCrocName = response.body.name
            secondCrocId = response.body.id
            secondCrocSex = response.body.sex
            secondCrocDOB = response.body.date_of_birth
            secondCrocAge = response.body.age
            expect(response.body.name).to.eq(secondCrocName)
            expect(response.body.id).to.eq(secondCrocId)
        })
    })

    // Get all my crocodiles:
    it('Get all crocodiles', function() {
        cy.request({
            method: 'GET',
            url: Cypress.env('k6CreateCrocodileUrl'), 
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body[0].name).to.eq(firstCrocName)
            expect(response.body[0].id).to.eq(firstCrocId)
            expect(response.body[0].sex).to.eq(firstCrocSex)
            expect(response.body[0].date_of_birth).to.eq(firstCrocDOB)
            expect(response.body[0].age).to.eq(firstCrocAge)
            expect(response.body[1].name).to.eq(secondCrocName)
            expect(response.body[1].id).to.eq(secondCrocId)
            expect(response.body[1].sex).to.eq(secondCrocSex)
            expect(response.body[1].date_of_birth).to.eq(secondCrocDOB)
            expect(response.body[1].age).to.eq(secondCrocAge)
        })
    })

    // Update first crocodile name
    it('Update first crocodile', function() {
        cy.request({
            method: 'PUT',
            url: Cypress.env('k6CreateCrocodileUrl') + firstCrocId, 
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            body: {   
                name: "Lacoste The Crocodile",
                sex: firstCrocSex,
                date_of_birth: firstCrocDOB 
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            firstCrocName = response.body.name
            expect(response.body.name).to.eq(firstCrocName)
            expect(response.body.id).to.eq(firstCrocId)
        })
    })

    // Get updated first crocodile:
    it('Get updated first crocodile', function() {
        cy.request({
            method: 'GET',
            url: Cypress.env('k6CreateCrocodileUrl') + firstCrocId, 
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.body.name).to.eq(firstCrocName)
            expect(response.body.id).to.eq(firstCrocId)
            expect(response.body.sex).to.eq(firstCrocSex)
            expect(response.body.date_of_birth).to.eq(firstCrocDOB)
            expect(response.body.age).to.eq(firstCrocAge)
        })
    })

    // Delete first crocodile:
    it('Delete first crocodile', function() {
        cy.request({
            method: 'DELETE',
            url: Cypress.env('k6CreateCrocodileUrl') + firstCrocId, 
            headers: {
                'Authorization': `Bearer ${authToken}`
            }              
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect([]).to.be.empty     
        })
    }) 

    // Delete second crocodile:
    it('Delete second crocodile', function() {
        cy.request({
            method: 'DELETE',
            url: Cypress.env('k6CreateCrocodileUrl') + secondCrocId, 
            headers: {
                'Authorization': `Bearer ${authToken}`
            }              
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect([]).to.be.empty          
        })
    })
})