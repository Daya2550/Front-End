/* 
    * const is used to declare variables that cannot be reassigned a new value.
    * const variables must be initialized when declared.
    * const is block-scoped, meaning it is only accessible within the block it is declared in.
    * const variables are not hoisted to the top of their scope like var variables, so they cannot be accessed before they are declared.
    * const is commonly used for variables that should not be reassigned a new value, while let is used for variables that need to be reassigned.
*/

// Declaring a constant variable using const and assigning it a value
const PI=3.14;
console.log(PI);

// Attempting to reassign a new value to the constant variable PI (this will result in an error)
// PI=3.14159; // Uncaught TypeError: Assignment to constant variable.


