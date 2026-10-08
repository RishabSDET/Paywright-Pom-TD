
const { expect } = require('@playwright/test');
exports.Checkout2 = class Checkout2
{

    constructor(page){
        this.page = page;
        this.checkTotalPrice = page.getByText('Total: $32.39');
        this.finishBtn = page.getByText('Finish');
    }
    async opencheckout2() {
       await expect(this.checkTotalPrice).toBeVisible();
       await this.finishBtn.click();
    }
}