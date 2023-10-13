class SignupForm {
  // Inputs to fill in registration form
  formInputs = {
    get passwordField() {
      return cy.get(
        'div[class="required form-group"] input[data-qa="password"]'
      );
    },
    get firstName() {
      return cy.get(
        'p[class="required form-group"] input[data-qa="first_name"]'
      );
    },
    get lastName() {
      return cy.get(
        'p[class="required form-group"] input[data-qa="last_name"]'
      );
    },
    get companyName() {
      return cy.get('p[class="form-group"] input[data-qa="company"]');
    },
    get addressField() {
      return cy.get('p[class="required form-group"] input[data-qa="address"]');
    },
    get countrySelect() {
      return cy.get('p[class="required form-group"] select[data-qa="country"]');
    },
    get stateField() {
      return cy.get('p[class="required form-group"] input[data-qa="state"]');
    },
    get cityField() {
      return cy.get('p[class="required form-group"] input[data-qa="city"]');
    },
    get zipcodeField() {
      return cy.get('p[class="required form-group"] input[data-qa="zipcode"]');
    },
    get mobileNumField() {
      return cy.get(
        'p[class="required form-group"] input[data-qa="mobile_number"]'
      );
    },
  };
  // Buttons used while filling in registration form.
  formButtons = {
    // Button used to select "Mr" or "Mrs" gender.
    get genderCheckbox() {
      return cy.get(
        'div[class="radio-inline"] [class="radio"] input[value="Mr"]'
      );
    },
    get newsletterCheckbox() {
      return cy.get('div[class="checker"] input[id="newsletter"]');
    },
    get offersCheckbox() {
      return cy.get('div[class="checker"] input[id="optin"]');
    },
    get createAccButton() {
      return cy.get(
        'div[class="col-sm-4 col-sm-offset-1"] button[class="btn btn-default"]'
      );
    },
    // Navigates us to Logged in page after creating account
    get continueBut() {
      return cy.get('div[class="pull-right"] a[class="btn btn-primary"]');
    },
  };
  // Checks if we are navigated to signup form
  formSelectColumns = {
    get selectDay() {
      return cy.get(
        'div[class="col-xs-4"] select[class="form-control"][data-qa="days"]'
      );
    },
    get selectMonth() {
      return cy.get(
        'div[class="col-xs-4"] select[class="form-control"][data-qa="months"]'
      );
    },
    get selectYear() {
      return cy.get(
        'div[class="col-xs-4"] select[class="form-control"][data-qa="years"]'
      );
    },
  };
  formAssertions = {
    get signupFormAssertion() {
      return cy.get('div[class="login-form"] h2[class="title text-center"]');
    },
    get accCreatedAssertion() {
      return cy.get(
        'div[class="col-sm-9 col-sm-offset-1"] h2[data-qa="account-created"]'
      );
    },
  };
}

export default new SignupForm();
