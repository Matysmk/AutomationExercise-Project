class Cart {
  buttons = {
    // Removes product from a cart by product id
    deleteProductButton(value) {
      return cy.get(
        `td[class="cart_delete"] a[class="cart_quantity_delete"][data-product-id="${value}"]`
      );
    },
    get CheckoutButton() {
      return cy.get(
        'div[class="col-sm-6"] a[class="btn btn-default check_out"]'
      );
    },
  };
  // checks if product is visible in a cart.
  assertions = {
    productVisibility(productNum) {
      return cy.get(`tbody tr[id="product-${productNum}"]`);
    },
    // checks if description field is visible in a cart.
    get descriptionAssert() {
      return cy.get('tr[id="product-1"] td[class="cart_description"]');
    },
    // checks if price field is visible in a cart.
    get priceAssert() {
      return cy.get('tr[id="product-1"] td[class="cart_price"]');
    },
    // checks if quantity field is visible in a cart.
    get quantityAssert() {
      return cy.get('tr[id="product-1"] td[class="cart_quantity"]');
    },
    // Checks if quantity of orderer product is correct.
    quantityCountAssert(productNum, quantityValue) {
      return cy
        .get(
          `tr[id="product-${productNum}"] td[class="cart_quantity"] button[class="disabled"]`
        )
        .contains(quantityValue);
    },
    // checks if total price field is visible in a cart.
    get totalAssert() {
      return cy.get('tr[id="product-1"] td[class="cart_total"]');
    },
  };
}
export default new Cart();
