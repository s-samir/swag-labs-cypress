import { BasePageObject } from "./basePageObject";

export class LoginPageObject extends BasePageObject {
    constructor(){
        super('testData');
        // Locators:
        
        this.usernameField = e => cy.get('input[name=user-name]');
        this.passwordField = e => cy.get('input[name=password]');
        this.loginButton = e => cy.get('input[name=login-button]');
        this.cikica = e => cy.get(".bot_column");
        this.loginUrl = e => cy.url('https://www.saucedemo.com/');
    

    }

    // Actions:

    login(username, password) {
        this.usernameField().clear().type(username);
        this.passwordField().clear().type(password);
        this.loginButton().click();
    }

    clickLoginButton() {
        this.loginButton().click();
    }

    getCikica() {
        this.cikica().should('be.visible');
    }

    getLoginButton() {
        this.loginButton().should('be.visible').should('be.enabled');
    }

    getLoginUrl() {
        this.loginUrl().should('contain', 'https://www.saucedemo.com/');
    }

    getLogoutUrl() {
        this.loginUrl().should('not.contain', 'inventory.html');
    }

}



