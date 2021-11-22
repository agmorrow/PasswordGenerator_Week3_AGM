// Assignment Code
const generateBtn = document.querySelector("#generate");
let characterType = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  specialCharacters: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
};


function generatePassword() {
  // 1. Prompt the user for the password criteria
  var passwordCriteria = "";
  //    a. password length between 8 && 128
  var characterLength = prompt("Enter a number from 8 to 128 for password length.");
  //    b. Lowercase, uppercase, numeric, and/or special characters
  var lowerCase = confirm("Click OK if you would you like to use lowercase letters?");
  if (lowerCase) {
    passwordCriteria += characterType.lowerCase;
  };

  var upperCase = confirm("Click OK if you would you like to use UPPERCASE letters?");
  if (upperCase) {
    passwordCriteria += characterType.upperCase;
  };

  var specialCharacters = confirm("Click OK if you would you like to use special characters?");
  if (specialCharacters) {
    passwordCriteria += characterType.specialCharacters;
  };

  var numeric = confirm("Click OK if you would you like to use numbers?");
  if (numeric) {
    passwordCriteria += characterType.numeric;
  };
  // 2. Validate the input
  // 3. Generate password based on criteria
  var securePassword = "";
  for (let i = 0; i < characterLength; i++) {
    securePassword += passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)]
  }

  // 4 .Display password to the page. 
  return securePassword;
}

// Write password to the #password input
// Stores the value of generate Password into the Password variable
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);