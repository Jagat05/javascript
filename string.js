let firstname ="ram";

//Q1. output="ram thapa"
let fname=firstname+ "joshi";
console.log(fname);

//Q2. output="RAM"
cap=firstname.toUpperCase();
console.log(cap);

//Q3. output=3
num=firstname.length;
console.log(num);

// Q4. output="r@m"
var modifiedString = firstname.replace("a", "@");
console.log(modifiedString);

//Q5. output="ra"
let substring = firstname.substring(0, 2);
console.log(substring);

//Q5. output='ra'
console.log(firstname.slice(0, 2));

//Q6. output="mar"

let rev = firstname.split('').reverse().join('');
console.log(rev);

//Q7. output="hii Ram"

const firstLetter = firstname.charAt(0)
const firstLetterCap = firstLetter.toUpperCase()
const remainingLetters = firstname.slice(1)
const capitalizedWord = firstLetterCap + remainingLetters

console.log("Hii " + capitalizedWord);


//! charAt___slice_substring___split___replace___toUppercase
//*  string.chatAt(pos):-Give the character located at given position..
//*  string.slice(0,2):-Give the substring from 0-1 && if string.slice(2) is given then the substring starting from 1 will be given
//*  for reversing first use "split('')" to split string into characters and then reverse them using "reverse()" and after reverse join them using join() function
//*  string.replace(@,a) replace the first character(a) by @ if we have used replaceAll(@,a) then it replace all a by @