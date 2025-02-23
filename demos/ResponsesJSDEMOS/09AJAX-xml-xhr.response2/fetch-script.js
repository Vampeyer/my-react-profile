// Fetch data from the API
fetch('https://reqres.in/api/unknown/2')
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Get all headers as an iterator
    const headersIterator = response.headers.entries();

    // Convert the iterator to an array and log the headers
    const headersArray = Array.from(headersIterator);
    console.log('Response Headers:', headersArray);

    // Optionally, convert the headers to an object for easier access
    const headersObject = Object.fromEntries(headersArray);
    console.log('Parsed Headers:', headersObject);


    var resultsDiv3 = document.getElementById('results3');
console.log(headersIterator) 



    resultsDiv3.innerText = "HEADERS  , \n" + headersArray  

    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Get the element where we want to display the data
    const dataContainer = document.getElementById('data-container');

    // Clear the loading message
    dataContainer.innerHTML = '';

    // Create HTML elements to display the data
    const h2 = document.createElement('h2');
    h2.textContent = `Resource: ${data.data.name}`;

    const p1 = document.createElement('p');
    p1.textContent = `Year: ${data.data.year}`;

    const p2 = document.createElement('p');
    p2.textContent = `Color: ${data.data.color}`;

    const p3 = document.createElement('p');
    p3.textContent = `Pantone Value: ${data.data.pantone_value}`;

    // Append the elements to the container
    dataContainer.appendChild(h2);
    dataContainer.appendChild(p1);
    dataContainer.appendChild(p2);
    dataContainer.appendChild(p3);
  })
  .catch(error => {
    // If there's an error, display an error message
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = `<p>Error loading data: ${error.message}</p>`;
  });