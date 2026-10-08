exports.About = class About{
    constructor(page){
        this.page = page;
        
    }

    async goBackBtn() {
        await this.page.goBack();
    }
}