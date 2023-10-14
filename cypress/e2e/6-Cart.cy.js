import ProductsPage from "../support/pages/productPage";
import Cart from "../support/pages/cartPage";

describe("Cart Page tests", () => {
  it("Adds products to cart.", () => {
    cy.visit("/products");
    ProductsPage.actions.hoverOverProduct("2").trigger("mouseover");
    ProductsPage.actions.addToCart("2").click();
    cy.wait(1000);
    ProductsPage.navigation.continueShoppingButton.click();
    ProductsPage.actions.hoverOverProduct("3").trigger("mouseover");
    ProductsPage.actions.addToCart("3").click();
    cy.wait(1000);
    ProductsPage.navigation.addedViewCartLink.click();
    Cart.assertions.descriptionAssert.should("not.be.empty");
    Cart.assertions.priceAssert.should("not.be.empty");
    Cart.assertions.quantityAssert.should("not.be.empty");
    Cart.assertions.totalAssert.should("not.be.empty");
  });
});
