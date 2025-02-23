
    Promise.resolve("Task 1 completed")
      .then(console.log)
      .then(() => Promise.resolve("Task 2 completed"))
      .then(console.log)

      .then(() => Promise.reject("Task 3 failed : This is the error message"))

.then(() => Promise.resolve())
.catch(console.error);
// 2./ 
//-----------------------------------------------------------------------
let error1 = new Error("This was an error  , that was thrown first , \n because its written synchronously")
console.error(error1)
//---------------------------------------------------------------------


// Manually throwing an error in a event of code ,  
// would look like this. 

// If there was no try / catch block , 
// This would throw an error


//3/.
//-------------------------------------------------------------
//throw new Error("Something went wrong first ! ")
//------------------------------------------------------------


/* 
However in our code here , we will be throwing an error ,  
via the try / catch , implementation of error handling , where  

you just write all of your code in a try  / catch , 
and check for the error in 
the catch statement , like below. 



Here , we are passing the event into the catch option , 
via , catch(e)

and , we are logging the event  (e) as an error , via 

console.error(e)
*/

// Therefore , Catching the event with a try catch , will also produce the same results. 




  // The code here , as is should log an error similar to this , 
/*
  // [UnhandledPromiseRejection: This error originated either by
   throwing inside of an async function without a 
   catch block, or by rejecting a promise which was not handled
    with .catch(). 
    The promise rejected with the reason "Task 3 failed :
    
    This is the error message".] {
  code: 'ERR_UNHANDLED_REJECTION'

  */