exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page; 
    this.usernameInput = page.getByRole('textbox', {name : 'Username'});
    this.passwordInput = page.getByRole('textbox', {name : 'Password'});
    this.clickLogin = page.getByRole('button',{name : "Login"});
    
  }
 async openPage(){
      await this.page.goto('https://www.saucedemo.com/');
 }
//method containing actions of locators
   async doLogin(username,password){
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.clickLogin.click();
    //asfgsfdfsdr

   }
};