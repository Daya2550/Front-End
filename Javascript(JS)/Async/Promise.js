// created the load the getting the data in 5 second

function processing() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("Data is created");

            resolve(2550);

        }, 5000);

    });

}

const operation = true;

const promise1 = new Promise((resolve, reject) => {

    if (operation) {

        resolve(processing());

    } else {

        reject("Something went wrong");

    }

});

promise1
    .then((value) => {

        console.log(value);

    })
    .catch((error) => {

        console.log(error);

    });

console.log(10);