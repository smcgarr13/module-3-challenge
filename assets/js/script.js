// Assignment code here

// Get references to the #generate element
// referenced: https://www.w3schools.com/jsref/met_win_prompt.asp

var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("Button Works!!")

var finalPassword = ""

let length = prompt("How many characters between 8-128 would you like your password to be?");

if (length === null || length < 8 || length > 128) {
  return
};

let lowercase = confirm("Would you like to include lowercase characters?");

let uppercase = confirm("Would you like to include uppercase characters?");

let numbers = confirm("Would you like to include numbers?");

let special = confirm("Would you like to include special characters?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
