class TestCases {
  nav = {
    // Navigates user to Test Cases page.
    get testCaseButton() {
      return cy.get('ul[class="nav navbar-nav"] a[href="/test_cases"]');
    },
  };
  assertions = {
    // Verifies if text is visible on a page
    get verifyTcPage() {
      return cy.contains(
        "Below is the list of test Cases for you to practice the Automation."
      );
    },
  };
}
export default new TestCases();
