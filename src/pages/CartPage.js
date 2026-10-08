exports.CartPage = class CartPage
{
    constructor(page){
        this.page = page;
        this.checkoutbtn = page.getByRole('button',{name:'Checkout'});
        
    }

    async openCartPage(){
         await this.checkoutbtn.click();
    }


};