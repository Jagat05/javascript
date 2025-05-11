
//! Reduce
//?reduce() is a powerful JavaScript array method that allows you to reduce an array of values into a single value.
//? This single value can be a number, string, object, or even another array.
//?  It iterates over each element of the array, performs a specified operation, and accumulates the result.



//?! Syntax
/* 
array.reduce(function(accumulator, currentValue, index, array) {
   Logic to combine values
  return accumulator;
}, initialValue);
*/


const money=[20,40,30,10];
const totalMoney=money.reduce((accumulator,currentValue)=>{
return accumulator+currentValue;
},0);
console.log("Total Money = "+totalMoney);  //Output-----> Total Money = 100


const words=["Concating","these","Words","using","Reduce"];
const Sentence=(words.reduce(function(accumulator,currentValue){
  return accumulator+" "+currentValue;
}))
console.log("Words : "+words);  //Output----->   Words : Concating,these,Words,using,Reduce
console.log("Sentence : "+Sentence);  //Output----->  Sentence : Concating these Words using Reduce
























const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator

console.log("Original numbers:", numbers); // Output: Original numbers: [ 1, 2, 3, 4 ]
console.log("Sum:", sum);                    // Output: Sum: 10

// const prices = [5, 10, 15];
// const total = prices.reduce((accumulator, price) => accumulator + price, 0);
// console.log("Total:", total); 
// Output: Total: 30