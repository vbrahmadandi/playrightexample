const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    video: 'on', // Options: 'on', 'retain-on-failure', 'off', 'on-first-retry'
  },
  outputDir: 'test-results/', // Directory where videos and traces will be saved
});
