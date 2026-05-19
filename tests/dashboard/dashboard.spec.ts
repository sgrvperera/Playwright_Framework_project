import { test, expect } from '@playwright/test';
import { DashboardPage } from '../../pages/dashboardPage';

test.describe('Dashboard Smoke Tests', () => {

  test('should load dashboard successfully', async ({ page }) => {

    const dashboardPage = new DashboardPage(page);

    await page.goto('/web/index.php/dashboard/index');

    await dashboardPage.expectDashboardVisible();

    await expect(page).toHaveURL(/dashboard/);

  });

});