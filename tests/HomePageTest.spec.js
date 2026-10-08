const {test, expect} = require('@playwright/test');
const {MyPage, HomePage} = require('../src/pages/HomePage');

test('Home Page Test', async({page})=>{
    const HomePage = new HomePage(page);
await HomePage.openPage();
await HomePage.HomePageOpens();


})