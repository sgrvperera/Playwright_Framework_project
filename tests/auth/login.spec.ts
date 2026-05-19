import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { validUser, invalidUser, emptyUser } from '../../data/users';


test.use({ storageState: { cookies: [], origins: [] } });

test.describe('OrangeHRM Login Flow', () => {
  test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();
    await loginPage.login(validUser.username, validUser.password);
    await loginPage.expectDashboardVisible();
  });

  test('should show error for invalid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();
    await loginPage.login(invalidUser.username, invalidUser.password);
    await loginPage.expectErrorMessage('Invalid credentials');


  });

  test('should show error when username is empty', async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();
    await loginPage.login(emptyUser.username, validUser.password);
    await loginPage.expectRequiredMessage('Required');

  });

  test('should show error when password is empty', async ({page}) => {
    const loginPage = new LoginPage(page);;

    await loginPage.openLoginPage();
    console.log(validUser);
    await loginPage.login(validUser.username, emptyUser.password);
    await loginPage.expectRequiredMessage('Required');
  });


});