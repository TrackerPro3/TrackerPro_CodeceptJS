Feature('login_test');

Scenario('Verify Login is succesfull', ({ I }) => {
    I.amOnPage('https://azrtracker01.trackerpro.cc/Oscar/Authentication/Login.aspx');
    //I.wait(10);
    I.fillField({id:'txtUsername'}, 'srikanthyadav.kompally@ryan.com');
    //I.waitForElement({id:'ctl00_cphBody_btnLogin'},15);
    I.click({id:'ctl00_cphBody_btnLogin'});
    I.waitForElement({CSS:'#txtPassword'},15)
    I.seeElement('#txtPassword');
    I.fillField({CSS:'#txtPassword'}, secret('Password'));
    I.seeElement({CSS: '#ctl00_cphBody_btnLogin'});
    I.click({CSS:'#ctl00_cphBody_btnLogin'});
    I.waitForElement({xpath:"//div[contains(text(),'QA - Srikanth')]"}, 10);
    I.seeElement({xpath:"//div[contains(text(),'QA - Srikanth')]"});
    I.doubleClick({xpath:"//div[contains(text(),'QA - Srikanth')]"});
    I.waitForText('Unclaimed Property System', 10);
    I.see('Unclaimed Property System');
    

});
