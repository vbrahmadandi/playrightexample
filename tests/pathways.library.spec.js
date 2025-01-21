const {test, expect} = require('@playwright/test');
const {getTestData} = require('./../util/test-data');

const LoginPage = require('../pages/login');
const HomePage = require('../pages/teacher/homepage')
const NavPage = require('../pages/teacher/navsidebar')
const LibraryPage = require('../pages/teacher/librarypage')
//const env = process.env.ENV || 'moe';
const testData = getTestData(env);

test('verify pathways library', async ({page}) => {
    const loginPage = new LoginPage(page);
    const homepage = new HomePage(page);
    const navPage = new NavPage(page)
    const libraryPage = new LibraryPage(page)
    await page.goto(testData.baseUrl);
    await loginPage.login(testData.username, testData.password);
    await homepage.clickClassLink();
    await navPage.clickLibrary()
    await libraryPage.searchTxt('pathway-activity-10')
    await page.waitForTimeout(2000);
    await libraryPage.clickActivity()
    await page.waitForTimeout(2000);
    await page.getByTestId('navigation-bar-back-btn').click();
    await libraryPage.searchTxt('cp-10')
    await page.waitForTimeout(5000);
    await libraryPage.clickActivity()
});

