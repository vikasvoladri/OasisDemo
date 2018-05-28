var Sync = require('../utilities/Sync.js');
var JsonReport = require('../utilities/JsonReport.js');
var helper = require('../utilities/Helper.js');
var MetaMaskSetUpPage = require('../pages/MetaMaskSetupPage.js');
var LandingPage = require('../pages/LandingPage.js');


describe('This describes launch OASIS and install meta-mask extension e2e flow', function () {

    /**
     * creating page objects
     */
    var sync = new Sync();
    var jsonReport = new JsonReport();
    var metaMaskSetUpPageObj = new MetaMaskSetUpPage();
    var oasisLandingPageObj = new LandingPage();

    beforeAll(function () {
        browser.ignoreSynchronization = true;
    });

    it('launch and verify that oasis is not connected to ethereum', function () {
        oasisLandingPageObj.launchSite(browser.baseUrl);
        sync.switchOasisMainWindow();
        oasisLandingPageObj.verifyNotConnectedToEthereumisDisplayed();
    });

    it('install chrome extension metamask and verify that account is created', function () {
        browser.get(browser.params.ext_url);
        //sync.switchToMetaMaskMainWindow();
        metaMaskSetUpPageObj.clickAccept();
        metaMaskSetUpPageObj.scrollDownAndAccept();
        metaMaskSetUpPageObj.enterPassword();
        metaMaskSetUpPageObj.confirmPassword();
        metaMaskSetUpPageObj.clickCreate();
        metaMaskSetUpPageObj.clickConfirmCopyBtn();
    });

    it('refresh and verify that oasis is functioning', function () {
        oasisLandingPageObj.refreshTheOasisSite();
        oasisLandingPageObj.verifyOasisIsFunctioning();
    });

    afterEach(function () {
        jsonReport.writeToJson("Specs.SPC001_LaunchAndInstallTestSpec");
    });

    afterAll(function () {
        browser.quit();
    });
});