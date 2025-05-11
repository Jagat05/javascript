const numbers=[10,20,30,40,50];
const doublednumbers=numbers.map(item=>item*2);
console.log(numbers); // Output: Original [ 10, 20, 30, 40, 50 ]
console.log(doublednumbers); // Output: Doubled prices: [ 20, 40, 60 ]


const prices = [10, 20, 30];
const doubledPrices = prices.map(function(price) {
  return price * 2;
});

console.log("Original prices:", prices);      // Output: Original prices: [ 10, 20, 30 ]
console.log("Doubled prices:", doubledPrices); // Output: Doubled prices: [ 20, 40, 60 ]


const names = ["alice", "bob", "charlie"];

const capitalizedNames = names.map(name => name.toUpperCase());

console.log("Original names:", names);          // Output: Original names: [ 'alice', 'bob', 'charlie' ]
console.log("Capitalized names:", capitalizedNames); // Output: Capitalized names: [ 'ALICE', 'BOB', 'CHARLIE' ]