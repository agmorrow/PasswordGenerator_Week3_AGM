// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
// 1. Prompt the user for the password criteria
  const characterLength = window.prompt('Please enter the length you wish your password to be');
//    a. password length 8 < 128
if (characterLength < 8 || characterLength > 128) {
  alert('Please enter a password length of at least 8 characters and no more than 128 characters')
}
//    b. Lowercase, uppercase, numeric, and/or special characters
  const lowerCase = confirm('Click OK if you would like lowercase characters in your password');
  const upperCase = confirm('Click OK if you would like uppercase characters in your password');
  const numeric = confirm('Click OK if you would like numeric characters in your password');
  const specialCharacters = confirm('Click OK if you would like special characters in your password');
// 2. Validate the input
// 3. Generate password based on criteria
// 4 .Display password to the page. 

  return "Generated password will go here!"
}





// Write password to the #password input
// Stores the value of generate Password into the Password variable
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
