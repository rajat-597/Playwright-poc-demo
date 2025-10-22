import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

require('dotenv').config();

test('Select Product and Add to Cart', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToLoginPage();
    await login.SubmitLogin(process.env.USERNAME, process.env.PASSWORD);
    await page.waitForTimeout(2000);

    const home = new HomePage(page);
    await home.selectProduct(process.env.PRODUCT_NAME);
    await page.waitForTimeout(3000);
    await home.clickCart();

    await expect(page).toHaveURL('https://demoblaze.com/cart.html');
});
