import Cart from "../support/pages/cartPage";
import ProductsPage from "../support/pages/productPage";
import ProductsDetails from "../support/pages/productDetailsPage";

describe("Cart Page tests", () => {
  it("Adds products to cart.", () => {
    cy.addSingleProductContinue("2");
    cy.addSingleProductViewCart("3");
    Cart.assertions.descriptionAssert.should("not.be.empty");
    Cart.assertions.priceAssert.should("not.be.empty");
    Cart.assertions.quantityAssert.should("not.be.empty");
    Cart.assertions.totalAssert.should("not.be.empty");
  });
  it("Verifies Product quantity in Cart", () => {
    cy.visit("/");
    ProductsPage.navigation.productNavButton.click();
    ProductsPage.assertions.allProductText.should("contain", "All Products");
    ProductsPage.navigation.viewProductButton("3").click();
    ProductsDetails.assertions.successfulProductPageLoad.should(
      "include",
      "Automation Exercise - Product Details"
    );
    ProductsDetails.actions.quantityClear.clear();
    ProductsDetails.actions.quantityInput.type("4");
    ProductsDetails.buttons.addToCartButton.click();
    ProductsPage.navigation.addedViewCartLink.click();
    Cart.assertions.quantityCountAssert("3", "4").should("be.visible");
  });
  it("Removes product from a cart.", () => {
    cy.addSingleProductContinue("2");
    cy.addSingleProductViewCart("3");
    Cart.assertions.productVisibility("2");
    Cart.assertions.productVisibility("3");
    Cart.buttons.deleteProductButton("3").click();
    Cart.assertions.productVisibility("3").should("not.exist");
  });
});
