class ProductDetails {
  actions = {
    get quantityClear() {
      return cy.get('span input[id="quantity"]');
    },
    get quantityInput() {
      return cy.get('span input[id="quantity"]');
    },
  };
  inputs = {
    get reviewName() {
      // Fill in name field in review container
      return cy.get(
        'div[class="col-sm-12"] form[id="review-form"] input[id="name"]'
      );
    },
    // Fill in email field in review container
    get reviewEmail() {
      return cy.get(
        'div[class="col-sm-12"] form[id="review-form"] input[id="email"]'
      );
    },
    // Fill in 'Add Review Here!' field in review container
    get reviewMessage() {
      return cy.get(
        'div[class="col-sm-12"] form[id="review-form"] textarea[id="review"]'
      );
    },
  };
  buttons = {
    // Button used to add product to a cart from details page.
    get addToCartButton() {
      return cy.get('span button[class="btn btn-default cart"]');
    },
    // Button used to send review.
    get submitReviewButton() {
      return cy.get('button[class="btn btn-default pull-right"]');
    },
  };
  assertions = {
    // Information that product is visible on a page.
    get productInfo() {
      return cy.get(".product-information");
    },
    // Choosen product page title assertion.
    get successfulProductPageLoad() {
      return cy.title();
    },
    // Assertion that text 'Write your review' is visible on a page.
    get writeYourReviewAssertion() {
      return cy
        .get('div[class="category-tab shop-details-tab"] li[class="active"]')
        .contains("Write Your Review");
    },
    // Assertion that review has been sent successfully
    get successfulSubmittedReview() {
      return cy.contains("Thank you for your review.");
    },
  };
}

export default new ProductDetails();
