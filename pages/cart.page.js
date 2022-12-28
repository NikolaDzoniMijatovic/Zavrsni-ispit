"use strict";

const { By, Key, until } = require("selenium-webdriver");

module.exports = class CartPage {
    #driver;

    constructor(webdriver) {
        this.#driver = webdriver;
    }

    goToPage() {
        return this.#driver.get('http://test.qa.rs/');
    }

    async orderFrenchFries() {
        const firstItem = this.#driver.findElement(By.xpath('//input[@type="submit"]'));
        firstItem.click();
    }

    async orderOnionRings() {
        const secondItem = this.#driver.findElement(By.xpath('//option[@value="or"]'));
        secondItem.click();
    }

    async orderMozzarellaSticks() {
        const thirdItem = this.#driver.findElement(By.xpath('//option[@value="ms"]'));
        thirdItem.click();
    }
}