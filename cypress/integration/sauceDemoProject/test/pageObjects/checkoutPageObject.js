import { BasePageObject } from "./basePageObject";

export class CheckoutPageObject extends BasePageObject {
    constructor(){
        super('testData');
        // Locators:

        this.secondaryContainerCheckout = e => cy.get(".header_secondary_container");
        this.cancelButton = e => cy.get("#cancel");
        this.itemPrice = e => cy.get('.item_pricebar');
        this.quantity = e => cy.get('.cart_quantity');
        this.checkoutMsg = e => cy.get('.checkout_complete_container')
        this.ponyExpressImg = e => cy.get('.pony_express');
        this.backToHomeButton = e => cy.get('#back-to-products');
        this.continueShoppingButton = e => cy.get("#continue-shopping");
        this.checkoutButton = e => cy.get("#checkout");
        this.continueButton = e => cy.get("#continue");
        this.checkoutStepOneUrl = e => cy.url('https://www.saucedemo.com/step-one');
        this.checkoutStepTwoUrl = e => cy.url('https://www.saucedemo.com/step-two');
        this.firstNameField = e => cy.get('input[name=firstName]');
        this.lastNameField = e => cy.get('input[name=lastName]');
        this.postalCodeField = e => cy.get('input[name=postalCode]');
        this.totalPrice = e => cy.get('.summary_total_label');
        this.tax = e => cy.get('.summary_tax_label');
    }

    // Actions:

    checkoutInfo(firstName, lastName, postalCode) {
        this.firstNameField().should('be.visible').clear().type(firstName);
        this.lastNameField().should('be.visible').clear().type(lastName);
        this.postalCodeField().should('be.visible').clear().type(postalCode);
        this.continueButton().should('be.visible').click();
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

    getContinueButton() {
        this.continueButton().should('be.visible').should('be.enabled');
    }

    clickContinueButton() {
        this.continueButton().click();
    }

    clickFinishButton() {
        cy.get('#finish').should('be.visible').should('be.enabled').click();
    }
    
    getStepOneUrl() {
        this.checkoutStepOneUrl().should('contain', '/checkout-step-one');
    }

    getStepTwoUrl() {
        this.checkoutStepTwoUrl().should('contain', '/checkout-step-two');
    }

    verifySecondaryContainerCheckout(text) {
        this.secondaryContainerCheckout().should('be.visible').contains(text);
    }

    getCancelButton() {
        this.cancelButton().should('be.visible').should('be.enabled');
    }

    getQuantity() {
        this.quantity().should('be.visible').contains('1');
    }

    verifyTotalPrice(e) {
        this.totalPrice().contains(e);
    }

    verifyTax(e) {
        this.tax().contains(e);
    }

    getPonyExpressImg() {
        this.ponyExpressImg().should('be.visible');
    }

    getBackToHomeButton() {
        this.backToHomeButton().should('be.visible').should('be.enabled');
    }

    verifyItemPrice(e) {
        this.itemPrice().should('be.visible').contains(e);
    }

    verifyCheckoutMsg(e) {
        this.checkoutMsg().should('be.visible').contains(e);
    }
    
}