import { expect } from '@playwright/test';
export class ProductCartPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {

        this.page = page
        this.url = '/inventory-item.html'
        this.sectionTitle = page.locator('[data-test="title"]')
        this.backToProduct = page.locator('[data-test="back-to-products"]')
        this.backToProductIcon = page.locator('[class="back-image"]')
        this.productName = page.locator('[data-test="inventory-item-name"]')
        this.productPrice = page.locator('[data-test="inventory-item-price"]')
        this.productText = page.locator('[data-test="inventory-item-desc"]')
        this.productImage = page.locator('[class="inventory_details_img_container"]')
        this.addToCartButton = page.locator('[data-test^="add-to-cart"]')
        this.removeButton = page.locator('[data-test^="remove"]')
        this.shoppingCartIcon = page.locator('[data-test="shopping-cart-link"]')
        this.shoppingCartCountNumber = page.locator('[data-test="shopping-cart-badge"]')
        this.burgerMenuButton = page.locator('[class="bm-burger-button"]')
    }

    async clickAddToCartButton() {
        await this.addToCartButton.click();
    }
    async clickRemoveButton() {
        await this.removeButton.click();
    }
    async clickBackToProducts() {
        await this.backToProduct.click();
    }
    async clickBurgerMenu() {
        await this.burgerMenuButton.click();
    }
}