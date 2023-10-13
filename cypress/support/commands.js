import SignupLogin from "./pages/loginPage";
import contactUsPage from "./pages/contactUsPage";
import TestCases from "./pages/TcPage";
import SignupRegister from "./pages/registrationPage";
import SignupForm from "./pages/registrationFormPage";
import HomePage from "./pages/homePage";
import { home } from "../support/data/home-data";

Cypress.Commands.add("registration", (email, username) => {
  cy.visit("/login");
  SignupRegister.signupInputs.nameField.type(username);
  SignupRegister.signupInputs.emailField.type(email);
  SignupRegister.signupButtons.signupBut.click();
  SignupForm.formAssertions.signupFormAssertion.should(
    "contain",
    "Enter Account Information"
  );
  SignupForm.formButtons.genderCheckbox.check();
  SignupForm.formInputs.passwordField.type("testPassword");
  SignupForm.formSelectColumns.selectDay.select("15");
  SignupForm.formSelectColumns.selectMonth.select("1");
  SignupForm.formSelectColumns.selectYear.select("1995");
  SignupForm.formButtons.newsletterCheckbox.check();
  SignupForm.formButtons.offersCheckbox.check();
  SignupForm.formInputs.firstName.type("Peter");
  SignupForm.formInputs.lastName.type("Parker");
  SignupForm.formInputs.companyName.type("Oscorp Industries");
  SignupForm.formInputs.addressField.type("Groove Street 15");
  SignupForm.formInputs.countrySelect.select("United States");
  SignupForm.formInputs.stateField.type("New York");
  SignupForm.formInputs.cityField.type("New York City");
  SignupForm.formInputs.zipcodeField.type("00-0001");
  SignupForm.formInputs.mobileNumField.type("777555222");
  SignupForm.formButtons.createAccButton.click();
  SignupForm.formAssertions.accCreatedAssertion.should("be.visible");
  SignupForm.formButtons.continueBut.click();
  SignupLogin.assertions.loggedInAsAssertion(username).should("be.visible");
  HomePage.actions.deleteAccount.click();
  HomePage.assertions.deletedAccountAssertion.should("be.visible");
  SignupForm.formButtons.continueBut.click();
  HomePage.assertions.homeTitle.should("eq", home.homeUrl);
});

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
