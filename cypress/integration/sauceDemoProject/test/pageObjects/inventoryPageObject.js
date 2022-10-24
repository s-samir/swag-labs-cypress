import { BasePageObject } from "./basePageObject";

export class InventoryPageObject extends BasePageObject {
    constructor(){
        super('testData');
        // Locators:

        this.logoutSideBarLink = e => cy.get("[id='logout_sidebar_link']");
        this.productSortContainer = e => cy.get(".product_sort_container");
        this.secondaryContainer = e => cy.get(".header_secondary_container");
        this.burgerMenuWrap = e => cy.get("[id='bm-menu-wrap']");
        this.inventoryItemName = e => cy.get(".inventory_item_name");
        this.item4ImgLink = e => cy.get("[id='item_4_img_link']");
        this.removeButtonItem4 = e => cy.get("#remove-sauce-labs-backpack");
        this.shoppingCartBadge = e => cy.get(".shopping_cart_badge");
        this.item0ImgLink = e => cy.get("[id='item_0_img_link']");
        this.removeButtonItem0 = e => cy.get("#remove-sauce-labs-bike-light");
        this.inventoryUrl = e => cy.url('https://www.saucedemo.com/inventory.html');
    }

    // Actions:

    verifyProductSortContainerText(text){
        this.productSortContainer().should('be.visible').contains(text);
    }    

    verifySecondaryContainerText(text){
        this.secondaryContainer().should('be.visible').contains(text);
    }


    clickAddToCartButtonItem4() {
        cy.get("#add-to-cart-sauce-labs-backpack").click();
    }

    clickAddToCartButtonItem0() {
        cy.get("#add-to-cart-sauce-labs-bike-light").click();
    }

    getBurgerMenuWrap() {
        this.burgerMenuWrap().should('be.visible');
    }

    getInventoryUrl() {
        this.inventoryUrl().should('contain', 'inventory.html');
    }

    getLogoutSideBarLink() {
        this.logoutSideBarLink().should('be.visible');
    }

    clickLogoutSideBarLink() {
        this.logoutSideBarLink().click();
    }

    getInventoryItemName(text){
        this.inventoryItemName().should('be.visible').contains(text);
    }    

    getItem4ImgLink() {
        this.item4ImgLink().should('be.visible');
    }

    getRemoveButtonItem4() {
        this.removeButtonItem4().should('be.visible').contains('Remove');
    }

    getShoppingCartBadge(text) {
        this.shoppingCartBadge().should('be.visible').contains(text);
    }

    getItem0ImgLink() {
        this.item0ImgLink().should('be.visible');
    }

    getRemoveButtonItem0() {
        this.removeButtonItem0().should('be.visible').contains('Remove');
    }

}