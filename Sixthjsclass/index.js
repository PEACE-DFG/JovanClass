// JS String is used to store and manipulate text

// String makes use of either single quotes or double quotes

let text= 'We are the \'Vikings\' from the North';
console.log(text)
console.log(typeof(text))

// \'   ->     ' single quote
// \" ->   "   double quote
//  \\ ->  \  backslashe


// Examples

let text1= 'It\'s Alright'
console.log(text1);

let text2 = "The character \\ is a backslash";
console.log(text2);

// to chech the length of a string
// .length() method

let firstName = 'Jovan'
let lengthCharacters = firstName.length;

console.log(lengthCharacters);


// breakinf long line of code

// document.getElementById('demo').innerHTML="Helooo \
// World!"

// A safer way is to apply the + sign
document.getElementById('demo').innerHTML="Helooo" +
"World!" +
"Good Evening"


// Extraction - extracting some part of a string
// 3 methods
/*
1. Slice (start, end)
2. substring(start, end)
3. substr(start,length)
*/

// JS slice()-> extracts part of a string and returns the extracted part in a new string
// two parameters-> start position and end position


let fruits = "Apple, Banana, Kiwi";
console.log(fruits.length);
console.log(fruits.slice(7,13))
console.log(fruits.slice(-12))
console.log(fruits.slice(0,-1))

// JS substring()-> works exactly like slice but the differnece is that substring()
// cant take in negative parameters 
console.log(fruits.substring(7,13))

// JS substr()-> the second parameter is for the length

console.log(fruits.substr(7,10));


// Replacing a string
// 1. JS replace() -> replaces specified value with another value

let word = 'Please visit Google, To Google your answer';
let newWord = word.replace("Google","Jumia")

console.log(newWord)
// NOTE - > replace()
// it does not change the string
// replace only the first match
// replace is case sensitive


// in 2021 js introduced replaceAll()

console.log(word.replaceAll("Google","Youtube"));


// Converting from lower & Upper case

let low= "i am in lowercase"
let high = "I AM IN UPPER CASE"

console.log(low.toUpperCase())
console.log(high.toLowerCase())


// JS TRIM METHOOD
// it is used to remove whitespaces

let text4= "               Helllo there!        "

console.log(text4)
console.log(text4.trim())
console.log(text4.trimStart())
console.log(text4.trimEnd())


// JAVASCRIPT PADDING

// padStart -> it used to pad a string  with another string

let textNumb ="5";
document.getElementById('padStart').innerHTML=textNumb.padStart(4, "x")
document.getElementById('padEnd').innerHTML=textNumb.padEnd(4, "x")


// JS extracting string of characters
/*
1. charAt() -> returns the character of the specified index[position]
2. charCodeAt()->  return s unicode of the character (UTF-16 -> integers between 0 and 65535)
3. Property Access -> 2009 , allows property acces of a string

*/

// charAt
let greet = "Good Day";
console.log(greet.charAt(0))

// charCodeAt
console.log(greet.charCodeAt(0))

// property access 
console.log(greet[0])


// CONVERTING STRING TO AN ARRAY

// split 

let alphabet = "a,b,c,d,e,f,g";
console.log(alphabet.split(","))
// , -> comma
//    -> space
//  | -> pipe



// JS SEARCH METHOD
/*
1. JS string indexOf - > returns the index position of the first occurence
2. lastIndexOf -> returns the last occurence of the last occurence
3. search method-> returns the position of the match just like indexOf;but the difference is that search does not allow second parameter
4. match method -> returns array containing the result of the matching string

5. matchAll() method - > returns an itereator
6. includes() method -> returns true or false
7. StartWITH Method -> returns true if string begins with the specifievalued
7. EndWITH Method -> returns true if string ends with the specifievalued
*/

// indexOf

let meet = "Please Locate where Locate occurs";
console.log(meet.indexOf("Locate",15))
console.log(meet.lastIndexOf("Locate"))
console.log(meet.search("Locate"))
console.log(meet.match("Locate"))
// console.log(meet.matchAll("Locate"))

let hobby = "I love Cats. Cats are very easy to love. Cats are very Popular"
const iterator = hobby.matchAll("Cats")
document.getElementById('matchAll').innerHTML= Array.from(iterator)

console.log(meet.includes("cherry"))
console.log(meet.startsWith("Please"))
console.log(meet.endsWith("occurs"))

let FirstName = "John";
let LastName = "Doe";

let FullName = `Welcome  ${FirstName}  ${LastName}`;
console.log(FullName)
