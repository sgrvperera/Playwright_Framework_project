import {test, expect} from'@playwright/test';
import { LoginPage} from '../../pages/loginPage';
import {DashboardPage} from '../../pages/dashboardPage';
import {validUser} from '../../data/users';


test.describe('OrangeHrm Logout Flow', () => {

    test.beforeEach(async ({page}) => {
       const loginPage = new LoginPage(page);

       await loginPage.openLoginPage();
       await loginPage.login(validUser.username,validUser.password);
    

    });

    test('should logout successfully', async ({page}) => {
        const dashboardPage = new DashboardPage(page);

        await dashboardPage.expectDashboardVisible();
        await dashboardPage.logout();

        await expect(page).toHaveURL(/login/);


    });

    


})

