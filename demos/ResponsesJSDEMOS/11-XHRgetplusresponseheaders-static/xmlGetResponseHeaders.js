    // Function to parse headers string into an object
    function parseHeaders(headersString) {
        const headers = {};
        const headerLines = headersString.trim().split(/[\r\n]+/);
        
        headerLines.forEach(function(line) {
          const parts = line.split(': ');
          const header = parts.shift();
          const value = parts.join(': ');
          headers[header] = value;
        });
        
        return headers;
      }
      const url = 'https://reqres.in/api/unknown/2';
      let theURL = document.getElementById("urlString")
        theURL.innerText = url
      // Function to fetch data from the API and display headers and data
      function fetchData() {
  
        const xhr = new XMLHttpRequest();
  
        // Initialize a GET request
        xhr.open('GET', url, true);
        
        // Optional: Set request headers if needed
        // xhr.setRequestHeader('Accept', 'application/json');
        
        // Configure what happens on successful data submission
        xhr.onload = function() {
          const headersElement = document.getElementById('headers');
          const dataElement = document.getElementById('data');
          
          if (xhr.status >= 200 && xhr.status < 300) {
            // Retrieve all response headers
            const headersString = xhr.getAllResponseHeaders();
            headersElement.textContent = headersString;
            
            // Optionally, parse headers into an object
            const headers = parseHeaders(headersString);
            console.log('Parsed Headers:', headers);
            
            // Retrieve and display specific header if needed
            const contentType = xhr.getResponseHeader('Content-Type');
            console.log('Content-Type Header:', contentType);
            
            // Parse and display the response data
            try {
              const responseData = JSON.parse(xhr.responseText);
              dataElement.textContent = JSON.stringify(responseData, null, 2);
            } catch (e) {
              dataElement.textContent = 'Error parsing JSON response.';
              console.error('JSON Parsing Error:', e);
            }
          } else {
            headersElement.textContent = `Request failed with status: ${xhr.status}`;
            dataElement.textContent = 'No data available.';
            console.error(`Request failed with status: ${xhr.status}`);
          }
        };
        
        // Handle network errors
        xhr.onerror = function() {
          const headersElement = document.getElementById('headers');
          const dataElement = document.getElementById('data');
          headersElement.textContent = 'Network Error';
          dataElement.textContent = 'Failed to fetch data due to a network error.';
          console.error('Network Error');
        };
        
        // Send the request
        xhr.send();
        
        // Optional: Update UI to indicate loading state
        document.getElementById('headers').textContent = 'Loading headers...';
        document.getElementById('data').textContent = 'Loading data...';
      }
  
      // Add event listener to the button
      document.getElementById('loadButton').addEventListener('click', fetchData);