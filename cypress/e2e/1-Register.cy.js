import SignupRegister from "../support/pages/registrationPage";
import { registerData } from "../support/data/register-data";
describe("Register Page tests", () => {
  it("Entire registration and delete account process.", () => {
    cy.visit("/login");
    cy.registerAndDeleteAcc("Test123email@randomxxx.com", "Automation Tester");
  });
  it("acc registration", () => {
    cy.visit("/login");
    cy.registration("Test123email@randomxxx.com", "User1995");
  });
  it("Checks if user is able to create account with registered email", () => {
    cy.visit("/login");
    SignupRegister.signupInputs.nameField.type(registerData.userName);
    SignupRegister.signupInputs.emailField.type(registerData.existingUserEmail);
    SignupRegister.signupButtons.signupBut.click();
    SignupRegister.assertions.registeredEmailError.should("be.visible");
  });
});
