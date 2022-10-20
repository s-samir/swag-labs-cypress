import { BasePageObject } from "./basePageObject";

export class InventoryPageObject extends BasePageObject {
    constructor(){
        super('testData');
        this.getLogoutSideBarLink = e => cy.get("[id='logout_sidebar_link']").should('be.visible');
        this.getProductSortContainer = e => cy.get(".product_sort_container").should('be.visible');
        this.secondaryContainer = e => cy.get(".header_secondary_container");
        this.verifyProductSortContainerText = e => cy.get(".product_sort_container").contains('Name (A to Z)')
        this.getBurgerMenuWrap = e => cy.get("[id='bm-menu-wrap']").should('be.visible');
        this.verifyInventoryItemName1 = e => cy.get(".inventory_item_name").should('be.visible').contains('Sauce Labs Backpack');
        this.getItem4ImgLink = e => cy.get("[id='item_4_img_link']").should('be.visible')
        this.getRemoveButtonItem4 = e => cy.get("#remove-sauce-labs-backpack").should('be.visible').contains('Remove')
        this.verifyShoppingCartBadge1 = e => cy.get(".shopping_cart_badge").contains('1');
        this.verifyInventoryItemName2 = e => cy.get(".inventory_item_name").should('be.visible').contains('Sauce Labs Bike Light');
        this.getItem0ImgLink = e => cy.get("[id='item_0_img_link']").should('be.visible');
        this.getRemoveButtonItem0 = e => cy.get("#remove-sauce-labs-bike-light").should('be.visible').contains('Remove')
        this.verifyShoppingCartBadge2 = e => cy.get(".shopping_cart_badge").contains('2');
        this.verifyUrlInventory = e => cy.url().should('contain', 'inventory');
        

    }

    verifySecondaryContainerText(text){
        this.secondaryContainer().should('be.visible').contains(text);
    }


    clickLogoutSideBarLink() {
        return this.getLogoutSideBarLink().click();
    }

    clickAddToCartButtonItem4() {
        return cy.get("#add-to-cart-sauce-labs-backpack").click();
    }

    clickAddToCartButtonItem0() {
        return cy.get("#add-to-cart-sauce-labs-bike-light").click();
    }



}