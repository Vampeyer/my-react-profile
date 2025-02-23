try {
    Promise.resolve("Task 1 completed")
      .then(console.log)
      .then(() => Promise.resolve("Task 2 completed"))
      .then(console.log)

      .then(() => Promise.reject("Task 3 failed : This is the error message"))
      .catch(console.error);
  } catch (e) {
    console.error("Synchronous error:", e);
  }