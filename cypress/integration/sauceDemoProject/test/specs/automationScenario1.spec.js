/// <reference types="cypress" />

import { BasePageObject } from "../../../sauceDemoProject/test/pageObjects/basePageObject"
import { LoginPageObject } from "../../../sauceDemoProject/test/pageObjects/loginPageObject"
import { HeaderPageObject } from "../../../sauceDemoProject/test/pageObjects/headerPageObject"
import { InventoryPageObject } from "../../../sauceDemoProject/test/pageObjects/inventoryPageObject"

describe('Log in and log out',function() {

    const basePageObject = new BasePageObject();
    const loginPageObject = new LoginPageObject();
    const headerPageObject = new HeaderPageObject();
    const inventoryPageObject = new InventoryPageObject();
    let testData;

    before(function() {
        loginPageObject.loadFixtures().then(function (data) {
            testData = data;
        })
    })

    it('Navigate to the SwagLabs URL', function() {
        basePageObject.openPage()
        loginPageObject.verifyUrlSauceDemo()
        loginPageObject.verifyCikicaVisible()
        loginPageObject.verifyLoginButtonVisible()
        loginPageObject.verifyLoginButtonEnabled()
    })

    it('Log in with standard_user', function() {
        cy.login(testData.username, testData.password)
        headerPageObject.verifyBurgerMenuButtonVisible()
        headerPageObject.verifyShoppingCartButtonVisible()
        inventoryPageObject.verifyProductSortContainerText()
        inventoryPageObject.verifySecondaryContainerText('Products')
        inventoryPageObject.verifyUrlInventory()        
    })

    it('Log out with standard_user', function() {
        headerPageObject.clickBurgerMenuButton()
        inventoryPageObject.getLogoutSideBarLink()
        inventoryPageObject.clickLogoutSideBarLink()
        loginPageObject.verifyUrlNotIncludeInventory()
        loginPageObject.verifyCikicaVisible()
        loginPageObject.verifyLoginButtonVisible()
        loginPageObject.verifyLoginButtonEnabled()
        
    })

    
    
})