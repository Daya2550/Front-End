//Declaration of the for loop

for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

// For loop with an array
const fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// For loop with multiple variables
for (let i = 0 , j = 5; i < 10; i++) {
    console.log("i: " + i + ", j: " + j);
}


//infinite loop (commented out to prevent execution)
// for(;;){
//     console.log("This is an infinite loop");
// }


const numbers = [10,20,30,40,50];
// Using for...of loop to iterate over an array
for (const value of numbers) {
    console.log(value);
}

// Using for...in loop to iterate over an array. // it used for index of array and object
for (const index in numbers) {
    console.log("Index: " + index + ", Value: " + numbers[index]);
}

numbers.forEach((value, index) => {
    console.log("Index: " + index + ", Value: " + value);
});


// Using forEach with a condition to filter values greater than 20
numbers.filter(value => value > 20)
         .forEach(value => console.log(value)); // Output: 30, 40, 50

// Using forEach to calculate the sum of all numbers in the array
let sum = 0;
numbers.forEach(value => sum += value);
console.log("Sum: " + sum); // Output: Sum: 150

// using the map method to create a new array with each value multiplied by 2
const doubledNumbers = numbers.map(value => value * 2);
console.log(doubledNumbers); // Output: [20, 40, 60, 80, 100]   


// reduce method to calculate the product of all numbers in the array
const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log("Product: " + product); // Output: Product: 12000000



