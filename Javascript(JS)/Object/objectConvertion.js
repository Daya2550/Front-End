
// Object to JSON conversion
const user = {
    name: "Rahul"
};

const jsonData = JSON.stringify(user);

console.log(jsonData); // Output: {"name":"Rahul"}




// JSON to Object conversion
const jsonString = '{"name":"Rahul"}';
const data = JSON.parse(jsonString);

console.log(data); // Output: { name: "Rahul" } 


