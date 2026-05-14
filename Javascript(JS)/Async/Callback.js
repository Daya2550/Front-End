function operation(callback) {

    setTimeout(() => {

        callback("Data Received");

    }, 2000);

}

operation((data) => {

    console.log(data);

});

console.log(10);