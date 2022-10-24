/// <reference types="cypress" />

import { BasePageObject } from "../../../sauceDemoProject/test/pageObjects/basePageObject"
import { LoginPageObject } from "../../../sauceDemoProject/test/pageObjects/loginPageObject"
import { HeaderPageObject } from "../../../sauceDemoProject/test/pageObjects/headerPageObject"
import { InventoryPageObject } from "../../../sauceDemoProject/test/pageObjects/inventoryPageObject"
import { CheckoutPageObject } from "../../../sauceDemoProject/test/pageObjects/checkoutPageObject"
import { CartPageObject } from "../pageObjects/cartPageObject"

describe('Log in, add 2 items to cart, complete checkout process and log out',function() {
    
    const basePageObject = new BasePageObject
    const loginPageObject = new LoginPageObject();
    const headerPageObject = new HeaderPageObject();
    const inventoryPageObject = new InventoryPageObject();
    const checkoutPageObject = new CheckoutPageObject();
    const cartPageObject = new CartPageObject();
    let testData;

    before(function() {
        loginPageObject.loadFixtures().then(function (data) {
            testData = data;
        })
    })

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    afterEach(() => {
        //Code to Handle the Sesssions in cypress.
        //Keep the Session alive when you jump to another test
        let str = [];
        cy.getCookies().then((cook) => {
            cy.log(cook);
            for (let l = 0; l < cook.length; l++) {
                if (cook.length > 0 && l == 0) {
                    str[l] = cook[l].name;
                    Cypress.Cookies.preserveOnce(str[l]);
                } else if (cook.length > 1 && l > 1) {
                    str[l] = cook[l].name;
                    Cypress.Cookies.preserveOnce(str[l]);
                }
            }
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

    it('Add first 2 items in the cart', function()
    {
        inventoryPageObject.getInventoryItemName('Sauce Labs Backpack')
        inventoryPageObject.getItem4ImgLink()
        inventoryPageObject.clickAddToCartButtonItem4()
        inventoryPageObject.getRemoveButtonItem4()
        inventoryPageObject.getShoppingCartBadge('1')
        inventoryPageObject.getInventoryItemName('Sauce Labs Bike Light')
        inventoryPageObject.getItem0ImgLink()
        inventoryPageObject.clickAddToCartButtonItem0()
        inventoryPageObject.getRemoveButtonItem0()
        inventoryPageObject.getShoppingCartBadge('2')
        headerPageObject.clickShoppingCartButton()
        cartPageObject.getCartUrl()
        inventoryPageObject.verifySecondaryContainerText('Your Cart')
        inventoryPageObject.getInventoryItemName('Sauce Labs Backpack')
        inventoryPageObject.getInventoryItemName('Sauce Labs Bike Light')
        checkoutPageObject.getContinueShoppingButton()
        checkoutPageObject.getCheckoutButton()
    })

    it('Complete checkout process', function() {
        checkoutPageObject.clickCheckoutButton()
        checkoutPageObject.getStepOneUrl()
        checkoutPageObject.verifySecondaryContainerCheckout('Checkout: Your Information')
        checkoutPageObject.checkoutInfo(testData.firstName, testData.lastName, testData.postalCode);
        checkoutPageObject.getStepTwoUrl()
        inventoryPageObject.getInventoryItemName('Sauce Labs Backpack')
        inventoryPageObject.getInventoryItemName('Sauce Labs Bike Light')
        checkoutPageObject.verifySecondaryContainerCheckout('Checkout: Overview')
        checkoutPageObject.verifyItemPrice('$29.99')
        checkoutPageObject.verifyItemPrice('$9.99')
        checkoutPageObject.getQuantity()
        checkoutPageObject.verifyTax('$3.20')
        checkoutPageObject.verifyTotalPrice('$43.18')
        checkoutPageObject.getCancelButton()
        checkoutPageObject.clickFinishButton()
        checkoutPageObject.verifySecondaryContainerCheckout('Checkout: Complete!')
        checkoutPageObject.verifyCheckoutMsg('THANK YOU FOR YOUR ORDER')
        checkoutPageObject.verifyCheckoutMsg('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        checkoutPageObject.getPonyExpressImg()
        checkoutPageObject.getBackToHomeButton()
    })

    it('Log out with standard_user', function() {
        headerPageObject.clickBurgerMenuButton()
        inventoryPageObject.clickLogoutSideBarLink()
        loginPageObject.getLogoutUrl()
        loginPageObject.getCikica()
        loginPageObject.getLoginButton()
    })
    
})