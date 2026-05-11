//Declaration of the Boolean data type with a value of true
let a=true;
console.log(a);

//Declaration of the Boolean data type with a value of false
let b=false;
console.log(b);


// Logical NOT operator to invert the value of a Boolean variable
let c=!a;
console.log(c);

// Logical AND operator to combine two Boolean variables
let d=a&&b;
console.log(d);

// cOnversion of a string to a Boolean using the Boolean() function
let str="Hello";
let bool=Boolean(str);
console.log(bool);

// Conversion of an empty string to a Boolean using the Boolean() function
let emptyStr="";
let bool2=Boolean(emptyStr);
console.log(bool2);

// Conversion of a number to a Boolean using the Boolean() function
let num=123;
let bool3=Boolean(num);
console.log(bool3);

// Conversion of the number 0 to a Boolean using the Boolean() function
let zero=0;
let bool4=Boolean(zero);
console.log(bool4);

// Conversion of null to a Boolean using the Boolean() function
let nullValue=null;
let bool5=Boolean(nullValue);
console.log(bool5);


// Conversion of undefined to a Boolean using the Boolean() function
let undefinedValue=undefined;
let bool6=Boolean(undefinedValue);
console.log(bool6);

