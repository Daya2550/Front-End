/* 
    * var is used to declare variables that can be reassigned a new value.
    * var variables are function-scoped, meaning they are accessible within the function they are declared in.
    * var variables are hoisted to the top of their scope, so they can be accessed before they are declared.
    * var is commonly used for variables that need to be reassigned a new value.
*/
// Declaring a variable using var and assigning it a value
var x=10;
console.log(x);

// Reassigning a new value to the variable x
x=20;
console.log(x);

// Declaring a variable y using var without initializing it
var y;
console.log(y); // Output: undefined

// Declaring a variable z using var and initializing it with a value
var z=5;
console.log(z);

var x=15; // Redeclaring the variable x using var (this is allowed)
console.log(x); // Output: 15
