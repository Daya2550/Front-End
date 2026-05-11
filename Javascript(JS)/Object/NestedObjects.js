
const myObject = {
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
    hobbies: ["reading", "traveling", "cooking"]
};

// Accessing nested object properties
console.log(myObject.address.street); // Output: "123 Main St"
console.log(myObject.hobbies[1]); // Output: "traveling"