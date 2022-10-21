import { BasePageObject } from "./basePageObject";

export class CartPageObject extends BasePageObject {
    constructor(){
        super('testData');
        this.cartUrl = e => cy.url('https://www.saucedemo.com/cart.html');

    }

    getCartUrl() {
        this.cartUrl().should('contain', 'cart.html');
    }
}