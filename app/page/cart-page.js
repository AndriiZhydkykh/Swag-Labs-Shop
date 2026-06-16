export class CartPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        this.page = page
        this.url = 'https://www.saucedemo.com/cart.html'
        this.sectionYourCartTitle = page.locator('span[data-test="title"]')
        this.sectionQTYTitle = page.locator('div[data-test="cart-quantity-label"]')
        this.sectionDescriptionTitle = page.locator('div[data-test="cart-desc-label"]')
        this.continueShoppingButton = page.locator('button[data-test="continue-shopping"]')
        this.checkoutButton = page.locator('button[data-test="checkout"]')
        this.productsNames = page.locator('div[data-test="inventory-item-name"]')
        this.productsPrice = page.locator('div[data-test="inventory-item-price"]')
        this.firstProductRemoveButton = page.locator('button[data-test="remove-sauce-labs-backpack"]')
        this.secondProductRemoveButton = page.locator('button[data-test="remove-sauce-labs-bike-light"]')
        this.secondProductRemoveButton = page.locator('button[data-test="remove-sauce-labs-bike-light"]')
        this.thirdProductRemoveButton = page.locator('button[data-test="remove-sauce-labs-bolt-t-shirt"]')
        this.fourthProductRemoveButton = page.locator('button[data-test="remove-sauce-labs-fleece-jacket"]')
        this.fifthProductRemoveButton = page.locator('button[data-test="remove-sauce-labs-onesie"]')
        this.sixthProductRemoveButton = page.locator('button[data-test="remove-test.allthethings()-t-shirt-(red)"]')
        this.shoppingCartIcon = page.locator('a[data-test="shopping-cart-link"]')
        this.shoppingCartCountNumber = page.locator('span[data-test="shopping-cart-badge"]')
    }
    async clickFirstProductRemoveButton() {
        await this.firstProductRemoveButton.click()
    }
    async clickSecondProductRemoveButton() {
        await this.secondProductRemoveButton.click()
    }
    async clickThirdProductRemoveButton() {
        await this.thirdProductRemoveButton.click()
    }
    async clickFourthProductRemoveButton() {
        await this.fourthProductRemoveButton.click()
    }
    async clickFifthProductRemoveButton() {
        await this.fifthProductRemoveButton.click()
    }
    async clickSixthProductRemoveButton() {
        await this.sixthProductRemoveButton.click()
    }
    async clickContinueShopping() {
        await this.continueShoppingButton.click()
    }
}