/**
 * Created by vikasv on 8/10/2016.
 */

var MetaMaskPageLocators = {
    AcceptBtn: element(by.xpath(".//button[text()='Accept']")),
    PrivacyLink: element(by.css("a[href='https://metamask.io/privacy.html']")),
    PasswordTxtBox: element(by.id("password-box")),
    ConfirmPasswordTxtBox: element(by.id("password-box-confirm")),
    CreateBtn: element(by.xpath(".//button[text()='Create']")),
    CopyConfirmBtn: element(by.xpath(".//button[contains(text(),'copied it somewhere safe')]"))
};
module.exports = MetaMaskPageLocators;