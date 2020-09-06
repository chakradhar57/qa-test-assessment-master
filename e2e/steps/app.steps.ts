const { Given, When, Then } = require('cucumber');
const { browser } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

const searchFormPO = require('../page-objects/search-form.po');

Given('I navigate to {string}', { timeout: 60 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(5000);
});

When('I search for R2 name', { timeout: 60 * 1000 }, async () => {
    await searchFormPO.input.sendKeys('R2');
    await searchFormPO.searchBtn.click();
    await browser.sleep(5000);
});

Then('I see R2 details', { timeout: 60 * 1000 }, async () => {
    await chai.expect(searchFormPO.firstCharacterName.getAttribute('innerText'))
        .to.eventually.contain('R2');
    await searchFormPO.input.clear();
    await searchFormPO.searchBtn.click();
    await browser.sleep(5000);
});