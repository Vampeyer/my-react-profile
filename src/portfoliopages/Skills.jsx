
const Skills = () => (
  <> 
  <div className="">
    <section id="skills" className="section text-center py-5">
      <h2 className="mb-4 font1">Skills</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {[ 'JavaScript', 'CSS', 'HTML', 'React','Node.js' , ' python',].map((skill, index) => (
          <div key={index} className="card p-3 shadow-sm">
            <p className="m-0">{skill}</p>
          </div>
        ))}
      </div>

      
    </section>
   <section id="moreskills" className="section text-center py-5">
   <h2 className="mb-4 font1">More Skills</h2>
   <div className="d-flex flex-wrap justify-content-center gap-3">
     {['Python' , "Krita" , "And such"].map((skill, index) => (
       <div key={index} className="card p-3 shadow-sm">
         <p className="m-0">{skill}</p>
       </div>
     ))}
   </div>
 </section>
 </div>


<div className="whiteline" ></div>

 </>
);
export default Skills 