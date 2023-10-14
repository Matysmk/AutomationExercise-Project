class Payment {
  inputs = {
    get nameOnCardInput() {
      return cy.get('div[class="col-md-4"] input[data-qa="name-on-card"]');
    },
    get cardNumberInput() {
      return cy.get('div[class="col-md-4"] input[data-qa="card-number"]');
    },
    get cvcInput() {
      return cy.get('div[class="col-md-4"] input[data-qa="cvc"]');
    },
    get expireMonthInput() {
      return cy.get('div[class="col-md-4"] input[data-qa="expiry-month"]');
    },
    get expireMonthYear() {
      return cy.get('div[class="col-md-4"] input[data-qa="expiry-year"]');
    },
  };
  buttons = {
    // button used to confirm order
    get payAndConfirmOrderButton() {
      return cy.get('div[class="form-row"] button[data-qa="pay-button"]');
    },
    get continueButton() {
      return cy.get('div[class="pull-right"] a[data-qa="continue-button"]');
    },
  };
  assertions = {
    // Checks if we are on payment page.
    get paymentPageCheck() {
      return cy.contains("Payment");
    },
    get orderPlacedMessage() {
      return cy.get('h2[class="title text-center"]').contains("Order Placed!");
    },
    get downloadInvoiceButtonAssertion() {
      return cy.get(
        'div[class="col-sm-9 col-sm-offset-1"] a[class="btn btn-default check_out"]'
      );
    },
  };
}

export default new Payment();
