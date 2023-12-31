import { loginData } from "../support/data/login-data";
import SignupLogin from "../support/pages/loginPage";

describe("Login Page test", () => {
  it("Login with correct crudentials", () => {
    cy.login(loginData.userEmail, loginData.userPassword);
    SignupLogin.assertions.loggedInAsAssertion("testerLO").should("be.visible");
  });
  it("Login with incorrect crudentials", () => {
    cy.login(loginData.incorrectEmail, loginData.userPassword);
    SignupLogin.assertions.incorrectLoginAssertion.should("be.visible");
  });
  it("Logout from user account.", () => {
    cy.login(loginData.userEmail, loginData.userPassword);
    SignupLogin.assertions.loggedInAsAssertion("testerLO").should("be.visible");
    SignupLogin.logout.logoutButton.click();
    SignupLogin.assertions.logoutAssertion.should("eq", loginData.loginUrl);
  });
});
