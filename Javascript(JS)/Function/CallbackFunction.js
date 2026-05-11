function processUser(callback) {
    console.log("Processing user");

    callback();
}

processUser(function () {
    console.log("Callback executed");
});