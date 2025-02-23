function doSomething(callback) {
    console.log("Doing something first...");
    callback(); // Execute the callback function!
}

function greet() {
    console.log("Hello World");
}

doSomething(greet);