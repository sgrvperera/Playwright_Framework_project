import {Page, Locator, expect} from '@playwright/test';
import {BasePage} from './basePage';

export class ForgotPasswordPage extends BasePage {
    readonly usernameInput: Locator;
    readonly resetButton: Locator;
    readonly cancelButton: Locator;
    readonly successMessage: Locator;
    

   constructor(page:Page){
    super(page);
    this.usernameInput = page.locator('input[name="username"]');
    this.resetButton = page.getByRole('button', {name:'Reset Password'});
    this.cancelButton = page.getByRole('button', {name: ' Cancel'});
    this.successMessage = page.locator('.oxd-text--success');
    

        
   }

   async expectForgotPasswordPageVisible(){
    await expect(this.resetButton).toBeVisible();

   }

 async clickResetPassword() {
  await this.resetButton.click({ noWaitAfter: true });
}
   async clickCancel(){
    await this.cancelButton.click();
   }

   async expectSuccessMessage(message: string){
    await expect(this.successMessage).toContainText(message);

   }

   async enterUsername(username: string){
    await this.usernameInput.fill(username);
   }

}
