/* Qs1. Prompt the user to enter their full name.
 Generate a username for them based on the input.
 Start username with @, followed by their full name
 and ending with the fullname length.*/

// eg. user name = "amitsarkar",username should be "@amitsarkar1"

let fullName = prompt("Enter Your Fullname Without Spaces");
let userName = "@" + fullName + fullName.length;
console.log(userName);
// console.log(fullName);


