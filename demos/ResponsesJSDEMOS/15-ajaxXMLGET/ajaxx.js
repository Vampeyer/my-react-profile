var httpRequest = new XMLHttpRequest();

function makeRequests() {
  httpRequest.open("GET", "https://reqres.in/api/users?page=2");
  httpRequest.onreadystatechange = handleResponse;
  httpRequest.send();
}

function handleResponse() {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      console.log("Response from server:", httpRequest.responseText);
      document.getElementById("demo").innerHTML = httpRequest.responseText;
    } else {
      console.error("Server issue or something:", httpRequest.status);
      alert("There was a problem fetching data from the server.");
    }
  }
}
/*  

AJAX stands for Asynchronous JacaScript and XMl 

AJAX can send information to a server 
AJAX can recieve informaqtion from a serve 

*/