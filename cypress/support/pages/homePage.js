class HomePage {
  actions = {
    scroll(value) {
      return cy.scrollTo(value);
    },
    get subscribeInput() {
      return cy.get('div[class="single-widget"] input[id="susbscribe_email"]');
    },
    get subscribeButton() {
      return cy.get(
        'div[class="single-widget"] button[id="subscribe"][class="btn btn-default"]'
      );
    },
    get deleteAccount() {
      return cy.get('ul[class="nav navbar-nav"] i[class="fa fa-trash-o"]');
    },
  };
  navBar = {
    get goToCart() {
      return cy.get(
        'ul[class="nav navbar-nav"] i[class="fa fa-shopping-cart"]'
      );
    },
  };

  assertions = {
    get homeTitle() {
      return cy.url();
    },
    get subscribeField() {
      return cy.get(
        'div[class="col-sm-3 col-sm-offset-1"] div[class="single-widget"] h2'
      );
    },
    get subscribeSuccessfulMessage() {
      return cy.contains("You have been successfully subscribed!");
    },
    get deletedAccountAssertion() {
      return cy.get(
        'div[class="col-sm-9 col-sm-offset-1"] h2[data-qa="account-deleted"]'
      );
    },
  };
}

export default new HomePage();
