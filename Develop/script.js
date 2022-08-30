// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("something happened")
  let passwordLength = prompt("Password Length?");
  if (passwordLength <= 128){
    //continue
  }else{
    //try again
  }
  let lowercase = prompt("Lowercase Letters?");
  if (lowercase == true){
    //include lowercase
  }else{
    //don't include lowercase
  }
  let uppercase = prompt("Uppercase Letters?");
  if (uppercase == true){
    //include uppercase
  }else{
    //don't include uppercase
  }
  let numbers = prompt("Numbers?");
  if (numbers == true){
    //include numbers
  }else{
    //don't include numbers
  }
  let specCharac = prompt("Special Characters?");
  if (specCharac == true){
    //include special characters
  }else{
    //don't
  }
 
  return "password"
}
//promt for length, lowercase, uppercase, num, spec
//validate and @ least one character
//passwor generated correctly
//should be in alert or written to page

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
