class LoginPage {
    constructor(page) {
        this.page = page;  // The Playwright Page object
        this.usernameInput = this.page.getByPlaceholder('Username');
        this.passwordInput = this.page.getByPlaceholder('Password')
        this.submitButton = this.page.getByTestId('bt-login');
    }
    async enterUsername(username) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }
    async submitLogin() {
        await this.submitButton.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.submitLogin();
    }
}
module.exports = LoginPage;
