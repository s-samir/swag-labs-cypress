import { BasePageObject } from "./basePageObject";

export class HeaderPageObject extends BasePageObject {
    constructor(){
        super('testData');
        this.verifyBurgerMenuButtonVisible = e => cy.get("[id='react-burger-menu-btn']").should('be.visible');
        this.verifyShoppingCartButtonVisible = e => cy.get("[id='shopping_cart_container']").should('be.visible');
        
    }

    clickShoppingCartButton() {
        return this.verifyShoppingCartButtonVisible().click();
    }

    clickBurgerMenuButton() {
        return this.verifyBurgerMenuButtonVisible().click();
    }









}