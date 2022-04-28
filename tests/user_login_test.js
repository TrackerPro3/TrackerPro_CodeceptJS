Feature('User login');


Scenario('Verify login with correct credentials',  ({ I, user_loginPage, loginData }) => {
    
    I.amOnPage('Login.aspx');
    //I.refreshPage();

    user_loginPage.enterUserName(loginData.login.userID);
    user_loginPage.clickNext();
    user_loginPage.enterPassword(loginData.login.Password);
    user_loginPage.clickLogin();
    user_loginPage.selectOrg();
    user_loginPage.homepageAssert();

});
