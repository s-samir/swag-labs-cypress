import { BasePageObject } from "./basePageObject";

export class CheckoutPageObject extends BasePageObject {
    constructor(){
        super('testData');
        //locators
        this.verifySecondaryContainerCheckoutInfo = e => cy.get(".header_secondary_container").contains('Checkout: Your Information');
        this.getCancelButton = e => cy.get("#cancel").should('be.visible').should('be.enabled');
        this.verifySecondaryContainerCheckoutOverview = e => cy.get(".header_secondary_container").contains('Checkout: Overview');
        this.verifyItemPrice = e => cy.get('.item_pricebar').should('be.visible').contains(e);
        this.verifyItemTotalPrice = e => cy.get('.summary_info').contains('Item total: $39.98');
        this.verifyTaxPrice = e => cy.get('.summary_info').contains('Tax: $3.20');
        this.verifyTotalPrice = e => cy.get('.summary_info').contains('Total: $43.18');
        this.getQuantity = e => cy.get('.cart_quantity').contains('1');
        this.verifyCheckouMsg = e => cy.get('.checkout_complete_container').contains(e);
        this.getPonyExpressImg = e => cy.get('.pony_express').should('be.visible');
        this.getBackToHomeButton = e => cy.get('#back-to-products').should('be.visible').should('be.enabled');
        this.continueShoppingButton = e => cy.get("#continue-shopping");
        this.checkoutButton = e => cy.get("#checkout");
        this.continueButton = e => cy.get("#continue").should('be.visible').should('be.enabled');
        this.verifyUrlCheckoutStep1 = e => cy.url().should('contain', '/checkout-step-one');
        this.verifyUrlCheckoutStep2 = e => cy.url().should('contain', '/checkout-step-two');
        this.firstNameField = e => cy.get('input[name=firstName]').should('be.visible');
        this.lastNameField = e => cy.get('input[name=lastName]').should('be.visible');
        this.postalCodeField = e => cy.get('input[name=postalCode]').should('be.visible');
        this.verifyUrlCheckoutComplete = e => cy.url().should('contain', 'complete');
        
        //actions
        

    }

    checkoutInfo(firstName, lastName, postalCode) {
        this.firstNameField().clear().type(firstName);
        this.lastNameField().clear().type(lastName);
        this.postalCodeField().clear().type(postalCode);
        this.continueButton().click();
    }

    clickContinueShoppingButton() {
        this.continueShoppingButton().click();
    }

    getContinueShoppingButton() {
        this.continueShoppingButton().should('be.visible').should('be.enabled');
    }

    clickCheckoutButton() {
        this.checkoutButton().click();
    }

    getCheckoutButton() {
        this.checkoutButton().should('be.visible').should('be.enabled');
    }

    clickContinueButton() {
        this.getContinueButton().click();
    }

    clickFinishButton() {
        cy.get('#finish').should('be.visible').should('be.enabled').click();
    } 
    
}