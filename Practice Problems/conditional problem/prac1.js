/* Qs1.: Get user to input a number 
using prompt("enter a number :").
check if the number is a multiple of 5 or not */

let number = prompt("Enter a number : ");
if (number % 5 === 0) {
    console.log(number, "is multiple of 5");
}
else {
    console.log(number, "is Not multiple of 5");
}