export class BasePageObject{
    constructor(fixture) {
        this.openPage = e => cy.visit('https://www.saucedemo.com/');
        this.fixture = fixture;
        
    }

    loadFixtures() {
        return cy.fixture(this.fixture);
    }




}