export class BasePageObject{
    constructor(fixture) {
        // Locators:
        
        this.openPage = e => cy.visit('https://www.saucedemo.com/');
        this.fixture = fixture;
        
    }

    // Actions:

    loadFixtures() {
        return cy.fixture(this.fixture);
    }




}