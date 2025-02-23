// Function Sequence
// JavaScript functions
//  are executed in the sequence 
//  they are called. Not in the sequence
//   they are defined.

// This example will end up displaying 
// "Wazzazap! "
function myDisplayer(some) {
console.log(some + " is the input ") 
}
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();