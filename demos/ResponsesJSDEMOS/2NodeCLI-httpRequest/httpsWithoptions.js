// NODE HTTPS request with header options available

const https = require('https');
const URL = require('url');
const querystring = require('querystring');

const fetchUsers = () => {
  const options = {
    hostname: 'reqres.in',
    port: 443,
    path: '/api/users?page=2',
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });


    

    res.on('end', () => {
      console.log(JSON.parse(data));  // this code is not parsed automatically , 
                               // so JSON parse this one like so here. 



    });
  });




  req.on('error', (error) => {
    console.error('Error fetching users:', error);
  });

  req.end();
};

fetchUsers();

