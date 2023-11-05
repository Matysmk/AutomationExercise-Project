import ProductPage from "../support/pages/productPage";
import ProductDetails from "../support/pages/productDetailsPage";
import HomePage from "../support/pages/homePage";
describe("Products page tests.", () => {
  it("Verify All Products and product detail page", () => {
    cy.visit("/");
    HomePage.navBar.goToProducts.click();
    ProductPage.assertions.allProductText.should("contain", "All Products");
    ProductPage.navigation.viewProductButton("2").click();
    ProductDetails.assertions.successfulProductPageLoad.should(
      "include",
      "Automation Exercise - Product Details"
    );
    ProductDetails.assertions.productInfo.should("be.visible");
  });
  it("Search for a product using Search Bar Input", () => {
    cy.visit("/");
    HomePage.navBar.goToProducts.click();
    ProductPage.assertions.allProductText.should("contain", "All Products");
    ProductPage.searchBar.searchInputBar.type("Dress");
    ProductPage.searchBar.searchInputButton.click();
    ProductPage.assertions.searchedProductText.should(
      "contain",
      "Searched Products"
    );
    ProductPage.assertions.searchedProduct.should("contain", "Dress");
  });
  it("Views Category Products", () => {
    cy.visit("/");
    HomePage.navBar.goToProducts.click();
    ProductPage.sideBar.getCategory("#Women").click();
    ProductPage.sideBar.getsubCategory("2").click();
    ProductPage.assertions.categoryAssertion("Women - Tops Products");
    ProductPage.sideBar.getCategory("#Men").click();
    ProductPage.sideBar.getsubCategory("3").click();
    ProductPage.assertions.categoryAssertion("Men - Tshirts Products");
  });
  it("View & Cart Brand Products", () => {
    cy.visit("/");
    HomePage.navBar.goToProducts.click();
    ProductPage.sideBar.getBrand("Polo").click();
    ProductPage.assertions
      .brandAssertion("Brand - Polo Products")
      .should("be.visible");
    ProductPage.sideBar.getBrand("Babyhug").click();
    ProductPage.assertions
      .brandAssertion("Brand - Babyhug Products")
      .should("be.visible");
  });
  it("Add review on product", () => {
    cy.visit("/");
    HomePage.navBar.goToProducts.click();
    ProductPage.navigation.viewProductButton("2").click();
    ProductDetails.assertions.writeYourReviewAssertion.should("be.visible");
    ProductDetails.inputs.reviewName.type("Test User");
    ProductDetails.inputs.reviewEmail.type("testemail@xyz.com");
    ProductDetails.inputs.reviewMessage.type("Sample review text");
    ProductDetails.buttons.submitReviewButton.click();
    ProductDetails.assertions.successfulSubmittedReview.should("be.visible");
  });
});
