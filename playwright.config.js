const { defineConfig } = require('@playwright/test');
const { devices } = require('@playwright/test');


module.exports = defineConfig({
  use: {
    video: 'on', // Options: 'on', 'retain-on-failure', 'off', 'on-first-retry'
  },
  outputDir: 'test-results/', // Directory where videos and traces will be saved
  projects: [
    {
      name: 'chromium',
      //use: { browserName: 'chromium' }, // Use Chromium
      use: { ...devices['Desktop Chrome'] },
      headless: true
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
