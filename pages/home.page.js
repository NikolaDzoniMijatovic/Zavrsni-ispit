"use strict";

const { expect } = require("chai");
const { By, Key, until } = require("selenium-webdriver");

module.exports = class HomePage {
    #driver;

    constructor(webdriver) {
        this.#driver = webdriver;
    }

    goToPage() {
        return this.#driver.get("http://test.qa.rs/");
    }

    getPageHeaderTitle() {
        return this.#driver.findElement(By.css('h1')).isDisplayed();
    }

    async clickOnRegisterLink() {
        const registerLink = this.#driver.findElement(By.linkText('Register'));
        registerLink.click();
    }

    async clickOnLogoutLink() {
        const logoutLink = this.#driver.findElement(By.xpath('//a[contains(text(), "Logout Janko")]'));
        logoutLink.click();
    }

    isLogoutButtonPresent() {
        return this.#driver.findElement(By.xpath('//a[contains(@class, "btn btn-warning")]'));
    }
}
