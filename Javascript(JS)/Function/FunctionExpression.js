//Declaration of a function expression
const add=function(a,b){
    return a+b;
}

// Calling the add function expression to execute its code
let sum=add(5,10);
console.log(sum); // Output: 15

// Function expression with default parameters
const greet=function(name="Django"){
    console.log(`Hello, ${name}! Welcome to our website.`);
}
greet(); // Output: Hello, Django! Welcome to our website.
greet("python"); // Output: Hello, python! Welcome to our website.

// Function expression with rest parameters
const sumAll=function(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
let totalSum=sumAll(1,2,3,4,5);
console.log(totalSum); // Output: 15


