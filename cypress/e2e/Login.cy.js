import { loginData } from "../support/data/login-data";

describe("template spec", () => {
  it("Login with correct crudentials", () => {
    cy.login(loginData.userEmail, loginData.userPassword);
    cy.contains("testerLO").should("be.visible");
  });
});
