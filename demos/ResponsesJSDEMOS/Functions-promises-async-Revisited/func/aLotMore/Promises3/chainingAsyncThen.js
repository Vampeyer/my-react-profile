
async function doSomething(){
    console.log("Something first done been did")
}


doSomething()
  .then(() => {
    console.log("Do this");
    throw new Error("Something failed");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });
  



  function f(){console.log("Executed1")}
  f()
  function f2(){console.log("Executed2")}
  f2()
  
  async function f3(){console.log("Executed3")}

  f3()

  .then(()=>{
    console.log("f3 was ran ")
  })

  .then(()=>{
    console.log("f4 was ran ")
  })

  .then(()=>{
    console.log("f5 was ran ")
  })