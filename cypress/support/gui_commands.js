/// <reference types="Cypress" />

Cypress.Commands.add('login', () => {
    cy.visit('users/sign_in')

    cy.get('[data-qa-selector="login_field"]').type(Cypress.env('user_name'))
    cy.get('#user_password').type(Cypress.env('user_password'))
    cy.get('[data-qa-selector="sign_in_button"]').click()
})