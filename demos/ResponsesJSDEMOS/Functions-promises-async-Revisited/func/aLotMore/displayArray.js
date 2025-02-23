const myArrayold = ['apple', 'banana', 'cherry', 'date'];
let index = 0;

let myArray = [  "We define an array myArray containing the ","keys we want to iterate through.",
"The index variable" ,
'keeps track of the current position" in the array',
"The display Key function checks if the index is within the",
"array's length, then it logs the current key in ",
"the console and increments the index ",
"We use setInterval to call the displayKey function every 2000 milliseconds (2 seconds).",
"When you run this code,"," it will display each element of the myArray in the console ","with a 2-second interval." ]


function arrayIterator(myArray, time){
function displayKey() {
    if (index < myArray.length) {
        console.log(myArray[index]);
        index++;
    }
}

setInterval(displayKey, `${time}`);
}

arrayIterator(myArray, 300)