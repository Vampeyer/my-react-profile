

let x = 1
let myPromise = new Promise(function myPromise(resolve, reject){


if( x == 0 ){
resolve()}

else{
    reject()
}
})
myPromise.then(
    function (value){console.log("Resolved the promise ")},

    function (error) { console.log("The promise was an error ") }
)








