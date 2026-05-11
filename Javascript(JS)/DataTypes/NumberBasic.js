
// Declaration of two variables a and b with values 10 and 20 respectively
let a=10;
let b=20;
console.log(a+b);

// Declaration of a variable c with a value of 3.14
let c=3.14;
console.log(c);

// Declaration of a variable d with a value of -5
let d=-5;
console.log(d);

// Declaration of a variable e with a value of 0
let e=0;
console.log(e);

// Declaration of a variable f with a value of 1e6 (1 million)
let f=1e6;
console.log(f);



// Conversion of a string to a number using the Number() function
let str="123";
let num=Number(str);
console.log(num);

// Conversion of a string to a number using the parseInt() function
let str2="456";
let num2=parseInt(str2);
console.log(num2);

// Conversion of a string to a number using the parseFloat() function
let str3="7.89";
let num3=parseFloat(str3);
console.log(num3);

// Declaration of a variable g with a value of NaN (Not a Number)
let g=NaN;
console.log(g);

// Declaration of a variable h with a value of Infinity
let h=Infinity;
console.log(h);

// Declaration of variable values of undefined and null
let i=undefined;
let j=null;
console.log(i);
console.log(j);

//Conversion of a boolean value to a number
let bool=true;
let num4=Number(bool);
console.log(num4);

// Conversion of a boolean value to a number
let bool2=false;
let num5=Number(bool2);
console.log(num5);

// Declaration of a variable k with a value of 0.1 + 0.2
let k=0.1 + 0.2;
console.log(k);


//Number methods


let num6=5.6789;
// Rounding a number to the nearest integer using the Math.round() method
let rounded=Math.round(num6);
console.log(rounded);

//let roundedDown=Math.floor(num6);
// Rounding a number down to the nearest integer using the Math.floor() method
let roundedDown=Math.floor(num6);
console.log(roundedDown);

// Rounding a number up to the nearest integer using the Math.ceil() method
let roundedUp=Math.ceil(num6);
console.log(roundedUp);

// Formatting a number to a specified number of decimal places using the toFixed() method
let formatted=num6.toFixed(2);
console.log(formatted);

let randomNum=Math.random(); // Generates a random number between 0 (inclusive) and 1 (exclusive)
console.log(randomNum);

let randomNumInRange=Math.random() * 100; // Generates a random number between 0 and 100
console.log(Math.floor(randomNumInRange)); // Rounds the random number down to the nearest integer




//Conversion Problems other datatypes to number

// Conversion of a string that cannot be converted to a number results in NaN
let str4="abc";
let num7=Number(str4);
console.log(num7);

// Conversion of an empty string to a number results in 0
let str5="";
let num8=Number(str5);
console.log(num8);
