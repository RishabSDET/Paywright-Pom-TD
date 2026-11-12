exports.Spinner = class Spinner{
constructor (page) { 
    this.page = page;
    this.productCard1 = page.getByText('Sauce Labs Bike Light');
}
async clickonProductCart(){
    await this.productCard1.click();
}




};
