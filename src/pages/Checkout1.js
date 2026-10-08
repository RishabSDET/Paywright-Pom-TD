exports.Checkout1 = class Checkout1
{
    constructor(page){
        this.page = page;
        this.firstName = page.getByRole('textbox',{name:'First Name'});
        this.lastName = page.getByRole('textbox',{name:'Last Name'});
        this.zipCode = page.getByRole('textbox',{name: 'Zip/Postal Code'});
        this.continueBtn = page.getByRole('button',{name: 'Continue'});

    }
    async OpencheckoutPage(firstName, lastName, zipCode){
            await this.firstName.fill(firstName);
            await this.lastName.fill(lastName);
            await this.zipCode.fill(zipCode);
            await this.continueBtn.click();
    }


};