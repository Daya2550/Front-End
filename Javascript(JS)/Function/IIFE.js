// IIFE : Immediately Invoked Function Expression


(function () {
    console.log("IIFE executed");
})();


// IIFE with parameters
(function (name) {
    console.log(`Hello, ${name}! This is an IIFE with parameters.`);
})("Alice");


// IIFE with return value
let result = (function (a, b) {
    return a + b;
})(5, 10);  

console.log(result); // Output: 15


console.log((()=>10)())  // Output: 10   


