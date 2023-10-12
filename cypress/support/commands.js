import SignupLogin from "./pages/loginPage";

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  SignupLogin.login.uEmail.type(email);
  SignupLogin.login.uPassword.type(password);
  SignupLogin.login.loginButton.click();
});

Cypress.Commands.add("Register and delete account",)

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
