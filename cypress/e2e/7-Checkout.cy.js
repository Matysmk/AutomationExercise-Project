import Cart from "../support/pages/cartPage";
import Checkout from "../support/pages/checkoutPage";
import HomePage from "../support/pages/homePage";
import Payment from "../support/pages/paymentPage";
describe("Checkout page tests.", () => {
  it("Verifies address details in checkout page", () => {
    cy.visit("/login");
    cy.registration("Test111emailxx5x@x.com", "UserLO1995");
    cy.addSingleProductViewCart("3");
    Cart.assertions.descriptionAssert.should("not.be.empty");
    Cart.assertions.priceAssert.should("not.be.empty");
    Cart.assertions.quantityAssert.should("not.be.empty");
    Cart.assertions.totalAssert.should("not.be.empty");
    Cart.buttons.CheckoutButton.click();
    Checkout.assertions.deliveryAddress.should("not.be.empty");
    Checkout.assertions.billingAddress.should("not.be.empty");
    cy.deleteAccount();
  });
  it("Downloads Invoice after purchase order", () => {
    cy.addSingleProductViewCart("2");
    Cart.assertions.descriptionAssert.should("not.be.empty");
    Cart.assertions.priceAssert.should("not.be.empty");
    Cart.assertions.quantityAssert.should("not.be.empty");
    Cart.assertions.totalAssert.should("not.be.empty");
    Cart.buttons.CheckoutButton.click();
    Checkout.buttons.regLogButton.click();
    cy.registration("Testemail21225@xd.com", "User1995");
    HomePage.navBar.goToCart.click();
    Cart.buttons.CheckoutButton.click();
    Checkout.assertions.deliveryAddress.should("not.be.empty");
    Checkout.assertions.billingAddress.should("not.be.empty");
    Checkout.inputs.commentOrderArea.type("Type any comment about order here.");
    Checkout.buttons.placeOrderButton.click();
    Payment.assertions.paymentPageCheck.should("be.visible");
    Payment.inputs.nameOnCardInput.type("Test User");
    Payment.inputs.cardNumberInput.type("1234567890");
    Payment.inputs.cvcInput.type("333");
    Payment.inputs.expireMonthInput.type("10");
    Payment.inputs.expireMonthYear.type("2025");
    Payment.buttons.payAndConfirmOrderButton.click();
    Payment.assertions.orderPlacedMessage.should("be.visible");
    Payment.assertions.downloadInvoiceButtonAssertion.should("be.visible");
    Payment.buttons.continueButton.click();
    cy.deleteAccount();
  });
});
