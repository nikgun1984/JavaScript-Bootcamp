// Arrays Methods

let fruits = ['apple','pear','orange'];

fruits.push('watermelon');
fruits.push(true);

fruits.unshift('grapes');
fruits.shift()

let veggies = ['carrots','cabbage'];
let produce = fruits.concat(veggies);

console.log(veggies.includes('carrots'));

console.log(fruits.indexOf('apple'));

fruits.reverse()