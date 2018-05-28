/*global protractor*/
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var path = require('path');
var separator = path.sep;
var dt = new Date();
var randomFolderName = (dt.getMonth() + 1) + "_" + dt.getDate() + "_" + dt.getFullYear() + "_" + dt.getHours() + "h" + dt.getMinutes() + "m" + dt.getSeconds() + "s";
var reportsPath = path.resolve(__dirname, "HtmlReports" + separator + randomFolderName);
var customJsonReporter = require('./e2e/utilities/JsonReport.js');

var helper = require('./e2e/utilities/Helper.js');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: 'https://oasisdex.com/#trade/MKR/W-ETH',

    params: {
        ext_url: "chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/popup.html",
        ext_pswd: "O@sis#123"
    },

    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            'extensions': [helper.encodeToBase64("./e2e/resources/MetaMask_v4.6.1.crx")]
        }
    },
    specs: ['e2e/specs/Demo_Spec.js'],

    framework: 'jasmine2',

    allScriptsTimeout: 720000,

    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 1440000
    },

    onPrepare: function () {
        browser.driver.getCapabilities().then(function (caps) {
            browser.browserName = caps.get('browserName');
        });
        global.jsonReportFilePath = './JsonReports/ExecutionReport_' + randomFolderName + '.json';
        global.jsonReport = new customJsonReporter();
        global.using = require('jasmine-data-provider');
        var env = jasmine.getEnv();
        env.addReporter(new SpecReporter());
        env.uploadDir = ".." + separator + "fileAttachments" + separator;
        return global.browser.getProcessedConfig().then(function (config) {

        });
    },

    plugins: [{
      package: 'jasmine2-protractor-utils',
      disableHTMLReport: false,
      disableScreenshot: false,
      screenshotPath: reportsPath+separator+'screenshots',
      screenshotOnExpectFailure: true,
      screenshotOnSpecFailure: true,
      clearFoldersBeforeTest: true,
      htmlReportDir: reportsPath+separator+'htmlReports'
    }]
};
