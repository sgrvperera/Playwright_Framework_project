import{Page, Locator, expect} from '@playwright/test';
import {BasePage} from'./basePage';

export class DashboardPage extends BasePage {
    readonly dashboardHeader: Locator;
    readonly userMenu: Locator;
    readonly logoutLink: Locator;

    constructor(page:Page){
        super(page);
        this.dashboardHeader = page.getByRole('heading', {name: 'Dashboard'});
        this.userMenu = page.locator('.oxd-userdropdown-tab');
        this.logoutLink = page.getByText('Logout');
    }

    async expectDashboardVisible(){
        await expect(this.dashboardHeader).toBeVisible();

    }

    async openUserMenu(){
        await this.userMenu.click();

    }

    async logout(){
        await this.openUserMenu();
        await this.logoutLink.click();
    }
}