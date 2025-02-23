the XMLHttpRequest Object 

AJAX uses the XMLHttpRequest object to send and recieve 
data from the server. 

The code below will create an XMLHttpRequest object: 

var variableName = new XMLHttpRequest(); 

for example 

var = theRequest = XMLHttpRequest(); 

the XMLHttpRequest Object Properties  


onreadystatechange    // an event handler that is called whenever the readyState shanges properties 

readyState  // this returns the ready state of the request 

responseType // returns value that defines the response type 

responseText // returns the text form a server ,,, following a request being sent 

status    // returns the numerical HTTP status code of the XMLHttpRequest's response 

statusText   // returns a strnig containing the response string returned from the server .  


===================================================================================== 
 
XMLHttpRequest object methods  
____________

open()   // initializes a request 

send()       // Sends a request 

abort()    // Aborts a request if it hass already been sent

getAllresponseHeaders    // returns a response of all the headers . 

getAllresponsHeaders  // returns a string containing the text of the specifiefied heder.  

setRqwuestsHeader()   //b Sets the valur of an HTTP request header  .  

