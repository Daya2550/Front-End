// Declaretion of a simple array
let fruits=["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Accessing elements of the array
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[1]); // Output: "Banana"
console.log(fruits[2]); // Output: "Cherry"
console.log(fruits[10]); // Output: undefined


// Modifying elements of the array
fruits[1]="Blueberry";
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]


// Adding new elements to the array
fruits[3]="Date";
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date"]


// deleting elements from the array
delete fruits[0];
console.log(fruits); // Output: [undefined, "Blueberry", "Cherry", "Date"]


// Length of the array
console.log(fruits.length); // Output: 4



// Creating an array using the Array constructor
const numbers = new Array(1, 2, 3);

console.log(numbers); // Output: [1, 2, 3]
