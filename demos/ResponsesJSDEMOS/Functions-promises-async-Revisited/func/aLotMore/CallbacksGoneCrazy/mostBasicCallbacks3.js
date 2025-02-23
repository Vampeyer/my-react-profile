

////  IMPORTANT WAY TO WRITE CALLBACKS , 
// IF THE CASE OF , 
// THE CALLBACK NOT BEING PRESENT.  
//    \/\/

function one(callback = () => {}){
    console.log(1)
    callback()
}




function two(){
    console.log(2)

 
}
function three(){
    console.log(3)

}

function four(){
    console.log(4)
}


one(two);
three();
one(four)
;one()  // cASE WHERE THE CALL BACK , IS NOT PRESENT.  
// SO IN THE PARAM , WE WRITE EQUAL TO  === () => {}
// sO IT DEFAULTS OUT. 






// PATTERN TO CALLBACK THE CALLBACKS. 


function another(callback9 , one){
console.log("Another One")
    callback9()
    one()
}


another(three , one)