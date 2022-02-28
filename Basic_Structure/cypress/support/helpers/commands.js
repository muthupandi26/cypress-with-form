
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
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.Commands.add('login', (email, password) => {
//   cy.get('input[name="login"]').type(email);
//   cy.get('input[name="password"]').type(password);
//   cy.get('.LoginForm-submitButton').click();
// });

// Cypress.Commands.add('getLatestLoginToken', () =>
//   cy.window().then(window => {
//     console.log('window', window)
//     window.Meteor.call('getLatestLoginToken', (error, user)=> {
//       console.log('user', user)
//     });
//   }),
// );