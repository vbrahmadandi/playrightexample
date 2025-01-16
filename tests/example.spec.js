const { test, expect } = require('@playwright/test');

/*test('has title', async ({ page }) => {
  await page.goto('https://demo.alefed.com/');
  await page.waitForTimeout(10000);
  const loginButton = await page.getByRole('button', { name: 'Login' });
  await expect(loginButton).toBeVisible();

  
 // await expect(page).toHaveTitle(/Example Domain/);
});*/

/*test('has specific text', async ({ page }) => {
  await page.goto('https://moe.alefed.com');
    await page.waitForTimeout(10000);

  //await expect(page.locator('h1')).toHaveText('Example Domain');
   const loginButton = await page.getByRole('button', { name: 'Login' });
  await expect(loginButton).toBeVisible();
});*/


/*test('Print OS name, browser name, and version', async ({ browserName, browser }) => {
  // Get the OS name
  const osName = process.platform; // 'win32', 'darwin', or 'linux'

  // Get the browser version
  const browserVersion = (await browser.version());

  // Print the details
  console.log(`Operating System: ${osName}`);
  console.log(`Browser Name: ${browserName}`);
  console.log(`Browser Version: ${browserVersion}`);
});*/

test('verify content', async ({page }) => {
  await page.goto('https://moe.alefed.com/');
  await page.goto('https://moe.alefed.com/?1736878603638');
  await page.goto('https://sso.alefed.com/login?state=hKFo2SB3ZDg0OW5mb1gwM3U4MzF0ZlBwbUZFQ09yaVpVbmtaUKFupWxvZ2luo3RpZNkgcVdwbnJZVXhzaTA3LUsyYUgzWHdCTXloXzdySTZ4QWujY2lk2SA5Q0tlakFFSzFDWjh0NVJqbHluYmhGQjBJM1lRbTVZVw&client=9CKejAEK1CZ8t5RjlynbhFB0I3YQm5YW&protocol=oauth2&audience=https%3A%2F%2Falefed.com%2Fbackend&response_type=code&redirect_uri=https%3A%2F%2Fwww.alefed.com%2Fcallback&scope=openid%20profile%20email&tenant=moe&stateId=zTUzXBm6EEA5apM9e2ebdzkOhtK3Ov');
  await page.getByPlaceholder('Username or Email').click();
  await page.getByPlaceholder('Username or Email').dblclick();
  await page.getByPlaceholder('Username or Email').fill('pathwaysteachmoe@moe.ae');
  await page.getByPlaceholder('Password').dblclick();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('4cb3e8fa7bc539de18e902c835d1df8625516d8b');
  await page.getByTestId('bt-login').click();
  await page.getByTestId('top-navigation-classes').click();
  await page.getByTestId('sidebar-item-library').click();
  await page.getByTestId('pathway-library-page-search-bar').click();
  await page.getByTestId('pathway-library-page-search-bar').click();
  await page.getByTestId('pathway-library-page-search-bar').fill('pathway-activity-10');
  await page.getByTestId('pathway-library-page-search-bar').press('Enter');
  await page.getByTestId('activity-card-thumbnail').click();
  await page.getByTestId('next-button').click();
  await page.getByRole('tab', { name: 'Analytics' }).click();
  await page.getByText('Exit Ticket').click();
  await page.getByTestId('activity-components').locator('div').filter({ hasText: 'Content' }).first().click();
  await page.getByTestId('navigation-bar-back-btn').click();
  await page.getByTestId('pathway-library-page-search-bar').click({
    clickCount: 3
  });
  await page.getByTestId('pathway-library-page-search-bar').fill('cp-10');
  await page.getByTestId('pathway-library-page-search-bar').press('Enter');
  await page.getByTestId('activity-card-thumbnail').click();
  await page.getByTestId('navigation-bar').getByText('Level-').click();
  await page.getByText('PP').click();
  await page.locator('div').filter({ hasText: /^Log out$/ }).nth(2).click();

});
