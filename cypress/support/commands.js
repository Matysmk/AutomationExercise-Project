import SignupLogin from "./pages/loginPage";
import ContactUs from "./pages/contactUsPage";
import TestCases from "./pages/TcPage";
import SignupRegister from "./pages/registrationPage";
import SignupForm from "./pages/registrationFormPage";
import HomePage from "./pages/homePage";
import { home } from "../support/data/home-data";
import ProductsPage from "../support/pages/productPage";
import { registerData } from "./data/register-data";
import Cart from "./pages/cartPage";
import Payment from "./pages/paymentPage";
import Checkout from "./pages/checkoutPage";

Cypress.Commands.add("deleteAccount", () => {
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
  ContactUs.form.nameInput.type(username);
  ContactUs.form.emailInput.type(email);
  ContactUs.form.subjectInput.type(subject);
  ContactUs.form.messageInput.type(message);
  ContactUs.form.chooseFile(uploadFile);
  ContactUs.form.submitButton.click();
  ContactUs.assertions.successAssertionMessage.should("be.visible");
  ContactUs.form.homeButton.click();
});

Cypress.Commands.add("testCasePage", () => {
  cy.visit("/");
  TestCases.nav.testCaseButton.click();
  TestCases.assertions.verifyTcPage.should("be.visible");
});

// Adds single product and goes to a cart.
Cypress.Commands.add("addSingleProductViewCart", (product1) => {
  cy.visit("/products");
  ProductsPage.actions.hoverOverProduct(product1).trigger("mouseover");
  ProductsPage.actions.addToCart(product1).click();
  cy.wait(1000);
  ProductsPage.navigation.addedViewCartLink.click();
});

// Adds product to a cart and continues shopping
Cypress.Commands.add("addSingleProductContinue", (product1) => {
  cy.visit("/products");
  ProductsPage.actions.hoverOverProduct(product1).trigger("mouseover");
  ProductsPage.actions.addToCart(product1).click();
  cy.wait(1000);
  ProductsPage.navigation.continueShoppingButton.click();
});

// Cart assertions.
Cypress.Commands.add("cartAssertions", () => {
  Cart.assertions.descriptionAssert.should("not.be.empty");
  Cart.assertions.priceAssert.should("not.be.empty");
  Cart.assertions.quantityAssert.should("not.be.empty");
  Cart.assertions.totalAssert.should("not.be.empty");
});

// Checkout assertions.
Cypress.Commands.add("checkoutAssertions", () => {
  Checkout.assertions.deliveryAddress.should("not.be.empty");
  Checkout.assertions.billingAddress.should("not.be.empty");
});

// Fills in all payment options and checks assertions.
Cypress.Commands.add("paymentForm", () => {
  Payment.assertions.paymentPageCheck.should("be.visible");
  Payment.inputs.nameOnCardInput.type("Test User");
  Payment.inputs.cardNumberInput.type("1234567890");
  Payment.inputs.cvcInput.type("333");
  Payment.inputs.expireMonthInput.type("10");
  Payment.inputs.expireMonthYear.type("2025");
  Payment.buttons.payAndConfirmOrderButton.click();
  Payment.assertions.orderPlacedMessage.should("be.visible");
  Payment.assertions.downloadInvoiceButtonAssertion.should("be.visible");
  Payment.buttons.continueButton.click();
});

Cypress.Commands.add("registerAndDeleteAcc", (username) => {
  SignupRegister.signupInputs.nameField.type(username);
  SignupRegister.signupInputs.emailField.type(registerData.randomEmail);
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
Cypress.Commands.add("registration", (username) => {
  SignupRegister.signupInputs.nameField.type(username);
  SignupRegister.signupInputs.emailField.type(registerData.randomEmail);
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
});
