try {
    Promise.resolve("Task 1 completed")
      .then(console.log)
      .then(() => Promise.resolve("Task 2 completed"))
      .then(console.log)

      .then(() => Promise.reject("Task 3 failed : This is the error message"))
   

/*
Here , we are passing the event into the catch option , 
via , catch(e)

and , we are logging the event  (e) as an error , via 

console.error(e)
*/

// Therefore , Catching the event with a try catch , will also produce the same results. 


  } catch (e) {
    console.error("Synchronous error:", e);
  }

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