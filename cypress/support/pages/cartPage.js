class Cart {
  navigation = {
    get cartNav() {
      return cy.get(
        'ul[class="nav navbar-nav"] i[class="fa fa-shopping-cart"]'
      );
    },
  };
  assertions = {
    get descriptionAssert() {
      return cy.get('tr[id="product-1"] td[class="cart_description"]');
    },
    get priceAssert() {
      return cy.get('tr[id="product-1"] td[class="cart_price"]');
    },
    get quantityAssert() {
      return cy.get('tr[id="product-1"] td[class="cart_quantity"]');
    },
    get totalAssert() {
      return cy.get('tr[id="product-1"] td[class="cart_total"]');
    },
  };
}
export default new Cart();
