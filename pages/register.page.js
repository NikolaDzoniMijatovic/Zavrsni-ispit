"use strict";

const { By, Key, until } = require("selenium-webdriver");

module.exports = class RegisterPage {
    #driver;

    constructor(webdriver) {
        this.#driver = webdriver;
    }

    getRegisterButton() {
        return this.#driver.findElement(By.name('register'));
    }

    getRegisterButtonValue() {
        return this.getRegisterButton().getAttribute('value');
    }

    getInputFirstName() {
        return this.#driver.findElement(By.name('firstname'));   
    }

    getInputLastName() {
        return this.#driver.findElement(By.name('lastname'));
    }

    getInputEmail() {
        return this.#driver.findElement(By.name('email'));
    }

    getInputUserName() {
        return this.#driver.findElement(By.name('username'));
    }

    getInputPassword() {
        return this.#driver.findElement(By.name('password'));
    }

    getInputPasswordConfirmation() {
        return this.#driver.findElement(By.name('passwordAgain'));
    }
}