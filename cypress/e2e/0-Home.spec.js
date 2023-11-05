import HomePage from "../support/pages/homePage";
import { home } from "../support/data/home-data";

describe("Home Page tests", () => {
  it("Checks if home page is visible.", () => {
    cy.visit("/");
    HomePage.assertions.homeTitle.should("eq", home.homeUrl);
  });
  it("Subscribes page.", () => {
    cy.visit("/");
    HomePage.assertions.homeTitle.should("eq", home.homeUrl);
    HomePage.actions.scroll("bottom");
    HomePage.assertions.subscribeField.should("contain", "Subscription");
    HomePage.actions.subscribeInput.type("xyz@xyz.com");
    HomePage.actions.subscribeButton.click();
    HomePage.assertions.subscribeSuccessfulMessage.should("be.visible");
  });
});
