//xmlTemplatedResponse.js



let path = 'https://reqres.in/api/users?page=2'

function pathSwitch(path){

pathDiv.innerText = input.value 
input.value = path
return path
}



let pathDiv = document.getElementById("pathId")
pathDiv.innerText = path

let input = document.getElementById("pathInput")








    document.getElementById('fetchButton').addEventListener('click', function() {
        var xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
        xhr.open('GET',path , true); // Setup the request

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Parse the JSON response
                var data = JSON.parse(xhr.responseText);
                var resultsDiv = document.getElementById('results');
                resultsDiv.innerHTML = ''; // Clear previous results

                // Display each user
                data.data.forEach(function(user) {
                    var userDiv = document.createElement('div');
                    userDiv.innerHTML = `
                        <h3>${user.first_name} ${user.last_name}</h3>
                        <p>Email: ${user.email}</p>
                        <img src="${user.avatar}" > 
                    `;
                    resultsDiv.appendChild(userDiv);
                });
            } else {
                console.error('Request failed. Returned status of ' + xhr.status);
            }
        };

        xhr.onerror = function() {
            console.error('Request failed');
        };

        xhr.send(); // Send the request
    });