
function makeRequests() { 

    var httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status >= 200 && httpRequest.status < 300) { // Success range
                // Parse the JSON response
                var responseObject = JSON.parse(httpRequest.responseText);
    
                // Access data from the response object
                var name = responseObject.name;
                var age = responseObject.age;
    
                // Update the HTML with the parsed data
                document.getElementById("demo").innerHTML = "Name: " + name + "<br>Age: " + age;
    
            } else {
                // Handle errors more specifically
                document.getElementById("demo").innerHTML = "Error: Request failed with status code " + httpRequest.status;
                console.error("Request failed with status code:", httpRequest.status);
            }
        }
    };
    
    httpRequest.open("POST", "https://reqres.in/api/users", true);
    httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var formData = 'name=John&age=30';
    httpRequest.send(formData);
    }
    