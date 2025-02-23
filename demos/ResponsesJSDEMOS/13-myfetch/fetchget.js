
let theid = document.getElementById("theId")

fetch( 'https://reqres.in/api/users?page=2')
.then(response => { 
   if(!response.ok){
      throw new Error("network issue - 401+")
   }
 
   return response.json()
})

.then(data => { 
   

   console.log(data)
theid.innerHTML = ` 
<h1> Page :  ${data.page}  </h1> 
<h1> ${data.page}  </h1>
<h1> ${JSON.stringify(data)}  </h1>
<h1> ${data.data[0].email} </h1>
<p> \${data.data[0].email}  / The first user </p> 
<img src="${data.data[0].avatar}" alt="">
`


});






