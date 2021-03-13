/// <reference types="Cypress" />

Cypress.Commands.add('login', () => {
    cy.visit('users/sign_in')

    cy.get('[data-qa-selector="login_field"]').type(Cypress.env('user_name'))
    cy.get('#user_password').type(Cypress.env('user_password'))
    cy.get('[data-qa-selector="sign_in_button"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click()
    cy.get('[data-qa-selector="sign_out_link"]').click()
})

Cypress.Commands.add('gui_createProject', project => {

    cy.visit('projects/new')

    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.descirpiton)
    cy.get('.qa-initialize-with-readme-checkbox').check()    
    cy.contains('Create project').click()
})