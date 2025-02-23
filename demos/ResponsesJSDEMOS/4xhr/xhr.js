// Define the XMLHttpRequest
var xhr = new XMLHttpRequest();
var requestUrl = "https://api.restful-api.dev/objects/4"; // Ensure this URL is set to your desired endpoint

// Get the element where the response will be loaded
let loaded = document.getElementById("loaded");

// Open the request
xhr.open("GET", requestUrl, true);

// Set up the onload event handler
xhr.onload = function() {
    // Check if the request was successful
    if (xhr.status === 200) {
        // Log the response for debugging
        console.log("Response:", xhr.responseText);
        
        // Update the content of the 'loaded' element with the response text
        loaded.innerText = xhr.responseText;

        // Additional handling of the data can be done here if needed
    } else {
        // Log errors if the request wasn't successful
        console.error("Request failed with status:", xhr.status);
        console.error("Response:", xhr.responseText);
        
        // Optionally, update the 'loaded' element with an error message
        loaded.innerText = "Error: Request failed with status " + xhr.status;
    }
};

// Set up the onerror event handler
xhr.onerror = function() {
    console.error("Network error occurred");
    // Update the 'loaded' element with a network error message
    loaded.innerText = "Error: Network error occurred";
};

// Send the request
xhr.send();