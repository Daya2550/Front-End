
const myObject = {
    name: "Dayanand",
    age: 20,
    greet: function () {
        console.log("Hello, " + this.name + "! You are " + this.age + " years old.");
    }
};


console.log(Object.keys(myObject)); // Output: ["name", "age", "greet"]
console.log(Object.values(myObject)); // Output: ["Dayanand", 20, function() {...}]
console.log(Object.entries(myObject)); // Output: [["name", "Dayanand"], ["age", 20], ["greet", function() {...}]]

Object.assign(myObject, { city: "New York", country: "USA" });
console.log(myObject); // Output: { name: "Dayanand", age: 20, greet: function() {...}, city: "New York", country: "USA" }  

Object.freeze(myObject);  // This will prevent any modifications to the object
Object.seal(myObject);    // This will prevent adding or deleting properties, but allows modification of existing properties