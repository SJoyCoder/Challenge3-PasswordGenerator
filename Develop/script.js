// Assignment code here

var generateBtn = document.querySelector("#generate");
const num = [0,1,2,3,4,5,6,7,8,9];
const sym = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "<", ">", "?", "/"];
const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Get references to the #generate element
let lengthInput = window.prompt("Please enter length of password desired.")
let includeNum = window.confirm("Include numbers?")


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(passwordLength, lowercase, uppercase, numbers, specCharac) {
  
let password = "";

for (let i = 0; i < lengthInput; i++) {
  let randomNum = Math.floor(Math.random()*lowercaseLetters.length);
  let randomLetter = lowercaseLetters[randomNum];
  password += randomLetter;
}



return password;
}


//promt for length, lowercase, uppercase, num, spec

//validate and @ least one character
//passwor generated correctly
//should be in alert or written to page


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
