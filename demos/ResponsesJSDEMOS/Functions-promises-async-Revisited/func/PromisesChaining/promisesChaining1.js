/* 
JavaScript Promise Chaining
Last Updated : 18 Dec, 2024
Promise chaining allows you to execute a series of asynchronous operations in sequence. It is a powerful feature of JavaScript promises that helps you manage multiple operations, making your code more readable and easier to maintain.

Allows multiple asynchronous operations to run in sequence.
Reduces callback hell by eliminating deeply nested functions.
Each then() returns a new promise, allowing further chaining.
Error handling is easier with a single .catch() for the entire chain.
*/



function task(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}



function task2(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}



function task3(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}


// Chaining promises
task('Task 1 completed', 1000)
    .then(() => task2('Task 2 completed', 2000))
    .then(() => task3('Task 3 completed', 1000));