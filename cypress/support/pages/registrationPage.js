class SignupRegister {
  signupInputs = {
    // Find name input
    get nameField() {
      return cy.get('div[class="signup-form"] input[data-qa="signup-name"]');
    },
    // Finds email input
    get emailField() {
      return cy.get('div[class="signup-form"] input[data-qa="signup-email"]');
    },
  };
  signupButtons = {
    // Finds signup button to proceed to registration form.
    get signupBut() {
      return cy.get(
        'div[class="signup-form"] button[class="btn btn-default"][data-qa="signup-button"]'
      );
    },
  };
}
export default new SignupRegister();
