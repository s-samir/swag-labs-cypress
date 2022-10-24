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
        loginPageObject.getLoginUrl()
        loginPageObject.getCikica()
        loginPageObject.getLoginButton()
    })

    it('Log in with standard_user', function() {
        loginPageObject.login(testData.username, testData.password);
        headerPageObject.getBurgerMenuButton()
        headerPageObject.getShoppingCartButton()
        inventoryPageObject.verifyProductSortContainerText('Name (A to Z)')
        inventoryPageObject.verifySecondaryContainerText('Products')
        inventoryPageObject.getInventoryUrl()        
    })

    it('Log out with standard_user', function() {
        headerPageObject.clickBurgerMenuButton()
        inventoryPageObject.clickLogoutSideBarLink()
        loginPageObject.getLogoutUrl()
        loginPageObject.getCikica()
        loginPageObject.getLoginButton()
    })

})