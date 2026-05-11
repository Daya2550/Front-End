async function fetchData() {
    return "Data received";
}

fetchData().then(data => {
    console.log(data);
});

async function sum (a, b) {
    return a + b;
}


sum(5,10).then(result => console.log(result)); // Output: 15