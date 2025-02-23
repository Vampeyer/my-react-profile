
const url2 = 'https://api.restful-api.dev/objects/4'
const url = 'https://reqres.in/api/users/2';
const xhr = new XMLHttpRequest();


let loaded = document.getElementById("loaded")

xhr.open('GET', url, true);

xhr.onload = function () {
  if (xhr.readyState === 4) { // Request is done
    if (xhr.status === 200) { // Successful response

      let data1 = JSON.stringify(xhr.response)
      let data2 = this.response
      let data3 = JSON.parse(data1)
      loaded.innerText = data3


      console.log('Response:', JSON.parse(xhr.responseText));
    } else {
      console.error('Error:', xhr.status, xhr.statusText);
    }
  }
};

xhr.send();