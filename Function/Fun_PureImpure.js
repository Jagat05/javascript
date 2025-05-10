//!----------------------------------->Pure Function
/*
A function is considered pure if:
It always returns the same result if the same inputs are given.
It does not cause any side effects (like modifying external variables, logging to the console, interacting with the DOM, etc.).
*/
//!----------------------------------->Pure Function Example

const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 (always the same)

//!----------------------------------->❓Why is it Pure?
//?It just takes two numbers (a and b) and returns their product.
//?There are no side effects: it does not print, update variables, or touch any external data.
//?If you call multiply(2, 3); a million times, it will always give you 6 and not change anything else.


//!----------------------------------->Impure Function
/*
 A function is considered **impure** if:
    It may produce different results for the same inputs.
    It causes side effects (modifies external variables, interacts with DOM, API calls, etc.).
*/
//!----------------------------------->Impure Function Example

const sum = (a, b) => {
  console.log(a + b);
};
//!----------------------------------->❓Why is it Impure?
//? The console.log(a + b); statement is the reason.
//? console.log() is a side effect because it interacts with the outside world (the console window).
//? If you call sum(2, 3);, it changes the state of your console by printing text.

//!----------------------------------->Impure Function Example
let number = 5;
const addToNumber = (value) => {
  number += value;  //  This modifies the external variable 'number'
  return number;
};
console.log(addToNumber(3)); // Output: 8
console.log(addToNumber(3)); // Output: 11
//!----------------------------------->❓Why is it Impure?
//? The function changes the value of number, which is outside its own scope.
//? Each time you call it, the output changes, even with the same input.
//? This is a side effect, so the function is impure.
