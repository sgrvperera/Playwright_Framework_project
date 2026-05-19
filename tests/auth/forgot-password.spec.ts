import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { ForgotPasswordPage } from '../../pages/forgotPasswordPage';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('OrangeHRM Forgot Password Flow', () => {
  test('should open forgot password page and submit reset request', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const forgotPasswordPage = new ForgotPasswordPage(page);

    await loginPage.openLoginPage();
    await loginPage.clickForgotPassword();

    await forgotPasswordPage.expectForgotPasswordPageVisible();
    await forgotPasswordPage.enterUsername('Admin');
    await forgotPasswordPage.clickResetPassword();
    await forgotPasswordPage.expectSuccessMessage('Reset Password link sent successfully');
  });
});