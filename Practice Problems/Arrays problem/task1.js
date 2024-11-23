/* Qs1. For a given array with
 marks of students -> [85,97,50,60,70,95]
 Find the average marks of the students*/

let marks = [45, 55, 80, 60, 70, 90, 85, 65, 50];
let sum = 0;
for (let val of marks) {
    console.log(val);
    sum += val;
    // sum = sum + val;
}
let avg = sum / marks.length;
// console.log(sum);
// using template 
console.log(`avg marks of the students =${avg.toFixed(2)}`);
