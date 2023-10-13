describe("Register Page tests", () => {
  it("Entire registration and delete account process.", () => {
    cy.registration("testemail123@xd.com", "Automation Tester");
  });
});
