const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5);
        console.log("Resolved first ")
    }, 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(10);
        console.log("Resolved Second")
    }, 2000);
});

async function addPromises(promise1, promise2) {
    try {
        const value1 = await promise1;
        const value2 = await promise2;
        return value1 + value2;
    } catch (error) {
        console.error(error);
    }
}

addPromises(promise1, promise2)
    .then((result) => {
        console.log(` The sum of two number is:${result}`);
    })
    .catch((error) => {
        console.error(error);
    });