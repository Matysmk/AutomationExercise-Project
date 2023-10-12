class HomePage {
  assertion = {
    get homeTitle() {
      return cy.url();
    },
  };
}

export default new HomePage();
