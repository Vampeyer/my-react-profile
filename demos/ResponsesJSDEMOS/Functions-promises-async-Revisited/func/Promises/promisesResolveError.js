// Using an Error Object for Better Error Logging
// If you want to see an error code, stack trace, or a more descriptive error message, you should reject the promise with an Error object instead of a plain string.

// Here is the updated example:


Promise.resolve("Task 1 completed")
  .then(console.log)
  .then(() => Promise.resolve("Task 2 completed"))
  .then(console.log)
  .then(() => Promise.reject(new Error("Task 3 failed")))
  .catch(console.error);