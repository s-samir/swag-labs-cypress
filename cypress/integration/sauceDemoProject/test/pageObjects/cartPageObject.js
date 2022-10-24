import { BasePageObject } from "./basePageObject";

export class CartPageObject extends BasePageObject {
    constructor(){
        // Locators:
        
        super('testData');
        this.cartUrl = e => cy.url('https://www.saucedemo.com/cart.html');

    }

    // Actions"

    getCartUrl() {
        this.cartUrl().should('contain', 'cart.html');
    }
}