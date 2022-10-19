import { BasePageObject } from "./basePageObject";

export class CartPageObject extends BasePageObject {
    constructor(){
        super('testData');
        this.verifyUrlCart = e => cy.url().should('include', '/cart');

    }
}