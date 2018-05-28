/**
 * Created by vikasv on 8/10/2016.
 */
var assert = require('assert');
var landingPageLocators = require('../locators/LandingPageLocators.js');
var Syn = new require('../utilities/Sync.js');
var waitTimeOuts = require('../utilities/WaitTimeOuts.js');
var sync = new Syn();

var LandingPage = function () {

    this.refreshTheOasisSite = function () {
        browser.get(browser.baseUrl, waitTimeOuts.longWait);
        browser.manage().window().maximize();
    };

    this.launchSite = function (url) {
        browser.get(url, waitTimeOuts.longWait);
        browser.manage().window().maximize();
    };
    this.verifyNotConnectedToEthereumisDisplayed = function () {
        sync.isElementVisible(landingPageLocators.Header, waitTimeOuts.longWait);
        landingPageLocators.Header.getText().then(function (headerText) {
            assert(headerText == "NOT CONNECTED TO ETHEREUM", 'expected header text is not displayed')
        });
    };
    this.verifyOasisIsFunctioning = function () {
        assert(sync.isElementVisible(landingPageLocators.GetStarted, waitTimeOuts.longWait), "Oasis is not loded");
    }
};
module.exports = LandingPage;