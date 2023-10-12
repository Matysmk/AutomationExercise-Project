import { home } from "../support/data/home-data";
import homePage from "../support/pages/homePage";

describe("Contact us", () => {
  it("", () => {
    cy.ContactUsForm("name", "email@xyz.pl", "subject", "message");
    homePage.assertion.homeTitle.should("eq", home.homeUrl);
  });
});
