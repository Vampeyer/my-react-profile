


function displayer(some){ 
    console.log(` The total is  :   ${some}`)
}

function add(num1, num2 , theCallback){
    let total = num1 + num2
    theCallback(total)
}

add(3,5,displayer)
//  The total is  :   8







