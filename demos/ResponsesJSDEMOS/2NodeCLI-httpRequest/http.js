// NODE HTTP request to display in the console

const https = require('https'); // Built-in module for making HTTPS requests

const url = 'https://reqres.in/api/users?page=2';

// Make the GET request
https.get(url, (res) => {
  let data = '';

  // Listen for data chunks
  res.on('data', (chunk) => {
    data += chunk; // Append data chunks to `data`
  });

  // When the entire response is received
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(data); // Parse the JSON response
      console.log('Response:', parsedData);
    } catch (error) {
      console.error('Error parsing JSON:', error.message);
    }
  });

}).on('error', (error) => {
  // Handle any errors with the request
  console.error('Error with request:', error.message);
});