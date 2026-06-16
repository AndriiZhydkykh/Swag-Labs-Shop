
export class LoginPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        this.page = page;
        this.url = 'https://www.saucedemo.com/'
        this.title = page.locator('div[class="login_logo"]')
        this.loginField = page.locator('[data-test="username"]')
        this.passwordField = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
        this.errorField = page.locator('h3[data-test="error"]')
        this.errorFieldExitButton = page.locator('h3 button[class="error-button"]')
        
    }

    async setLoginField(userName) {
        await this.loginField.fill(userName)
    }
    async setPasswordField(password) {
        await this.passwordField.fill(password)

    }
    async clearLoginField(userName) {
    await this.loginField.fill('')
    }
    async clearPasswordField(password) {
        await this.passwordField.fill('')
    }
    async clickLoginButton() {
        await this.loginButton.click()
    }
    async clickErrorFieldExitButton() {
        await this.errorFieldExitButton.click()
    }
    async visit() {
        await this.page.goto(this.url)
    }
}
