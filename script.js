// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  const generateBtn = prompt("You clicked the button!");
}
  
  


// 1. Prompt the user for the password criteria
//    a. password length 8 < 128
//    b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input
// 3. Generate password based on criteria




// 4 .Display password to the page. 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
