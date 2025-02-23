//
//
/* 
Certainly! Let's break down how to say "Hello, World!" in JavaScript
 and then extend it to use a basic callback function.
  We'll go through each step in detail.

Step 1: Basic "Hello, World!" in JavaScript
First, let's start with the simplest way to print "Hello, World!" to the console:


console.log("Hello, World!");
Explanation:

console.log() is a built-in JavaScript
 function that prints (or logs) a message to 
 the console.
"Hello, World!" is a string, which is the 
message we want to display.
When this line of code runs, it will output 
Hello, World! to the console.
Step 2: Introducing a Function
Next, let's wrap this code inside a function.
 A function is a reusable block of code that
 performs a specific task.


function greet() {
    console.log("Hello, World!");
}
*/
// Original Function 
function greet0() {
    console.log("Hello");
}

greet0()


// Regular function , to be used with the callback function 
function world(){
    console.log("My name is Kaloudhopp3r")
}



//Writing the defaultInitialParamCallback
function greet(callbacker, strang) {
    console.log(", World!" + strang);
    callbacker()
}


/* 
Calling the callback function with the default
function.
*/

greet(world, " Hows it going ? ")

 world(greet)

