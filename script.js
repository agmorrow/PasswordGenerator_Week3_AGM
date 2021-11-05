// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  const generateBtn = prompt("How many characters would you like your password to contain?");
  if (generateBtn < 8 || generateBtn > 128) {
    alert("Please choose a password that is more than 8 characters but less than 128");
  } else {
    const lowerCase = confirm("Would you like to have a lowercase characters in your password?"); 
    
  }
 
}
  




const upperCase = confirm("would you like to have uppercase characters in your password?");
if (upperCase == true) {

}

//return "generatePassword will go here!"



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
