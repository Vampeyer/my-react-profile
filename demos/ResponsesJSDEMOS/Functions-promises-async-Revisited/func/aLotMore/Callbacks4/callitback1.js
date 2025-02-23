/* 
JavaScript Callbacks
Last Updated : 13 Dec, 2024
A callback is a function passed
 as an argument to another function, allowing the latter to execute the callback function at a specific time, often after completing an operation. Callbacks are a foundational concept in JavaScript, enabling asynchronous programming and modular code design.

*/
function greet( callback = () => {}) {
    console.log(`Hello, dude!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet();
greet(sayGoodbye)