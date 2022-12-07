const { I } = inject();

module.exports = {
//Test
locators:{
  username: "//input[@id='txtUsername']",
  password: "//input[@id='txtPassword']",
  next: "//*[@value = 'Next']",
  selectOrg: "//div[contains(text(),'QA - Srikanth')]",
  homePage: "//*[span = 'Home']"
},

enterUserName(UserID){
  I.fillField(this.locators.username, UserID);
  I.seeElement(this.locators.next);
},

clickNext(){
  I.click(this.locators.next);
  I.waitForElement(this.locators.password, 10);
  I.seeElement(this.locators.password);
},

enterPassword(Password){
  I.fillField(this.locators.password, Password);
  I.seeElement(this.locators.next);
},

clickLogin(){
  I.click(this.locators.next);
  I.waitForElement(this.locators.selectOrg, 10);
},

selectOrg(){
  I.seeElement(this.locators.selectOrg);
  I.doubleClick(this.locators.selectOrg);
  I.waitForElement(this.locators.homePage, 10);
},

homepageAssert()
{
  I.seeElement(this.locators.homePage);
}



}
