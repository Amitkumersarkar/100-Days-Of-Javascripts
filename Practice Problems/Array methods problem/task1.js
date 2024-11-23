/* Qs1. Create an array to store companies
->"Bloomberg","Microsoft","Meta","Netflix"
a. Remove the first company from array
b. remove Meta & add Google in it's places
c. Add Amazon at the end*/

let companies = ['Bloomberg', 'Microsoft', 'Meta', 'Google'];

let val = companies.shift();

companies.push('Netflix');

console.log(val);
console.log(companies);
