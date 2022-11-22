// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', ({ username, password }) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        failOnStatusCode: false,
        body: {
            username,
            password
        }
    }).then(response => {
        if (response.body.jwt === undefined) {
            cy.visit('http://localhost:3000')

        } else {
            window.sessionStorage.setItem(
                'jwt', response.body.jwt || null
            )
            cy.visit('http://localhost:3000')
        }

    })


})

Cypress.Commands.add('clearSessionStorage', () => {
    cy.window().then((win) => {
        win.sessionStorage.removeItem('jwt')
        cy.visit('http://localhost:3000')
    })

})

Cypress.Commands.add('addFav', ({gifId}) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/api/favs',
        body: {
            id: gifId,
            jwt: sessionStorage.getItem('jwt')
        }
    })
    cy.visit('http://localhost:3000')
})

Cypress.Commands.add('deleteFav', ({gifId}) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/api/delete-favs',
        headers: {
            'Authentication': sessionStorage.getItem('jwt')
        },
        body:{
            id: gifId
        } 
    })
    cy.visit('http://localhost:3000')

})
