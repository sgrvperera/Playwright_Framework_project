import {test} from '@playwright/test';
import {PimPage} from '../../pages/pimPage';
import {generateRandomEmployee} from '../../utils/dataGenerator';

test.describe('OrangeHRM Update Employee Flow', () => {
    test('should update an existing employee name',async ({page}) => {
        const pimPage = new PimPage(page);
        const employee = generateRandomEmployee();
        const updateEmployee = generateRandomEmployee();

        await page.goto('/web/index.php/pim/viewEmployeeList');
        await pimPage.clickAddEmployee();
        await pimPage.addEmployee(employee.firstName, employee.lastName);
        await pimPage.expectPersonalDetailsVisible();

        await page.goto('/web/index.php/pim/viewEmployeeList');
        await pimPage.searchEmployee(employee.firstName);
        await pimPage.expectEmployeeInResults(employee.firstName);

        await pimPage.clickEditEmployee(employee.firstName);
        await pimPage.updateEmployeeName(updateEmployee.firstName, updateEmployee.lastName);
        await pimPage.expectPersonalDetailsVisible();

        

    });

});
