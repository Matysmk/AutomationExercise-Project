import homePage from "../support/pages/homePage";
import { home } from "../support/data/home-data";

describe("Home Page tests", () => {
  it("Checks if home page is visible.", () => {
    cy.visit("/");
    homePage.assertion.homeTitle.should("eq", home.homeUrl);
  });
  it.only("xx", () => {
    cy.visit("/");
    homePage.assertions.homeTitle.should("eq", home.homeUrl);
    homePage.actions.scroll("bottom");
    homePage.assertions.subscribeField.should("contain", "Subscription");
    homePage.actions.subscribeInput.type("xyz@xyz.com");
    homePage.actions.subscribeButton.click();
    homePage.assertions.subscribeSuccessfulMessage.should("be.visible");
  });
});
