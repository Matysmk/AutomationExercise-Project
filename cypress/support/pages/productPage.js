class ProductsPage {
  navigation = {
    // Navigates us to Products Page
    get productNavButton() {
      return cy.get('div[class="header-middle"] a[href="/products"]');
    },
    // In products page clicks on 'View Product'
    get viewProductButton() {
      return cy.get('div[class="choose"] a[href="/product_details/2"]');
    },
    get addedViewCartLink() {
      return cy.get('p[class="text-center"] a[href="/view_cart"]');
    },
    // this button is used to continue shopping after adding a product.
    get continueShoppingButton() {
      return cy.get(
        'div[class="modal-footer"] button[class="btn btn-success close-modal btn-block"]'
      );
    },
  };
  actions = {
    hoverOverProduct(product) {
      return cy.get(
        `div[class="productinfo text-center"] a[data-product-id="${product}"]`
      );
    },
    addToCart(product) {
      return cy.get(
        `div[class="productinfo text-center"] a[data-product-id="${product}"][class="btn btn-default add-to-cart"]`
      );
    },

    // This button is used to view a cart after adding a product.
  };
  searchBar = {
    // Finds search input bar on Products page
    get searchInputBar() {
      return cy.get(
        'input[id="search_product"][class="form-control input-lg"]'
      );
    },
    // Presses search input button
    get searchInputButton() {
      return cy.get(
        'button[id="submit_search"][class="btn btn-default btn-lg"]'
      );
    },
  };

  assertions = {
    // 'All products' text is visible on a page.
    get allProductText() {
      return cy.get(
        'div[class="features_items"] h2[class="title text-center"]'
      );
    },
    // Information that product is visible on a page.
    get productInfo() {
      return cy.get(".product-information");
    },
    // Choosen product page title assertion.
    get successfulProductPageLoad() {
      return cy.title();
    },
    // Searched Product text is visible after using search bar input to find products.
    get searchedProductText() {
      return cy.get(
        'div[class="features_items"] h2[class="title text-center"]'
      );
    },
    // Checks if searched products are visible on a page and include searched products.
    get searchedProduct() {
      return cy.get('div[class="features_items"]');
    },
  };
}

export default new ProductsPage();
