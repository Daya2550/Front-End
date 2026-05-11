// Declaration of the MethodFunction class, which represents a method function in the codebase.


const user = {
    name: "Dayanand",

    greet: function () {
        console.log("Hello " + this.name + "! Welcome to our website.");
    }
};

user.greet();


class Person {
    
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name + "! Welcome to our website.");
    }
}

const person = new Person("Dayanand");
person.greet();


