//*Array:- Array is a object that store collection of similar kind of element/data .
//! Array Index starts from 0.

const person = ["Ram","Hari"];
console.log(person[0]);  //Output:-Ram

console.log(person[person.length-1]);  //Output:-Hari
console.log(person[person.length]);  //Output:-Undefined

person.push("Sita");
console.log(person);        //output:-[ 'Ram', 'Hari', 'Sita' ]

person.pop("Sita");
console.log(person);        //output:-[ 'Ram', 'Hari' ]
