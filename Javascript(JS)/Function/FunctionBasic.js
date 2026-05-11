// This is a basic function definition in JavaScript
function ShowMessage(){
    console.log("Hello, this is a message from the ShowMessage function!");
}

// Calling the ShowMessage function to execute its code
ShowMessage();


// Function with parameters
function AddNumbers(a, b){
    return a + b;
}

let sum = AddNumbers(5, 10);
console.log(sum); // Output: 15


// Function with default parameters
function Greet(name = "Django"){
    console.log(`Hello, ${name}! Welcome to our website.`);
}
Greet(); // Output: Hello, Django! Welcome to our website.
Greet("python"); // Output: Hello, python! Welcome to our website.


// Function with rest parameters
function SumAll(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
let totalSum = SumAll(1, 2, 3, 4, 5);
console.log(totalSum); // Output: 15    



