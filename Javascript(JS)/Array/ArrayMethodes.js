// Array Methods
let fruits = ["Apple", "Banana", "Cherry"];

// push() - Adds an element to the end of the array
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

// pop() - Removes the last element from the array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// unshift() - Adds an element to the beginning of the array
fruits.unshift("Apricot");
console.log(fruits); // Output: ["Apricot", "Apple", "Banana", "Cherry"]

// shift() - Removes the first element from the array
fruits.shift();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// indexOf() - Returns the index of the first occurrence of an element
console.log(fruits.indexOf("Banana")); // Output: 1

// includes() - Checks if an element is present in the array
console.log(fruits.includes("Cherry")); // Output: true


// slice() - Returns a shallow copy of a portion of the array
let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["Banana", "Cherry"]


// splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements
fruits.splice(1, 1, "Blueberry");
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// join() - Joins all elements of an array into a string
let fruitString = fruits.join(", ");
console.log(fruitString); // Output: "Apple, Blueberry, Cherry"

// reverse() - Reverses the order of the elements in the array
fruits.reverse();
console.log(fruits); // Output: ["Cherry", "Blueberry", "Apple"]    


// sort() - Sorts the elements of the array in place and returns the sorted array
fruits.sort();
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]


// map() - Creates a new array with the results of calling a provided function on every element in the calling array
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // Output: ["APPLE", "BLUEBERRY", "CHERRY"]


// filter() - Creates a new array with all elements that pass the test implemented by the provided function
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // Output: ["Blueberry", "Cherry"]


// concat() - Merges two or more arrays and returns a new array
let moreFruits = ["Date", "Elderberry"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["Apple", "Blueberry", "Cherry", "Date", "Elderberry"]


// reduce() - Executes a reducer function on each element of the array, resulting in a single output value
let totalLength = fruits.reduce((accumulator, fruit) => accumulator + fruit.length, 0);
console.log(totalLength); // Output: 19


// forEach() - Executes a provided function once for each array element
fruits.forEach(fruit => console.log(fruit)); // Output: "Apple", "Blueberry", "Cherry"


