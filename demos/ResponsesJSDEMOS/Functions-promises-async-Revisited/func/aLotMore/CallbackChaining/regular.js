
function callitBack(callback2){
console.log("code in the callback  ")
callback2()

}

function sayHello(){
    console.log("Hello world ")
}
callitBack(sayHello)










function doSomething(callback) {
    console.log("Doing something first...");
    callback(); // Execute the callback function!
}

function greet() {
    console.log("Hello World");
}


function another (){
    console.log("yoooooooo")
}

doSomething(another);