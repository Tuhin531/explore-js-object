const bottle = {color: 'yellow', price: 50, isClean: true, capacity: 1}
const keys = Object.keys(bottle);
const values = Object.values(bottle);
console.log(keys);
console.log(values);
console.log(bottle);
const pair = Object.entries(bottle);
console.log(pair);
Object.seal(bottle);