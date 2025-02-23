// Fetch Then , with templating , 
// using classlist. 


let path = 'https://reqres.in/api/users?page=2'

document.getElementById('loadUsers').addEventListener('click', function() {
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const userList = document.getElementById('userList');
            userList.innerHTML = ''; // Clear previous results

            data.data.forEach(user => {
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
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});