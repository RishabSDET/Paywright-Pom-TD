exports.PDP = class PDP {
constructor(page){
this.page = page;
this.addToCartBtn = page.getByText('Add to cart', { exact: true });
//this.clickOnCartLink = page.getByTestId('shopping-cart-link');
this.clickOnCartLink = page.locator('[data-test="shopping-cart-link"]');
}

async clickAddToCartBtn(){
    await this.addToCartBtn.click();
}
async clickOnCart(){
    await this.clickOnCartLink.click();
}

}