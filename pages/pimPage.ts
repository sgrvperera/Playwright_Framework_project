import { expect, Locator, Page } from '@playwright/test';

export class PimPage {
  readonly page: Page;
  readonly pimMenu: Locator;
  readonly addButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly saveButton: Locator;
  readonly personalDetailsHeader: Locator;
  readonly employeeNameSearchInput: Locator;
  readonly searchButton: Locator;
  readonly resultRows: Locator;
  readonly editButton: Locator;
  readonly confirmDeleteButton: Locator;


  constructor(page: Page) {
    this.page = page;

    this.pimMenu = page.getByRole('link', { name: 'PIM' });
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.firstNameInput = page.locator('input[name="firstName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.personalDetailsHeader = page.getByRole('heading', { name: 'Personal Details' });

    this.employeeNameSearchInput = page.getByPlaceholder('Type for hints...').first();
    this.searchButton = page.getByRole('button', {name: 'search'});
    this.resultRows = page.locator('.oxd-table-card');
    this.editButton = page.getByRole('button', {name: 'Edit'});
    this.confirmDeleteButton = page.getByRole('button', {name: 'Yes, Delete'});

    

  }

  async openPIMPage() {
    await this.pimMenu.click();
  }

  async clickAddEmployee() {
    await this.addButton.click();
  }

  async addEmployee(firstName: string, lastName: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
  }

  async expectPersonalDetailsVisible() {
    await expect(this.personalDetailsHeader).toBeVisible();
  }

  async searchEmployee(name: string) {
  await this.employeeNameSearchInput.fill(name);
  await this.searchButton.click();
}

  async getEmployeeRow(name: string) {
    return this.page.getByRole('row').filter({hasText:name}).first();
  }

async expectEmployeeInResults(name: string) {
  const row = await this.getEmployeeRow(name);
  await expect(row).toBeVisible();
  await expect(row).toContainText(name);


}

async clickEditEmployee(name: string) {
  const row = await this.getEmployeeRow(name);
  await row.locator('i.bi-pencil-fill').click();

}

async updateEmployeeName(newFirstName: string, newLastName: string) {
  await this.firstNameInput.fill(newFirstName);
  await this.lastNameInput.fill(newLastName);
  await this.saveButton.click();

}

async clickDeleteEmployee(name: string) {

  const row = await this.getEmployeeRow(name);
  await row.locator('i.bi-trash').click();

}

async confirmDelete() {
 await this.confirmDeleteButton.click();

}

async expectEmployeeDeleted() {

  await expect(this.page.getByText('No Records Found')).toBeVisible();
   

}


}