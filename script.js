// Assignment Code
const generateBtn = document.querySelector("#generate");
// let characterType = {
//   lowerCase = "abcdefghijklmnopqrstuvwxyv",
//   upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   numeric = "0123456789",
//   specialCharacters = " !# $%&'()*+,-./:;<=>?@>'",
// };  

// const getCharacters = [
//   function lowerCase() {
//     return characterType.lowerCase[Math.floor(Math.random() * characterType.lowerCase.characterLength)];
//   },  
//   function upperCase() {
//     return characterType.upperCaseCase[Math.floor(Math.random() * characterType.upperCCase.characterLength)];
//   },
//   function numeric() {
//     return characterType.numeric[Math.floor(Math.random() * characterType.numeric.characterLength)];
//   },
//   function specialCharacters() {
//     return characterType.specialCharacters[Math.floor(Math.random() * characterType.specialCharacters.characterLength)];
//   }
// ];
// console.log(getCharacters);


function generatePassword() {



};

// Write password to the #password input
// Stores the value of generate Password into the Password variable
function writePassword() {
  characterLength = window.prompt('Please enter the length you wish your password to be');
  if (characterLength < 8 || characterLength > 128) {
    alert('Please enter a password length of at least 8 characters and no more than 128 characters');
  
  
  }
  lowerCase = confirm('Click OK if you would like lowercase characters in your password');
  upperCase = confirm('Click OK if you would like uppercase characters in your password');
  numeric = confirm('Click OK if you would like numeric characters in your password');
  specialCharacters = confirm('Click OK if you would like special characters in your password');
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// 1. Prompt the user for the password criteria
//    a. password length 8 < 128
//    b. Lowercase, uppercase, numeric, and/or special characters
// 2. Validate the input
// 3. Generate password based on criteria
// 4 .Display password to the page. 