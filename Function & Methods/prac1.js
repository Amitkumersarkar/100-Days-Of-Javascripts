// map method
const products = [
    { name: 'phone', model: 'iphone 14', price: 14000 },
    { name: 'phone', model: 'iphone 13', price: 12000 },
    { name: 'phone', model: 'iphone 12', price: 11000 },
];

const models = products.map(product => product.model);
// console.log(models);

// forEach declaration

products.forEach(product => console.log(product.price));
