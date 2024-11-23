/* Qs2. Create a game where you start with any random 
game number. ask the user to keep 
guessing the game number 
until the user enters correct value*/

let gameNum = 30;
let userNum = prompt("guess the game number : ");
while (userNum != gameNum) {
    userNum = prompt("You Entered wrong number : ");
}
console.log("Congratulations, you entered the right number");