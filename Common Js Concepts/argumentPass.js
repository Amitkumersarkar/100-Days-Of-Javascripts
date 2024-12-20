function sum(a, b, c) {
    console.log(arguments[4]);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(45, 89, 12, 50, 80);
console.log(total);