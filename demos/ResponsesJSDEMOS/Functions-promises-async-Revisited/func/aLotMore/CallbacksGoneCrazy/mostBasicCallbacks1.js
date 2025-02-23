

function response(callback){
    console.log("Hello there world , this is the promise being called back ")
    callback()
}



function basicFunc(){
    console.log("Hello there ")
console.log("World")
}

basicFunc() // This is how the function would normally be called and ,  


response(basicFunc)// This is how to call that function , in a call back function. 