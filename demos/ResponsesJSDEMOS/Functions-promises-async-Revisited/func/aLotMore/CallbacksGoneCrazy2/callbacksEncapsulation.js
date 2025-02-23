




function mainCallerBacker(){

function basicResponse(){
    console.log("Hello there maytie , I am the first encapsulated callback function , being thrown around here ")
}






function basicCallbackResponse(callback = () => {}){ // Pattern to make for defaulting to - no value - for a callback if non present
console.log("Callback is now being ran. ")
callback()
}

// To call the callback - 
basicResponse()
basicCallbackResponse()// Demonstration of calling a callback without a callback parameter. 
basicCallbackResponse(basicResponse)
//logs -   "Callback is now being ran. "
//logs -   "Callback is now being ran. "

}







function lastCallbackerWrapper(){

function secondCaller(callback = () => {}){
    // mainCallerBacker() -- this line is not necceasary , as mainCallerBacker() , 
    // is a regular function , and called on line 50 as ,  secondCaller(mainCallerBacker) 
console.log("This should be called back , as the second promise ")


    function basicResponse2(){
        console.log("Hello there  , basic response 2 . ")
    }
basicResponse2()
callback()

}


// AGAIN , THE CALLBACK FUNCTION IS CALLED WITH THE REGULAR FUNCTION AS THE PARAMETER
secondCaller(mainCallerBacker) 
}










function lastCallback(callback = () => {}){ 

    console.log("This is a line from the first callback ")
    callback()
}




// AGAIN , THE CALLBACK FUNCTION IS CALLED WITH THE REGULAR FUNCTION AS THE PARAMETER
// lastCallback(lastCallbackerWrapper)

lastCallbackerWrapper(mainCallerBacker)













// Runs everything from the second line // 

//  lastCallbackerWrapper()



