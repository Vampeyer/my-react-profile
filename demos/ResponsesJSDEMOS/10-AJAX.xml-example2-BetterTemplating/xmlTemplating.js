// xmlTemplating.js

let path = 'https://reqres.in/api/users?page=2';

document.getElementById('loadUsers').addEventListener('click', function() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Set up the request
    xhr.open('GET', path, true); // Method, URL, and async flag

    // Define what happens on successful data retrieval
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Parse the JSON response
            const response = JSON.parse(xhr.responseText);
            const userList = document.getElementById('userList');
            userList.innerHTML = ''; // Clear previous results

            // Loop over the user data and display it
            response.data.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');

                userDiv.innerHTML = `
                    <div class="user-container">
                        <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" width="50" height="50">
                        <div>
                            <strong>${user.first_name} ${user.last_name}</strong><br>
                            Email: ${user.email}
                        </div>
                    </div>
                `;
                userList.appendChild(userDiv);
            });
        } else {
            console.error('Request failed with status:', xhr.status);
        }
    };

    // Define what happens on request error
    xhr.onerror = function() {
        console.error('There was a problem with the XMLHttpRequest.');
    };

    // Send the request
    xhr.send();
});