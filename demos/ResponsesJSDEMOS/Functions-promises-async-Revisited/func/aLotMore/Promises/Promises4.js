

let x = 0
let basicPromise = new Promise(function(resolve,reject){


    // x++ // There was an error
if (x == 0){
    resolve()}
    else{
    reject()
    }

})



basicPromise.then( 
    function
    (resolve){ 
        console.log("resolved , next")
    },


    function(error) { console.log("There was an error") }
)

