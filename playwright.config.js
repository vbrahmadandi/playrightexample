const { defineConfig } = require('@playwright/test');
const { devices } = require('@playwright/test');


module.exports = defineConfig({
  use: {
    video: 'on', // Options: 'on', 'retain-on-failure', 'off', 'on-first-retry'
  },
  outputDir: 'test-results/', // Directory where videos and traces will be saved
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
  timeout: 60000, // Set the default timeout to 60 seconds (60000 ms)
  projects: [
    {
      name: 'chrome',
      //use: { browserName: 'chromium' }, // Use Chromium
      //use: { ...devices['Desktop Chrome'] },
      //headless: true,
      //acceptDownloads: true,  // Disable download prompts for headless mode
      //args: ['--no-sandbox', '--disable-setuid-sandbox']
      use:{...devices['Desktop Chrome']}
    }
    /*{
      name: 'firefox',
      use: { browserName: 'firefox' }, // Use Firefox
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' }, // Use WebKit
    },*/
  ],
});
