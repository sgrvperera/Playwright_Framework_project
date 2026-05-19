import {test} from '@playwright/test';
import {PimPage} from '../../pages/pimPage';
import { generateRandomEmployee} from '../../utils/dataGenerator';

test.describe('OrangeHRM Delete Employee Flow', () => {
    test('should delete an emplyee successfully', async ({page}) => {
      
        const pimPage = new PimPage(page);
        const employee = generateRandomEmployee();

        await page.goto('/web/index.php/pim/viewEmployeeList');
        await pimPage.clickAddEmployee();
        await pimPage.addEmployee(employee.firstName, employee.lastName);
        await pimPage.expectPersonalDetailsVisible();
        
        await page.goto('/web/index.php/pim/viewEmployeeList');
        await pimPage.searchEmployee(employee.firstName);
        await pimPage.expectEmployeeInResults(employee.firstName);

        await pimPage.clickDeleteEmployee(employee.firstName);
        await pimPage.confirmDelete();
        await pimPage.searchEmployee(employee.firstName);
        await pimPage.expectEmployeeDeleted();


    }

    );

}

);