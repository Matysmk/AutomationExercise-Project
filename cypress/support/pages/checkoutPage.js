class Checkout {
  inputs = {
    // Here user can comment his order
    get commentOrderArea() {
      return cy.get('div[class="form-group"] textarea[class="form-control"]');
    },
  };
  buttons = {
    // used when user is logged out and want to proceed to checkout
    get regLogButton() {
      return cy.get('p[class="text-center"] a[href="/login"]');
    },
    get placeOrderButton() {
      return cy.get('div a[class="btn btn-default check_out"]');
    },
  };
  assertions = {
    get deliveryAddress() {
      return cy.get('ul[class="address item box"]');
    },
    get billingAddress() {
      return cy.get('ul[class="address alternate_item box"]');
    },
  };
}
export default new Checkout();
