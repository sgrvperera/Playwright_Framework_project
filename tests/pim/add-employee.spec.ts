import { test } from '@playwright/test';
import { PimPage } from '../../pages/pimPage';
import { generateRandomEmployee } from '../../utils/dataGenerator';

test.describe('OrangeHRM Add Employee Flow', () => {
  test('should add a new employee successfully', async ({ page }) => {
    const pimPage = new PimPage(page);
    const employee = generateRandomEmployee();

    await page.goto('/web/index.php/pim/viewEmployeeList');
    await pimPage.clickAddEmployee();
    await pimPage.addEmployee(employee.firstName, employee.lastName);
    await pimPage.expectPersonalDetailsVisible();
  });
});