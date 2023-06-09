import LoginPage from './login.page';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I open login page', function () {
    LoginPage.visit();
})

When('I submit login', function () {
    LoginPage.fillUsername('username');
    LoginPage.fillPassword('password');
    LoginPage.signIn();
})

Then('I should see homepage', function () {
    cy.get('#account_summary_tab > a').should('be.visible')
})