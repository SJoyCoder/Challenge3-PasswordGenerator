// Assignment code here

var generateBtn = document.querySelector("#generate");
const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const sym = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "<", ">", "?", "/"];
const num = [0,1,2,3,4,5,6,7,8,9];
let onlyLetters = lowercaseLetters.concat(uppercaseLetters)
let letterSym = onlyLetters.concat(sym)
console.log(onlyLetters)
console.log(letterSym)

// Get references to the #generate element
let lengthInput = window.prompt("Please enter length of password desired.");
if (lengthInput >= 128){
  alert("Password cannot be longer than 128 characters!");
}
let includeLowercase = window.confirm("Include lowercase letters?");
let includeUppercase = window.confirm("Incluce uppercase letters?");
let includeSym = window.confirm("Include symbols?");
let includeNum = window.confirm("Include numbers?");

let passwordObject = {
  length: 0,
  upper: true,
  lower: true,
  symbols: true,
  number:true,
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(passwordLength, lowercase, uppercase, numbers, specCharac) {
  let password = "";
  if (includeLowercase === true){
    for (let i = 0; i < lengthInput; i++) {
      let randomNumber = Math.floor(Math.random()*lowercaseLetters.length);
      let randomLLetter = lowercaseLetters[randomNumber];
      password += randomLLetter;
    }
  }
  
  if (includeUppercase === true){
    for (let i = 0; i < lengthInput; i++) {
      let randomNumber = Math.floor(Math.random()*uppercaseLetters.length);
      let randomULetter = uppercaseLetters[randomNumber];
      password += randomULetter;
    }
  }
  
if (includeLowercase === true && includeUppercase ==true){
    for (let i = 0; i < lengthInput; i++) {
      let randomNumber = Math.floor(Math.random()*onlyLetters.length);
      let randomULetter = onlyLetters[randomNumber];
      password += randomLetters;
  }
}

if (includeSym === true){
  for (let i = 0; i < lengthInput; i++) {
    let randomNumber = Math.floor(Math.random()*sym.length);
    let randomSym = includeSym[randomNumber];
    password += randomSym;
  }
}

if (includeNum === true){
  for (let i = 0; i < lengthInput; i++) {
    let randomNumber = Math.floor(Math.random()*sym.length);
    let randomNum = includeNum[randomNumber];
    password += randomNum;
  }
}

return password;
}


//promt for length, lowercase, uppercase, num, spec

//validate and @ least one character
//passwor generated correctly
//should be in alert or written to page


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)