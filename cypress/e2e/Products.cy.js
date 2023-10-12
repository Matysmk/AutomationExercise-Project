import productPage from "../support/pages/productPage";
describe("Products page tests.", () => {
  it("Verify All Products and product detail page", () => {
    cy.visit("/");
    productPage.navigation.productNavButton.click();
    productPage.assertions.allProductText.should("contain", "All Products");
    productPage.navigation.viewProductButton.click();
    productPage.assertions.successfulProductPageLoad.should(
      "include",
      "Automation Exercise - Product Details"
    );
    productPage.assertions.productInfo.should("be.visible");
  });
  it("Search for a product using Search Bar Input", () => {
    const input = "Dress";
    cy.visit("/");
    productPage.navigation.productNavButton.click();
    productPage.assertions.allProductText.should("contain", "All Products");
    productPage.searchBar.searchInputBar.type(input);
    productPage.searchBar.searchInputButton.click();
    productPage.assertions.searchedProductText.should(
      "contain",
      "Searched Products"
    );
    productPage.assertions.searchedProduct(input);
  });
});
