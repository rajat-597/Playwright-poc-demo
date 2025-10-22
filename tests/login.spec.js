import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
require('dotenv').config();

// console.log('Loaded USERNAME:', process.env.USERNAME);
// console.log('Loaded PASSWORD:', process.env.PASSWORD);
// console.log('Loaded BASE_URL:', process.env.BASE_URL);


test('Login Test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToLoginPage();
    await login.SubmitLogin(process.env.USERNAME, process.env.PASSWORD); 
    await page.waitForTimeout(3000);

    await expect(page.locator('#logout2')).toBeVisible();
});
