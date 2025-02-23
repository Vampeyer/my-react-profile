// Using an Anonymous Function as a Callback
// Instead of defining a separate function like
//  sayGoodbye, we can pass an anonymous function
//   directly as the callback. An anonymous function
//  is a function without a name, defined inline.



function greet(callback = () => {}){
    console.log("Hello there world , my name is Jim" )
}


function sayHello( callback){
    console.log("Okay then , lets greet the user ")
    callback()
   
}

// !st 
sayHello(greet)



//2nd
function allCall(sayHello){
  
console.log("Last")
}
// sayHello()

//3rd
allCall(greet)