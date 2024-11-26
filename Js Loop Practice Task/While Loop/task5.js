/*
Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */


let num = 206;
let sum = 0;
while (num <= 311) {
    num += 2;
    console.log(num);
    if (num % 2 === 0) {
        sum = sum + num;
    }
}
console.log("The sum of all even numbers : ", sum);
