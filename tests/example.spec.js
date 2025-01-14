const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://demo.alefed.com/');
  await page.waitForTimeout(10000);
  const loginButton = await page.getByRole('button', { name: 'Login' });
  await expect(loginButton).toBeVisible();
  
 // await expect(page).toHaveTitle(/Example Domain/);
});

test('has specific text', async ({ page }) => {
  await page.goto('https://moe.alefed.com');
    await page.waitForTimeout(10000);

  //await expect(page.locator('h1')).toHaveText('Example Domain');
   const loginButton = await page.getByRole('button', { name: 'Login' });
  await expect(loginButton).toBeVisible();
});
