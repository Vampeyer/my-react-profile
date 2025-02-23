Promise.resolve("Task 1 completed")
  .then(console.log)
  .then(() => Promise.resolve("Task 2 completed"))
  .then(console.log)
  .then(() => Promise.reject(new Error("Task 3 failed")))
  .catch(console.error);
  
  
  Promise.reject("Resolve again ")
  .then(() => Promise.reject(new Error("Task 4 failed")))
  .catch(console.error);