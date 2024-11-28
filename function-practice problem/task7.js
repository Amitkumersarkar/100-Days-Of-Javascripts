function oddAvg(num) {
    for (const number of num) {
        if (number % 2 === 1) {

            console.log(number);
        }
    }
}
const num = [42, 52, 57, 63];
const avg = oddAvg(num);
console.log(avg);