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
  assertions = {
    get registeredEmailError() {
      return cy
        .get('form[action="/signup"] p')
        .contains("Email Address already exist!");
    },
  };
}
export default new SignupRegister();
