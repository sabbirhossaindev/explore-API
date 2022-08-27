const numbersFind = [2, 8, 4, 6, 3];
//map hoilo all value dora..
const makeDoubleDirect = numbersFind.map(num => num * 2);
// console.log(makeDoubleDirect);

// array
const friends = ['nihon', 'arsh', 'nadim', 'sabbir'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);
const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

// object
const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];

const items = products.map(product => product.name);
// console.log(items);


// filter
const number = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = number.filter(num => num > 20);
// console.log(bigNums);

// find..
const array = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fives = array.find(num => num % 5 === 0)
const fivesAll = array.filter(num => num % 5 === 0);

// console.log(fives);
// console.log(fivesAll);

// map, forEach, filter, find, reduce
const numbers = [1, 2, 3, 4, 5];
// .reduce (accumulatorFunction, initial value)
// accumulatorFunction use two parameters 
// const total = numbers.reduce( (previous, current) => previous + current , 0);
const total = numbers.reduce( (previous, current) => {
    console.log(previous, current);
    return previous + current
} , 0);
console.log(total);