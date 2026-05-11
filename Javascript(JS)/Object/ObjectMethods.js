

const myObject = {
    name: "Dayanand",
    age: 20,
    greet: function () {
        console.log("Hello, " + this.name + "! You are " + this.age + " years old.");
    }   
};

myObject.greet(); // Output: "Hello, Dayanand! You are 20 years old."