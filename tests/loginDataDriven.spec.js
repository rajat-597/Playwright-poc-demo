
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {loginCredentials}  from '../utils/loginData.js';

test.describe('Data-Driven Login Tests', () => {
  for (const { username, password, expected } of loginCredentials) {
    test(`Login Test -> Username: ${username} | Expected: ${expected ? 'Success' : 'Failure'}`, async ({ page }) => {
      const login = new LoginPage(page);

      await login.navigateToLoginPage();

      if (!expected) {
        page.once('dialog', async (dialog) => {
          console.log(`Alert message: ${dialog.message()}`);
          await dialog.accept();
        });
      }

      await login.SubmitLogin(username, password);
      await page.waitForTimeout(2000);

      const logoutButton = page.locator('#logout2');

      if (expected) {
        await expect(logoutButton).toBeVisible();
      } else {
        await expect(logoutButton).not.toBeVisible();
      }

    });
    
  }
});
