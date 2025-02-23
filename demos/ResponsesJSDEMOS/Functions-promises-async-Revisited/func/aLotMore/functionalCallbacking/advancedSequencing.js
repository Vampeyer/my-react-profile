function sum(num1 , num2){
    return num1 + num2
}

console.log(sum(90,90))


function divide(num1 , num2){
    return num1 / num2
}

console.log(divide(90,30))


function moreRandom(num1 , num2){
    let num  = Math.random(divide(num1 , num2 / 5.54) + sum(num1 , num2  + 24))
    return Math.floor(num * 100)
}

console.log(moreRandom(8,80))







function moreRandom2(){
    let num2 = Math.random(moreRandom())
    return Math.floor(num2 * 100)
}

function moreRandom3(){
    let num3 = Math.random(moreRandom2())
    return Math.floor(num3 * 100)
}


console.log( "  a pretty random number "  ,  moreRandom3())


function veryRandomNumber(number1){

let numberHolder0 = Math.random(number1)
let numberHolder1 = Math.random(number1)
let numberHolder2 = Math.random(number1)
let numberHolder3 = Math.random(number1)
let numberHolder4 = Math.random(number1)

let n1 = Math.floor(numberHolder0)
let n2 = Math.floor(numberHolder1)
let n3 = Math.floor(numberHolder2)
let n4 = Math.floor(numberHolder3)
let n5 = Math.floor(numberHolder4)

let result = n1 + n2 + n3 + n4 + n5 

let endNum1 = result / 5


if(endNum1 < 100){ 
 endNum1 = result / 1.5
}


}

veryRandomNumber(50)