const fs = require('fs');
const path = require('path');

function getTestData(env) {
    const filePath = path.resolve(__dirname, `./../test-data/${env}.json`);
    if (!fs.existsSync(filePath)) {
        throw new Error(`Test data file not found for environment: ${env}`);
    }
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

module.exports = { getTestData };
