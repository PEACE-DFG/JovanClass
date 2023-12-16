// JAVASCRIPT NUMBER 
/*
jAVASCRIPT NUMBER IS NUMBERS WITH OR WITHOUT DECIMALS

*/

let x=3;
let y=3.14;
console.log(typeof(x))
console.log(typeof(y))

console.log(123e5)
console.log(123e-5)


// Integer Precision
/*
are accurate up to 15 digits
*/

let m= 999999999999999;
let n= 9999999999999999;

console.log(m);
console.log(n);

// floating precision  -> 17

console.log(0.2+0.1);

// ADDING NUMBERS AND STRING

//  + operator -> concatenates 

let num ="10";
let str ="20";

let result = str + num;

console.log(result);

// Numeric string
//  / , *, ** , - ......

let z =str*num;
console.log(z);

// Not a number 
let ream = 100/ "Apple";

console.log(ream);
console.log(isNaN(ream))

// javascript numbers method

// toStringify()-> return a number as a string

let r= 123;
let val = r.toString();

console.log(val);
console.log(r);

//  toExponential()-> return a n string with a number rouded and written in an exponential notation
//  Parameter -> defines the number of characters after the decimal points

let t = 9.56589;

console.log(t.toExponential(2))

// toFixed()-> return a string with numbers written in a specified decimal

console.log(t.toFixed(0))
console.log(t.toFixed(1))
console.log(t.toFixed(2))
console.log(t.toFixed(3))


// toPrecision()-> returns a string with numbers written in a soecified length

console.log(t.toPrecision())
console.log(t.toPrecision(2))
console.log(t.toPrecision(3))
console.log(t.toPrecision(4))


// valueOf() -> returns a number as a number

let w =123;

console.log(w.valueOf())
console.log((784759).valueOf())
console.log((100+23).valueOf())


// convertinig js variables to numbers
// 1. Number method-> converts variables to numbers

console.log(Number(true))
console.log(Number(false))
console.log(Number("10"))
console.log(Number("10,33"))
console.log(Number("John"))

// 2. parseInt method-> 
console.log(parseInt("-10"))
console.log(parseInt("-10.33"))
console.log(parseInt("10"))
console.log(parseInt("10 20 30"))
console.log(parseInt("10 years"))
console.log(parseInt("years 10"))

// 3. parseFloat method-> converts

console.log(parseFloat("10.33"))





