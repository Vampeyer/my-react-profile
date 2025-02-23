// import axios from 'axios'; //for webpack 

// Un comment the code above to build with webpack ! 

const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');

userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userForm);
    const searchParams = new URLSearchParams(formData);
    const url = 'https://reqres.in/api/users?' + searchParams.toString();

    axios.get(url)
        .then(response => {
            const data = response.data; // Axios automatically parses JSON
            userList.innerHTML = '';

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
            console.error('Request failed:', error);
        });
});