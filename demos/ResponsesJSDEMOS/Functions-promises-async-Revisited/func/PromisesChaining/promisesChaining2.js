/* 
JavaScript Promise Chaining
Last Updated : 18 Dec, 2024
Promise chaining allows you to execute a series of asynchronous operations in sequence. It is a powerful feature of JavaScript promises that helps you manage multiple operations, making your code more readable and easier to maintain.

Allows multiple asynchronous operations to run in sequence.
Reduces callback hell by eliminating deeply nested functions.
Each then() returns a new promise, allowing further chaining.
Error handling is easier with a single .catch() for the entire chain.
*/
let taskNumber = 1



function task(message , taskNumber) {
    return new Promise((resolve) => {

            console.log(message, `Task Number # ${taskNumber}` );
            resolve();
   
    });
}



function task2(message, taskNumber) {
    return new Promise((resolve) => {
      
        console.log(message, `Task Number # ${taskNumber}` );
            resolve();
       ;
    });
}



function task3(message, taskNumber) {
    return new Promise((resolve) => {

        console.log(message, `Task Number # ${taskNumber}` );
            resolve();
     
    });
}


// Chaining promises
task('Task 1 completed', 1)
    .then(() => task2('Task 2 completed' , 2))
    .then(() => task3('Task 3 completed' , 3));