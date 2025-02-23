let path = 'https://reqres.in/api/unknown/2'
let pathDiv = document.getElementById("pathId")





    // Get the raw header string





    document.getElementById('fetchButton').addEventListener('click', function() {
        var xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
        xhr.open('GET',path , true); // Setup the request

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Parse the JSON response
                var data = JSON.parse(xhr.responseText);
                var resultsDiv = document.getElementById('results');
                var resultsDiv2 = document.getElementById('results2');


                resultsDiv.innerHTML = ""; // Clear previous results

                // Display each user
           

               console.log(data)
			   
			   resultsDiv.innerText = `Name :  ${data.data.name} \n Year : ${data.data.year} \n Color: ${data.data.color}  ${data.__i}   `
           resultsDiv2.innerText = " \n xhr.responseURL :  " + xhr.responseURL  

       


            } else {
                console.error('Request failed. Returned status of ' + xhr.status );
            }
        };

        xhr.onerror = function() {
            console.error('Request failed');
        };

        xhr.send(); // Send the request
    });





