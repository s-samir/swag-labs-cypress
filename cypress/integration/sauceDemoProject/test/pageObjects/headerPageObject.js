import { BasePageObject } from "./basePageObject";

export class HeaderPageObject extends BasePageObject {
    constructor(){
        super('testData');
        // Locators:

        this.burgerMenuButton = e => cy.get("[id='react-burger-menu-btn']");
        this.shoppingCartButton = e => cy.get("[id='shopping_cart_container']"); 
    }

    // Actions:

    clickShoppingCartButton() {
        this.shoppingCartButton().click();
    }

    clickBurgerMenuButton() {
        this.burgerMenuButton().click();
    }

    getBurgerMenuButton() {
        this.burgerMenuButton().should('be.visible');
    }

    getShoppingCartButton() {
        this.shoppingCartButton().should('be.visible');
    }

}