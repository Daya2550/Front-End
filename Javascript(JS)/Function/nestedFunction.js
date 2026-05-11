
function outerFunction() {
    console.log("This is the outer function."); 
    function innerFunction() {
        console.log("This is the inner function.");
    }
    innerFunction(); // Calling the inner function within the outer function
}

outerFunction(); // Calling the outer function to execute its code
  // innerFunction(); // This will result in an error because innerFunction is not accessible outside of outerFunction


  // Nested function with parameters
function calculateArea(radius) {
    const pi = 3.14;
    function area() {
        return pi * radius * radius;
    }
    return area(); // Calling the inner function to calculate and return the area
}

let circleArea = calculateArea(5);
console.log(circleArea); // Output: 78.5


