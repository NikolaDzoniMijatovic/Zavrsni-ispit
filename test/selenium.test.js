"use strict";

require("chromedriver");
const webdriver = require("selenium-webdriver");
const {By, Key, until} = require("selenium-webdriver");
const {assert, expect} = require("chai");
const HomePage = require("../pages/home.page");
const RegisterPage = require("../pages/register.page");
const LoginPage = require("../pages/login.page");
const CartPage = require("../pages/cart.page");

describe('testqa.rs tests', function() {
    let driver;
    let pageHomepage;
    let pageRegister;
    let pageLogin;
    let cartPage;

    before(function() {
        driver = new webdriver.Builder().forBrowser("chrome").build();
        pageHomepage = new HomePage(driver);
        pageRegister = new RegisterPage(driver);
        pageLogin = new LoginPage(driver);
        cartPage = new CartPage(driver);
    });

    after(async function() {
        await driver.quit();
    });

    it("Opens tests.qa.rs", async function() {
        pageHomepage.goToPage();
        
        expect(await pageHomepage.getPageHeaderTitle()).to.be.true;
    });

    it("Goes to registration page", async function() {
        await pageHomepage.clickOnRegisterLink();
        await driver.sleep(3000);
        expect(await pageRegister.getRegisterButtonValue()).to.contain('Register');
    });

    it('Successfully performs registration', async function() {
        await pageRegister.getInputFirstName().sendKeys('Janko');
        await pageRegister.getInputLastName().sendKeys('Lazarevic');
        await pageRegister.getInputEmail().sendKeys('email@email.com');
        await pageRegister.getInputUserName().sendKeys('janko');
        await pageRegister.getInputPassword().sendKeys('4321');
        await pageRegister.getInputPasswordConfirmation().sendKeys('4321');
    
        await pageRegister.getRegisterButton().click();
        await driver.sleep(3000);
    });

    it('Goes to login page', async function () {
        await pageLogin.goToPage();
        await driver.sleep(3000);

        await pageLogin.getInputUserName().sendKeys('janko');
        await pageLogin.getInputPassword().sendKeys('4321');
        await pageLogin.clickOnLoginButton();
        
    });

    it('Order items', async function() {
        cartPage.orderFrenchFries();
        cartPage.orderOnionRings();
        cartPage.orderMozzarellaSticks();
        await driver.sleep(10000);
    });

    it("Performs logout", async function() {
        await pageHomepage.clickOnLogoutLink();

        expect(await pageHomepage.isLogoutButtonPresent()).to.be.true;
    });
});
    