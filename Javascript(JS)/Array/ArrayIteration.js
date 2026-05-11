let myarray = [1, 2, 3, 4, 5];

// Using for loop to iterate over an array
for (let i = 0; i < myarray.length; i++) {
    console.log(myarray[i]);
}

// Using for...of loop to iterate over an array
for (const value of myarray) {
    console.log(value);
}

// Using for...in loop to iterate over an array. // it used for index of array and object
for (const index in myarray) {
    console.log("Index: " + index + ", Value: " + myarray[index]);
}

myarray.forEach((value, index) => {
    console.log("Index: " + index + ", Value: " + value);
});

// Using forEach with a condition to filter values greater than 2
myarray.filter(value => value > 2)
       .forEach(value => console.log(value)); // Output: 3, 4, 5    

//using while loop to iterate over an array
let index = 0;
while (index < myarray.length) {
    console.log(myarray[index]);
    index++;
}


console.log("-----");

console.log(myarray.toString()); // Output: 1,2,3,4,5
