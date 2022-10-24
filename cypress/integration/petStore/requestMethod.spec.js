/// <reference types="cypress" />

describe('Request method - PetStore',function() {

    it('Request method - CRUD', function() {
        // Navigate to the PetStore url:
        cy.visit('https://petstore.swagger.io/')

        // Add a new pet to the store:
        cy.request('POST', 'https://petstore.swagger.io/v2/pet', { id: '258963147001', name: 'doggie', status: 'available' }).then(
        (response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', 258963147001)
            expect(response.body).to.have.property('name', 'doggie')
        }
        )
        // Find pet by id:
        cy.request('GET', 'https://petstore.swagger.io/v2/pet/258963147001', { id: '258963147001' }).then(
        (response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', 258963147001)
            expect(response.body).to.have.property('name', 'doggie')
            expect(response.body).to.have.property('status', 'available')
        }
        )
        // Update pet in the store with form data:
        cy.request('POST', 'https://petstore.swagger.io/v2/pet?petId=258963147001', { id: '258963147001', name: 'snoop doggie', status: 'sold' }).then(
        (response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', 258963147001)
            expect(response.body).to.have.property('name', 'snoop doggie')
            expect(response.body).to.have.property('status', 'sold')
        }
        )
        // Delete pet:
        cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/258963147001', { id: '258963147001' }).then(
        (response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('message', '258963147001') // 'message' is actually 'id' of the pet.
        }
        )

    })

})