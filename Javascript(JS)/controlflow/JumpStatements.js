// use of the continue statement and break statement in loops

// Using continue in a for loop
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i); // This will only print odd numbers
}

console.log("-----");
// Using break in a for loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i); // This will print numbers from 0 to 4
}
