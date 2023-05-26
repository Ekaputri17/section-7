const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I open login page', function () {
    cy.visit('http://zero.webappsecurity.com/login.html')
})

When('I submit login', function () {
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.contains('Sign in').click()
})

Then('I should see homepage', function () {
    cy.get('#account_summary_tab > a').should('be.visible')
})