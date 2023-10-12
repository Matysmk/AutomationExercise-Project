class ContactUs {
  form = {
    get nameInput() {
      return cy.get('input[data-qa="name"][placeholder="Name"]');
    },
    get emailInput() {
      return cy.get('input[data-qa="email"][placeholder="Email"]');
    },
    get subjectInput() {
      return cy.get('input[data-qa="subject"][placeholder="Subject"]');
    },
    get messageInput() {
      return cy.get('[data-qa="message"]');
    },
    chooseFile(file) {
      return cy.get('input[type="file"]').selectFile(file, { force: true });
    },
    get submitButton() {
      return cy.get('input[data-qa="submit-button"]');
    },
    get homeButton() {
      return cy.get(".btn-success");
    },
  };
  assertions = {
    get successAssertionMessage() {
      return cy.contains(
        "Success! Your details have been submitted successfully."
      );
    },
  };
}
export default new ContactUs();
