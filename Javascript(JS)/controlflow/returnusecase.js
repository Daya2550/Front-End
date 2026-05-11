
const myFunction = (num) => {
    if (num > 10) {
        return "Greater than 10";
    } else if (num < 10) {
        return "Less than 10";
    } else {
        return "Equal to 10";
    }   
};

console.log(myFunction(15)); // Output: Greater than 10


const anotherFunction = function(num) 
   {
    for (let i = 0; i < num; i++) {
        if (i === 3) {
            return "Found 3, exiting function.";   // This will exit the function immediately when i is 3
        }   
   }
};

console.log(anotherFunction(5)); // Output: Found 3, exiting function.

