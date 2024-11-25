/*** 
Qs.2:
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const height = 166;
const weight = 18.5;

const BMI = weight / (height) ^ 2;
if (BMI > 18.5) {
    console.log("Your Underweight");
}
else {
    if (BMI > 18.5 && BMI <= 24.9) {
        console.log("Your Normal");
    }
    else {

        if (BMI >= 25 && BMI <= 29.9) {
            console.log("Your OverWeight");
        }
        else {
            console.log("Your Obese");
        }
    }
}