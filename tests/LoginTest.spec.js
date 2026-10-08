
const {test, expect} = require('@playwright/test');
//const fs = require('fs');
//const { parse } = require('csv-parse/sync');
const {LoginPage} = require('../src/pages/LoginPage');
const {HomePage} = require('../src/pages/HomePage');
const {CartPage} = require('../src/pages/CartPage');
const {Checkout1} = require('../src/pages/Checkout1');
const {Checkout2} = require('../src/pages/Checkout2');
const{CheckoutComplete} = require('../src/pages/CheckoutComplete.js');
const{About} = require('../src/pages/About.js');
const testdata = require('../src/testdata/data.js');
// 1. IMPORT the tool first
//const { readCsv } = require('../src/utils/csv-reader');
// 1. DIRECTLY IMPORT THE JSON FILE (No special reader tool needed!)
const checkoutData = require('../src/testdata/checkout_data.json');
// 2. USE the tool to read the data
//const checkoutData = readCsv('src/testdata/checkout_data.csv');

for (const row of checkoutData) {
    // 3. Test block start karein (Notice the backticks ` instead of quotes ')
    test(`E2E Checkout Flow for ${row.firstName}`, async ({page}) => {
// 3. Constructor ko call karke page class initialize karein
const loginPage = new LoginPage(page);
const homePage = new HomePage(page);
const cartPage = new CartPage(page);
const checkout1 = new Checkout1(page);
const checkout2 = new Checkout2(page);
const checkoutComplete = new CheckoutComplete(page);
const about = new About(page);
//4. Method Calling
await loginPage.openPage();
await loginPage.doLogin(testdata.user1.username, testdata.user1.password,testdata.clickLogin);
// 4. Login hone ke baad, directly Home Page ka method call karein
  // (Ab aapko wapas goto() lagane ki zarurat nahi hai, kyunki login ke baad browser khud home page par aa jayega)
  await homePage.addBackpackToCart(testdata.addtocart); // Check karega ki Backpack dikh raha hai ya nahi
  await cartPage.openCartPage(testdata.checkoutbtn);
//await checkout1.OpencheckoutPage(testdata.user1.firstName, testdata.user1.lastName, testdata.user1.zipCode, testdata.continueBtn);
//   await homePage,HomePageOpens
//await checkout2.opencheckout2(testdata.checkTotalPrice, testdata.finishBtn);
await checkout1.OpencheckoutPage(row.firstName, row.lastName, row.zipCode);
await checkout2.opencheckout2(testdata.checkTotalPrice, testdata.finishBtn);
await checkoutComplete.checkoutMessage(testdata.thankyoumessage, testdata.generatePDFOrder, testdata.backtoHome);

await homePage.openSidebarMenu(testdata.openMenue, testdata.clickAllitems, testdata.clickDynamicCatalog);
await homePage.openAbout();
// await homePage.gobackPrevPage();
await about.goBackBtn();
await homePage.closeMenu();
await page.waitForTimeout(1000);
//await homePage.openSidebarMenu(testdata.clickCross);

//Screenshot:
await page.screenshot({ path: 'screenshots/login-success.png' });

});}