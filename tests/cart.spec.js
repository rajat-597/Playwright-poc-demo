import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

require('dotenv').config();


test('Verify Cart Contents', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigateToLoginPage();
    await login.SubmitLogin(process.env.USERNAME, process.env.PASSWORD);
    await page.waitForTimeout(2000);

    const home = new HomePage(page);
    await home.selectProduct(process.env.PRODUCT_NAME);
    await home.clickCart();
    await page.waitForTimeout(3000);


    const cart = new CartPage(page);
    const isPresent = await cart.presenceOfProduct(process.env.PRODUCT_NAME);
    expect(await isPresent).toBe(true);

    // const count = await cart.itemsCount();
    // expect(count).toBe(Number(9));
});
