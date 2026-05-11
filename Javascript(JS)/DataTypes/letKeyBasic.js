// let key is used to declare variables that can be reassigned a new value. It is block-scoped, meaning it is only accessible within the block it is declared in.

// Declaring a variable using let and assigning it a value
let x=10;
console.log(x);

// Reassigning a new value to the variable x
x=20;
console.log(x);

// Declaring a variable y using let without initializing it
let y;
console.log(y); // Output: undefined

// Declaring a variable z using let and initializing it with a value
let z=5;
console.log(z);

//Declaration of a variable a using null value
let a=null;
console.log(a);

/*  
    * let can be declared without initializing it, and it will have the value of undefined until it is assigned a value.
    * let variables can be reassigned new values, but they cannot be redeclared within the same scope.
    * let is block-scoped, meaning it is only accessible within the block it is declared in.
    * let variables are not hoisted to the top of their scope like var variables, so they cannot be accessed before they are declared.
    * let is commonly used for variables that need to be reassigned a new value, while const is used for variables that should not be reassigned.
*/
