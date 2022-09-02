// Assignment code here

var generateBtn = document.querySelector("#generate");
var startingArray = [];
var finalPassword = document.querySelector("#password");
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "<", ">", "?", "/"];
var num = [0,1,2,3,4,5,6,7,8,9];



// Get references to the #generate element


// let passwordObject = {
//   length: 0,
//   upper: true,
//   lower: true,
//   symbols: true,
//   number:true,
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNum, includeSym) {
  let password = "";
  
  var passwordLength = prompt("Please enter length of password desired.")
  passwordLength= parseInt(passwordLength)
    if (passwordLength >= 128){
      alert("Password must be less than 128 characters"); 
      prompt("Please enter password length less than 128 characters.");
    }

  var includeLowercase = confirm("Do you want to include lowercase?")
    if(includeLowercase === true){
     startingArray += startingArray.concat(lowercaseLetters);

    }
  
  
var includeUppercase = confirm("Do you want to include uppercase letters?")
  if(includeUppercase === true){
    startingArray += startingArray.concat(uppercaseLetters);
  }

var includeSym = confirm("Do you want to include symbols?")
  if (includeSym === true){
   startingArray += startingArray.concat(sym);
}

var includeNum = confirm("Do you want to include numbers?")
  if (includeNum === true){
   startingArray += startingArray.concat(num);

  }


  
  for (let i = 0; i < passwordLength; i++) {
  let randomNumber = Math.floor(Math.random()*startingArray.length);
  let randomNum = startingArray[randomNumber];
  password += randomNum;
}
    
return password;
}
console.log(finalPassword); 
finalPassword.innerHTML.password;
//promt for length, lowercase, uppercase, num, spec √

//validate and @ least one character
//passwor generated correctly
//should be in alert or written to page


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword)