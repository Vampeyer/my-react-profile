Promise.resolve(5)
    .then((num) => {
        console.log(`Value: ${num}`);
        throw new Error("Something went wrong!");

        // When an error is thrown , there is essentially  a 
        //break thrown , to call the error. 

/* Once the error is thrown , the next  , 
.then() statement , will not execute.   */
    })
    .then((num) => {
        console.log(`This won't run`);
    })

/*  Instead , the error is handled by using the catch statement.   */


    .catch((error) => {
        console.error(`Error: ${error.message}`);
    });