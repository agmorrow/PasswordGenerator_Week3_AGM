// Assignment Code
const generateBtn = document.querySelector("#generate");
let characterType = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  specialCharacters: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
};

  
  

function generatePassword() {
  var passwordCharSet = "";

  var characterLength = window.prompt("Enter a number from 8 to 128 for password length.");

  var lowerCase = window.confirm("Would you like to use lowercase letters?");
  if (lowerCase) {
    passwordCharSet += characterType.lowerCase;
  };

  var upperCase = window.confirm("Would you like to use UPPERCASE letters?");
  if (upperCase) {
    passwordCharSet += characterType.upperCase;
  };

  var specialCharacters = window.confirm("Would you like to use symbols?");
  if (specialCharacters) {
    passwordCharSet += characterType.specialCharacters;
  };

  var numeric = window.confirm("Would you like to use numbers?");
  if (numeric) {
    passwordCharSet += characterType.numeric;
  };
  var password = "";
  for (let i = 0; i < characterLength; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}

console.log(generatePassword());




// Write password to the #password input
// Stores the value of generate Password into the Password variable
function writePassword() {
 
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