// Assignment Code
const generateBtn = document.querySelector("#generate");
let characterLength, lowerCase, upperCase, numeric, specialCharacters


function generatePassword() {
  const passwordType = "";
  if (lowerCase === true) {
    passwordType = "abcdefghijklmnopqrstuvwxyv";
  } else if (upperCase === true) {
    passwordType = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  //   const retVal = "";
  //   for (var i = 0; i < length; i++) {
  //     retVal += generatePassword();
  //   }
  //   return retVal;
}

// Write password to the #password input
// Stores the value of generate Password into the Password variable
function writePassword() {
  characterLength = window.prompt('Please enter the length you wish your password to be');
  // if (characterLength < 8 || characterLength > 128) {
  //   alert('Please enter a password length of at least 8 characters and no more than 128 characters');
  // } else {

  // }
  console.log(characterLength);
  lowerCase = confirm('Click OK if you would like lowercase characters in your password');
  upperCase = confirm('Click OK if you would like uppercase characters in your password');
  numeric = confirm('Click OK if you would like numeric characters in your password');
  specialCharacters = confirm('Click OK if you would like special characters in your password');
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// 1. Prompt the user for the password criteria
//    a. password length 8 < 128
//    b. Lowercase, uppercase, numeric, and/or special characters
// 2. Validate the input
// 3. Generate password based on criteria
// 4 .Display password to the page. 