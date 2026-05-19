import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly dashboardHeader: Locator;
  readonly errorMessage: Locator;
  readonly requiredFieldMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.forgotPasswordLink = page.locator('.orangehrm-login-forgot-header');
    this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
    this.errorMessage = page.locator('.oxd-alert-content-text');
    this.requiredFieldMessage = page.locator('.oxd-input-field-error-message');

  }

  async openLoginPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectDashboardVisible() {
    await expect(this.dashboardHeader).toBeVisible();
  }

  async expectErrorMessage(message: string) {
  const actualText = await this.errorMessage.textContent();

  console.log('Actual Error Message:', actualText);

  await expect(this.errorMessage).toHaveText(message);
}

async expectRequiredMessage(message: string) {
  await expect(this.requiredFieldMessage).toHaveText(message);
}
  async clearUsername(){
   await this.usernameInput.fill('');
  }

  async clearPassword(){
   await this.passwordInput.fill('');
  }

  async clickForgotPassword() {
  await this.forgotPasswordLink.click();
}

}