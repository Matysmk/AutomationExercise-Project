export const registerData = {
  existingUserEmail: "testuser123@xyz.com",
  existingUserName: "test1234",
  pageTitle: "Automation Exercise",
  userName: "testerLO",
  emailAddress: "xxtest@gmail1245.com",
  password: "tester12",
  birthDay: "21",
  birthMonth: "3",
  birthYear: "1995",
  fname: "Tester",
  sname: "Testerski",
  company: "Intermebel",
  userStreet: "Testerska 12",
  state: "California",
  country: "United States",
  userCity: "Los Angeles",
  userZipcode: "190912",
  mobileNumber: "0700888123",
  textFragment: "ll QA engineers can use this website for automation practice",
  errorEmailCommunicate: "Address already exist!",
  loginAssertion: "Login to your account",

  randomEmail: generateRandomEmail(),
};
export function generateRandomEmail() {
  const domains = ["gmail.com", "yahoo.com", "hotmail.com", "example.com"];
  const usernameLength = Math.floor(Math.random() * 10) + 5; // Random username length between 5 and 14 characters
  let username = "";

  // Generate a random username
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < usernameLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    username += characters[randomIndex];
  }

  // Choose a random domain
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];

  // Create the email address
  const email = username + "@" + randomDomain;

  return email;
}
