import SignupLogin from "./pages/loginPage";
import contactUsPage from "./pages/contactUsPage";
import TestCases from "./pages/TcPage";

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  SignupLogin.login.uEmail.type(email);
  SignupLogin.login.uPassword.type(password);
  SignupLogin.login.loginButton.click();
});

Cypress.Commands.add("ContactUsForm", (username, email, subject, message) => {
  const uploadFile = "cypress/fixtures/bananacat.jpg";
  cy.visit("/contact_us");
  contactUsPage.form.nameInput.type(username);
  contactUsPage.form.emailInput.type(email);
  contactUsPage.form.subjectInput.type(subject);
  contactUsPage.form.messageInput.type(message);
  contactUsPage.form.chooseFile(uploadFile);
  contactUsPage.form.submitButton.click();
  contactUsPage.assertions.successAssertionMessage.should("be.visible");
  contactUsPage.form.homeButton.click();
});

Cypress.Commands.add("testCasePage", () => {
  cy.visit("/");
  TestCases.nav.testCaseButton.click();
  TestCases.assertions.verifyTcPage.should("be.visible");
});

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
