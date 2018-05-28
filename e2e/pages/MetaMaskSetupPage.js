/**
 * Created by vikasv on 8/10/2016.
 */

var metaMaskSetUpPageLocators = require('../locators/MetaMaskPageLocators.js');
var Syn = require('../utilities/Sync.js');
var waitTimeOuts = require('../utilities/WaitTimeOuts.js');
var sync = new Syn();

var MetaMaskSetupPage = function () {

    this.clickAccept = function () {
        sync.isElementVisible(metaMaskSetUpPageLocators.AcceptBtn, waitTimeOuts.shortWait);
        sync.isElementClickable(metaMaskSetUpPageLocators.AcceptBtn, waitTimeOuts.shortWait);
        metaMaskSetUpPageLocators.AcceptBtn.click();
    };

    this.scrollDownAndAccept = function () {
        browser.executeScript("arguments[0].scrollIntoView(true);", metaMaskSetUpPageLocators.PrivacyLink.getWebElement()).then(function () {
            element(by.xpath(".//button[text()='Accept']")).click();
            //browser.driver.sleep(15000);
        });
    };
    this.enterPassword = function () {
        sync.isElementVisible(metaMaskSetUpPageLocators.PasswordTxtBox, waitTimeOuts.shortWait);
        metaMaskSetUpPageLocators.PasswordTxtBox.sendKeys(browser.params.ext_pswd);


    };
    this.confirmPassword = function () {
        sync.isElementVisible(metaMaskSetUpPageLocators.ConfirmPasswordTxtBox, waitTimeOuts.shortWait);
        metaMaskSetUpPageLocators.ConfirmPasswordTxtBox.sendKeys(browser.params.ext_pswd);


    };
    this.clickCreate = function () {
        sync.isElementVisible(metaMaskSetUpPageLocators.CreateBtn, waitTimeOuts.longWait);
        metaMaskSetUpPageLocators.CreateBtn.click();
    };
    this.clickConfirmCopyBtn = function () {
        sync.isElementVisible(metaMaskSetUpPageLocators.CopyConfirmBtn, waitTimeOuts.longWait);
        metaMaskSetUpPageLocators.CopyConfirmBtn.click();
    };

};

module.exports = MetaMaskSetupPage;
