
// Assignment code here

// randomfunc https://net-comber.com/charset.html
// referenced https://youtu.be/duNmhKgtcsI
function getRandomLower() {
  return String.fromCharCode (Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode (Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode (Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
  const special = '!@#$%^&*()-=_+,.<>/'
  return special[Math.floor(Math.random() * special.length)];
}

console.log(getRandomNumber());

// Get references to the #generate element
// referenced: https://www.w3schools.com/jsref/met_win_prompt.asp

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button Works!!")

  var finalPassword = "";

  let length = prompt("How many characters between 8-128 would you like your password to be?");

  const lengthNum = parseInt(length);
  if (lengthNum === null || lengthNum < 8 || lengthNum > 128) {
    alert("password must be between 8-128 characters.  Please try again.")
    return
  };

  let lowercase = confirm("Would you like to include lowercase characters?");

  let uppercase = confirm("Would you like to include uppercase characters?");

  let numbers = confirm("Would you like to include numbers?");

  let special = confirm("Would you like to include special characters?");

  for (let i = 0; i < lengthNum; i++) {
    if (lowercase) {
      finalPassword += getRandomLower()
      if (finalPassword.length === lengthNum){return finalPassword}
    }

    if (uppercase) {
      finalPassword += getRandomUpper()
      if (finalPassword.length === lengthNum){return finalPassword}
    }

    if (numbers) {
      finalPassword += getRandomNumber()
      if (finalPassword.length === lengthNum){return finalPassword}
    }

    if (special) {
      finalPassword += getRandomSpecial()
      if (finalPassword.length === lengthNum){return finalPassword}
    }
  }
     // for alert, referenced: https://stackoverflow.com/questions/69851109/
     if (!special && !numbers && !uppercase && !lowercase)
     alert("At least one character type should be selected.  Please try again!");
     return "your secure password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);