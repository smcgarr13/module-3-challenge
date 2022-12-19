// Assignment code here

// randomfunc https://net-comber.com/charset.html
// referenced https://www.google.com/search?q=how+to+write+javascript+for+password+generator&sxsrf=ALiCzsY5OERP31qboygu5Qucw3SLU6dUmQ%3A1671247849297&ei=6TedY5zdEe2pptQPiLStgAQ&ved=0ahUKEwjc9Y2z2__7AhXtlIkEHQhaC0AQ4dUDCA8&uact=5&oq=how+to+write+javascript+for+password+generator&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzoKCAAQRxDWBBCwAzoHCCMQsAIQJ0oECEEYAEoECEYYAFDdBljPDWCAFWgBcAF4AIABWogBnwGSAQEymAEAoAEByAEIwAEB&sclient=gws-wiz-serp#fpstate=ive&vld=cid:4ccfc666,vid:duNmhKgtcsI
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

var finalPassword = ""

let length = prompt("How many characters between 8-128 would you like your password to be?");

if (length === null || length < 8 || length > 128) {
return
};

let lowercase = confirm("Would you like to include lowercase characters?");

let uppercase = confirm("Would you like to include uppercase characters?");

let numbers = confirm("Would you like to include numbers?");

let special = confirm("Would you like to include special characters?");

for (let i = 0; i < length;) {
if (lowercase) {
  finalPassword += getRandomLower()
 i++ 
 if (i === length) {
  return
 }
}

if (uppercase) {
  finalPassword += getRandomUpper()
  i++ 
  if (i === length) {
   return
  }
}

if (numbers) {
  finalPassword += getRandomNumber()
  i++ 
  if (i === length) {
   return
  }
}

if (special) {
  finalPassword += getRandomSpecial()
  i++ 
  if (i === length) {
   return
  }
}
}
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);