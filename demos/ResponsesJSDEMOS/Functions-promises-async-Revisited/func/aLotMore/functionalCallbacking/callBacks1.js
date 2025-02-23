

// Using a callback, you could 
// call the calculator function (myCalculator) with a
//  callback (myCallback), and let th
//  calculator function run the callback after the 
//  calculation is finished:

// ex 0 


 function myDisplayer(some) {
    console.log(some)
  }
 function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);






// ex-1

function display(thing){
console.log(thing)
}

function saySomething(somethingElse , returner){
  return display(somethingElse + " and something else to say , is calledback ")
 
}


saySomething( " something first called ,  " , display("then")  )





// function callItAllBack(saySomething() , myCalculator(10,20,display){
//     saySomething("spimellis") 
    
// })