import {test} from '@playwright/test';
import {PimPage} from '../../pages/pimPage';
import {generateRandomEmployee} from '../../utils/dataGenerator';

test.describe('OrangeHRM search Employee Flow', () => {
    test('should search and find the created employee', async ({page}) => {
        const pimPage = new PimPage(page);
        const employee = generateRandomEmployee();

        await page.goto('web/index.php/pim/viewEmployeeList');
        await pimPage.clickAddEmployee();
        await pimPage.addEmployee(employee.firstName, employee.lastName);
        await pimPage.expectPersonalDetailsVisible();

        await page.goto('/web/index.php/pim/viewEmployeeList');
        await pimPage.searchEmployee(employee.firstName);
        await pimPage.expectEmployeeInResults(employee.firstName);


    });
});