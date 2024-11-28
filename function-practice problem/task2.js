/*Take a number if the number is odd multiply it by 2 and return the result.
 If the number is even divide it by two and return the result.*/

function numbers(num1) {

    if (num1 % 2 === 0) {

        return num1 / 2;
    }
    else {

        return num1 * 2;
    }
}
const num1 = 5;
console.log(`result for ${num1}: `, numbers(num1));
const num2 = 6;
console.log(`result for ${num2}: `, numbers(num2));
