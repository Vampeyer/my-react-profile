

let  x = 0
let basicPromise = new Promise(function(resolve, reject){

if ( x > 0){
function doer(resolve){
    console.log("This code runs when the promise is resolved.")
}
}else
function donter(reject){ 
    console.log("This code runs when the promise is resolved. ")
}


resolve()
reject()
})


.catch(()=>{console.log("Run this on reject. ")})

basicPromise.then(
    function(resolve){
console.log("That was resolved" )
    }
)