


function respond(response){
    console.log(response)
}


function sum(num1 , num2){
    return num1 + num2
}


// Basic Sequencing. 

respond("Merrrrr")
respond(sum(3,5))

let thing  = sum(305430,54353)
respond(thing)


//Advanced Chaninng 1 




function sumCallback(num1, num2){
    return respond(sum(num1, num2))
}



function l(num1, num2){
    sumCallback(num1, num2)
}


l(3,8)


// Advanced Chaining with a return statement. 




function addTwo(firstNum , secondNum){
 return l(firstNum , secondNum)
}


addTwo(1 ,4)