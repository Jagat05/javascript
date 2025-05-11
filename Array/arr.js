const arr=['ram','shyam','hari','sita','gita'];
//q1 "ram"
console.log(arr[0]);

//q2 ['ram','shyam','hari','sita']

console.log(arr.pop());

//q3 ['hari','sita']
let arr1=arr.slice(2,4)
console.log(arr1);

//q4 ['gopal','rajesh','ram','shyam','hari','sita','gita']

let arr2=['gopal','rajesh'];
console.log(arr2.concat(arr));
// ES6 Spread Operator
console.log(...arr2,...arr);

//q5 2
console.log(arr2.length);

//q6 
