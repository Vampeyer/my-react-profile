function first(result = () => {} , item){
    console.log("The first item is , " + `${item}`)
result()
}



function second(){ 
    console.log("Second item is , the booty tang ")

}


function third(result3){ 
    console.log("Third")
    result3()
}

first(second , " The bootytang ")


function fourth(thingy){
    console.log("Second Callback being called. " )
}

fourth(third)



function  thing(){
    first(second , " The bootytang ")
    fourth(third)
}




function callingItAll(callback){
console.log("Calling it all back")
callback(); 
}

thing(callingItAll)