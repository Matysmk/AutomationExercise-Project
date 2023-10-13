import { home } from "../support/data/home-data";
import HomePage from "../support/pages/homePage";

describe("Contact us", () => {
  it("Filling in contact form.", () => {
    cy.ContactUsForm("name", "email@xyz.pl", "subject", "message");
    HomePage.assertions.homeTitle.should("eq", home.homeUrl);
  });
});
