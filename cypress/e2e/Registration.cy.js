describe("template spec", () => {
  const uEmail = "testuser123@xyz.com";
  const uPassword = "test1234";
  it("passes", () => {
    cy.login(uEmail, uPassword);
    cy.contains("testerLO").should("be.visible");
  });
});
