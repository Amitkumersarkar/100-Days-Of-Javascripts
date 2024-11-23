// After offer items price
let items = [250, 350, 500, 650, 900];

let i = 0;
for (let val of items) {
    // console.log(`value at index ${i}= ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}