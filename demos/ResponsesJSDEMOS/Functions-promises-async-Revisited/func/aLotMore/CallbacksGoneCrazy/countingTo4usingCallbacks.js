

function one(callback){
    console.log(1)
    callback()
}

function two(){
    console.log(2)
 
}
function three(callback){
    console.log(3)
    callback()
}

function four(){
    console.log(4)
}
one(two)






