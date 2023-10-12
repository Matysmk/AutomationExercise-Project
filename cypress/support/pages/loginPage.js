class SignupLogin {
  login = {
    get uEmail() {
      return cy.get('[data-qa="login-email"]');
    },
    get uPassword() {
      return cy.get('[data-qa="login-password"]');
    },
    get loginButton() {
      return cy.get('[data-qa="login-button"]');
    },
  };
  signup = {
    get userName() {
      return cy.get('[data-qa="signup-name"]');
    },
    get regEmail() {
      return cy.get('[data-qa="signup-email"]');
    },
    get signupButton() {
      return cy.get('[data-qa="signup-button"]');
    },
  };
}
export default new SignupLogin();
