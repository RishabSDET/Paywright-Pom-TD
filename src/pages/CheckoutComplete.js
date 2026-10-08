const { expect } = require("@playwright/test");

exports.CheckoutComplete = class CheckoutComplete
{
    constructor(page){
        this.page = page;
        this.thankyoumessage = page.getByText('Thank you for your order!');
        this.generatePDFOrder = page.getByText('Generate PDF order');
        this.backtoHome = page.getByRole('button',{name :'Back Home'});
    }
    async checkoutMessage(){
        await expect(this.thankyoumessage).toBeVisible();
        await this.generatePDFOrder.click();
        await this.backtoHome.click();

    }
}