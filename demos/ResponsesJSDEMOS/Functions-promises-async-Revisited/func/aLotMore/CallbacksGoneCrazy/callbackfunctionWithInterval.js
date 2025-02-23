

//  BASIC CALLABCK FUNCTION 
// With setInterval


let number = 0
function greet(callback) {
    console.log("Hello, World!");
    number++
    console.log(" This will run first , \n and be called back when called.  ");
    callback();  // Call the callback function after greeting
}


function respond(){
    console.log("So call it back world ! " + `${number}`)
}

setInterval(() =>  {  greet(respond)},2000  )











