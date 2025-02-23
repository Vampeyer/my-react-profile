document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('https://reqres.in/api/users?page=2')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            var resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // Clear previous results

            // Display each user
            data.data.forEach(function(user) {
                var userDiv = document.createElement('div');
                userDiv.innerHTML = `
                    <h3>${user.first_name} ${user.last_name}</h3>
                    <p>Email: ${user.email}</p>
                `;
                resultsDiv.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});