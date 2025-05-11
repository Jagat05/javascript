const numbers= [10,20,30,40,50];

numbers.forEach((element,index) => {
  console.log(`The Number At Index ${index}`,element*2);            
  //!-->Output:   The Number At Index 0 20
  //!-->          The Number At Index 1 40
  //!-->          The Number At Index 2 60
  //!-->          The Number At Index 3 80
  //!-->          The Number At Index 4 100
});
console.log(numbers);         //!-->Output:[ 10, 20, 30, 40, 50 ]

const fruit =['Apple','Banana','Orange','Cherry'];
fruit.forEach(function(Item){
console.log(Item);
/* -->Output:
 Apple
Banana
Orange
Cherry           
 */
});