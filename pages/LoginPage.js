
export class LoginPage {
    constructor(page){
        this.page = page;
        this.loginlink = '#login2';
        this.loginInputField = '#loginusername';
        this.passwordInputFiled = '#loginpassword';
        this.loginBtn = "//button[normalize-space(text()) = 'Log in']";
    }

    async navigateToLoginPage(){
        await this.page.goto('/');
    }

    async SubmitLogin(username,password){
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.loginInputField).fill(username);
        await this.page.locator(this.passwordInputFiled).fill(password);
        await this.page.locator(this.loginBtn).click();
    }
}
