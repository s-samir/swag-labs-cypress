/// <reference types="cypress" />

describe('Request method - PetStore',function() {

    it('Request method - CRUD', function() {
        // Navigate to the PetStore url:
        cy.visit(Cypress.env('petStoreUrl'));
        cy.url().should('eq', 'https://petstore.swagger.io/')

        // Add new pet to the store:
        cy.request('POST', Cypress.env('petUrl'), { 
            id: Cypress.env('petId'), 
            name: Cypress.env('petName'), 
            status: Cypress.env('petStatus')
        }).then(
        (response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', Cypress.env('petId'))
            expect(response.body).to.have.property('name', Cypress.env('petName'))
            expect(response.body).to.have.property('status', Cypress.env('petStatus'))
        }
        )
        // Find pet by id:
        cy.request('GET', Cypress.env('petUrl') + Cypress.env('petId'), { 
            id: Cypress.env('petId') 
        }).then(
        (response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', Cypress.env('petId'))
            expect(response.body).to.have.property('name', Cypress.env('petName'))
            expect(response.body).to.have.property('status', Cypress.env('petStatus'))
        }
        )
        // Update pet in the store with form data:
        cy.request('POST', Cypress.env('petUrl') + "?petId=" + Cypress.env('petId'), { 
            id: Cypress.env('petId'), 
            name: Cypress.env('updatedPetName'), 
            status: Cypress.env('updatedPetStatus') 
        }).then(
        (response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', Cypress.env('petId'))
            expect(response.body).to.have.property('name', Cypress.env('updatedPetName'))
            expect(response.body).to.have.property('status', Cypress.env('updatedPetStatus'))
        }
        )
        // Delete pet:
        cy.request('DELETE', Cypress.env('petUrl') + Cypress.env('petId'), { 
            id: Cypress.env('petId') 
        }).then(
        (response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('message', Cypress.env('petId').toString()) // 'message' is actually 'id' of the pet.
        }
        )

    })

})