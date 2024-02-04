import { registerData } from "../support/data/register-data";
import Cart from "../support/pages/cartPage";
import Checkout from "../support/pages/checkoutPage";
import HomePage from "../support/pages/homePage";
import Payment from "../support/pages/paymentPage";
describe("Checkout page tests.", () => {
  it("Verifies address details in checkout page", () => {
    cy.visit("/login");
    cy.registration(registerData.randomEmail, "UserLO1995");
    cy.addSingleProductViewCart("3");
    cy.cartAssertions();
    Cart.buttons.CheckoutButton.click();
    Checkout.assertions.deliveryAddress.should("not.be.empty");
    Checkout.assertions.billingAddress.should("not.be.empty");
    cy.deleteAccount();
  });
  it("Downloads Invoice after purchase order", () => {
    cy.addSingleProductViewCart("2");
    cy.cartAssertions();
    Cart.buttons.CheckoutButton.click();
    Checkout.buttons.regLogButton.click();
    cy.registration("Testemail23x5@xd.com", "User1995");
    HomePage.navBar.goToCart.click();
    Cart.buttons.CheckoutButton.click();
    Checkout.assertions.deliveryAddress.should("not.be.empty");
    Checkout.assertions.billingAddress.should("not.be.empty");
    Checkout.inputs.commentOrderArea.type("Type any comment about order here.");
    Checkout.buttons.placeOrderButton.click();
    cy.paymentForm();
    cy.deleteAccount();
  });
});
