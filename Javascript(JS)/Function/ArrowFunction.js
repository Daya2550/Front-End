// Declaration of an arrow function
const multiply=(a,b)=>{
    return a*b;
}
// Calling the multiply arrow function to execute its code
let product=multiply(5,10);
console.log(product); // Output: 50 

// Arrow function with default parameters
const greet=(name="Django")=>{
    console.log(`Hello, ${name}! Welcome to our website.`);
}   
greet(); // Output: Hello, Django! Welcome to our website.
greet("python"); // Output: Hello, python! Welcome to our website.


// Arrow function with rest parameters
const sumAll=(...numbers)=>{
    return numbers.reduce((total, num) => total + num, 0);
}   
let totalSum=sumAll(1,2,3,4,5);
console.log(totalSum); // Output: 15


// Arrow function with implicit return (for single expression)
const square=x=>x*x;
let result=square(5);
console.log(result); // Output: 25


// Arrow function without parameters
const sayHello=()=>console.log("Hello, World!");
sayHello(); // Output: Hello, World!        



