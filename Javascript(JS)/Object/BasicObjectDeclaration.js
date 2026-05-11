// Declartion of a basic object with no properties or methods

let myObject = {};
console.log(myObject); // Output: {}

// Object with properties
let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};

console.log(person); // Output: { name: "Alice", age: 30, isStudent: false }

// Accessing object properties
console.log(person.name); // Output: "Alice"
console.log(person.age); // Output: 30
console.log(person.isStudent); // Output: false
console.log(person["name"]); // Output: "Alice"
console.log(person["age"]); // Output: 30
console.log(person["isStudent"]); // Output: false

// Modifying object properties
person.name = "Bob";
person.age = 35;
console.log(person); // Output: { name: "Bob", age: 35, isStudent: false }

// Adding new properties to the object
person.city = "New York";
console.log(person); // Output: { name: "Bob", age: 35, isStudent: false, city: "New York" }


// Deleting properties from the object
delete person.isStudent;
console.log(person); // Output: { name: "Bob", age: 35, city: "New York" }  



// Declaring an object using the new Object() constructor
let anotherObject = new Object();
anotherObject.name = "Charlie";
anotherObject.age = 25;
console.log(anotherObject); // Output: { name: "Charlie", age: 25 }












/* 
    * An object is used to store data in key : value format.
    * Objects can have properties (data) and methods (functions).
    * Objects are mutable, meaning their properties can be modified after they are created.
    * Objects can be created using object literals (as shown above) or using the Object constructor.
    * Objects can also have nested objects and arrays as properties.
    * Objects are a fundamental data structure in JavaScript and are used extensively in programming.
    * Objects can be used to represent real-world entities, such as a person, a car, or a book, by storing relevant data and behaviors as properties and methods.
    * Objects can be used to organize and structure data in a way that is easy to access and manipulate, making them a powerful tool for developers.

*/