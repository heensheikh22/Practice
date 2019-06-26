let orgFunction = {
    first: 1,
    second: 2,
    third: 3
}

let newFunction = Object.create(orgFunction);

orgFunction.fourth = 4;
newFunction.fifth = 5;

let secondFunction = Object.create(newFunction);

console.log(orgFunction);
console.log(newFunction);
console.log(secondFunction);
console.log('------------------------------');

console.log(Object.getPrototypeOf(orgFunction));
console.log(Object.getPrototypeOf(newFunction));
console.log(Object.getPrototypeOf(secondFunction));

console.log('------------------------------');
console.log(typeof newFunction);
console.log(typeof orgFunction);

console.log('------------------------------');
console.log(orgFunction.first);
console.log(newFunction.first);
console.log(secondFunction.first);

console.log('------------------------------');
console.log(orgFunction.fourth);
console.log(newFunction.fourth);
console.log(secondFunction.fourth);

console.log('------------------------------');
console.log(orgFunction.fifth);
console.log(newFunction.fifth);
console.log(secondFunction.fifth);

console.log('---------------------------------');
console.log(orgFunction.hasOwnProperty('fourth'));
console.log(newFunction.hasOwnProperty('fourth'));
console.log(secondFunction.hasOwnProperty('fourth'));