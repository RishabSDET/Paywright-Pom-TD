exports.HomePage = class HomePage {
constructor(page){
    this.page = page;
    this.productCard = page.getByText('Sauce Labs Backpack');
  //  this.addtocart = page.getByRole('button',{name:'Add to cart'});
    this.addtocart = page.locator('#add-to-cart-sauce-labs-backpack');
    this.minicartclick = page.locator('.shopping_cart_link');
    this.openMenu = page.getByRole('button',{name : 'Open Menu'});
    this.clickAllitems = page.getByRole('button',{name : 'All Items'})
    this.clickDynamicCatalog = page.getByRole('button',{name : 'Dynamic Catalog'}); 
    this.clickAbout = page.getByRole('link',{name : 'About'});
    this.clickCross = page.getByRole('button',{name : 'Close Menu'});
    this.productCard2 = page.getByText('Sauce Labs Bolt T-Shirt');
}


// Method 1: Only handles adding items to the cart
    async addBackpackToCart(){
        await this.addtocart.click();
        await this.minicartclick.click();
    }
// Method 2: Only handles opening the sidebar menu
    async openSidebarMenu(){
        await this.openMenu.click();
        await this.clickAllitems.click();
        await this.clickDynamicCatalog.click();
        // await this.clickAbout.click();  
        // await this.clickCross.click();
}
 async openAbout(){
// await this.openMenu.click();
await this.clickAbout.click();
 }
 async closeMenu(){
    await this.openMenu.click();
    await this.clickCross.click();
 }
 async productCard2Select(){
    await this.click();
 }
// async gobackPrevPage() {
//     await this.page.goback();
// }
};
