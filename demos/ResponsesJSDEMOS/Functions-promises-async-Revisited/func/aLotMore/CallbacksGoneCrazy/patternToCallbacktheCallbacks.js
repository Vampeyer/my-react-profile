

////  IMPORTANT WAY TO WRITE CALLBACKS , 
// IF THE CASE OF , 
// THE CALLBACK NOT BEING PRESENT.  
//    \/\/

function one(callback = () => {}){
    console.log(1)
    callback()
}






// PATTERN TO CALLBACK THE CALLBACKS. 


function another(callback9 , one){
console.log("First  Callback ")
    callback9(one)

}


// another(one)


function another2(callback8, another){ 
    console.log(" Second Callback"); 
  
    callback8(another)
}


function another4(callback7, another){ 
    console.log(" Tell me something good  "); 
  
    callback7(another)
}



function callItAll(one, another , another2 , another4){
    one()
    another(one)
    another2(one)
    another4(one)
    console.log("Final response")
}


callItAll(one, another , another2 , another4)


