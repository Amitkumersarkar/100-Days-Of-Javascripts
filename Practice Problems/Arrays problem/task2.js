/* Qs2. For a given array with 
prices of 5 items ->[250,300,500,650,900]
All items have an offer of 10% OFF on them.
Change the array to store final price
After applying offer*/

let items = [250, 350, 500, 650, 900];

let i = 0;
for (let val of items) {
    console.log(`value at index ${i}= ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}
