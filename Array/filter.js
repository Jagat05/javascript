const numbers = [5, 10, 15, 20, 25, 30];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [10, 20, 30]
console.log(numbers);     // [5, 10, 15, 20, 25, 30] → Original array is unchanged.
