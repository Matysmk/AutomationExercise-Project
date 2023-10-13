import { loginData } from "../support/data/login-data";
import SignupLogin from "../support/pages/loginPage";

describe("Login Page test", () => {
  it("Login with correct crudentials", () => {
    cy.login(loginData.userEmail, loginData.userPassword);
    SignupLogin.assertions.successFulLoginAssertion.should("be.visible");
  });
  it("Login with incorrect crudentials", () => {
    cy.login(loginData.incorrectEmail, loginData.userPassword);
    SignupLogin.assertions.incorrectLoginAssertion.should("be.visible");
  });
  it("Logout from user account.", () => {
    cy.login(loginData.userEmail, loginData.userPassword);
    SignupLogin.assertions.successFulLoginAssertion.should("be.visible");
    SignupLogin.logout.logoutButton.click();
    SignupLogin.assertions.logoutAssertion.should("eq", loginData.loginUrl);
  });
  // it.only("aaa", () => {
  //   cy.visit("/");
  //   cy.get('div[class="header-middle"] a[href="/products"]').click();
  //   cy.get('div[class="features_items"] h2[class="title text-center"]').should(
  //     "contain",
  //     "All Products"
  //   );
});
