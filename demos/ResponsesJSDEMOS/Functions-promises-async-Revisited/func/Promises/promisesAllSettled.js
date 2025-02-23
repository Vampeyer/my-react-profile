Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])
.then(console.log);


// If you want to ensure that Task 1, Task 2, and Task 3 are executed
//  (even if one of them fails), you can use Promise.allSettled() 
//  instead of Promise.all(). This guarantees that all 
// promises are executed, and their results (whether fulfilled or rejected)
//  are returned.