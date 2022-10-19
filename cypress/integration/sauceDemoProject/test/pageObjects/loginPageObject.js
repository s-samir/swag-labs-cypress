import { BasePageObject } from "./basePageObject";

export class LoginPageObject extends BasePageObject {
    constructor(){
        super('testData');
        this.getUsernameField = e => cy.get('input[name=user-name]');
        this.getPasswordField = e => cy.get('input[name=password]');
        this.getLoginButton = e => cy.get('input[name=login-button]');
        this.getCikica = e => cy.get(".bot_column");
        this.verifyCikicaVisible = e => cy.get('.bot_column').should('be.visible');
        this.verifyLoginButtonVisible = e => cy.get('input[name=login-button]').should('be.visible');
        this.verifyLoginButtonEnabled = e => cy.get('input[name=login-button]').should('be.enabled');
        this.verifyUrlSauceDemo = e => cy.url().should('include', 'saucedemo');
        this.verifyUrlNotIncludeInventory = e => cy.url().should('include', 'saucedemo').should('not.include', 'inventory');
    

    }

    clickLoginButton() {
        return this.getLoginButton().click();
    }

}



