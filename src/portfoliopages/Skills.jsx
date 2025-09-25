
const Skills = () => (
  <> 
  <div className="">
    <section id="skills" className="section text-center ">
      <h2 className=" font1">Skills</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {[ "Ai and ML" ,'JavaScript', 'CSS', 'HTML', 'React','Node.js', ' Python', ' PHP' ,'Bootstrap5.3' , 'Android Apps' , "PWA's" , "Java"].map((skill, index) => (
          <div key={index} className="card p-3 shadow-sm">
            <p className="m-0">{skill}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="skills" className="section text-center ">
    
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {["Figma" , "Blender" , "Krita" , "Git" , "Github" ,"Gitlab" , "MySQL" , "SQLite" , "PostGresSQL" ].map((skill, index) => (
          <div key={index} className="card p-3 shadow-sm">
            <p className="m-0">{skill}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="skills" className="section text-center ">
    
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {["Electron" , "Excel", 'Spreadsheets /Data', "Chart.js" ,"C"  , "Apache Tomcat" , "XAMPP" , "NGINX" ," Java", "Typescript" ,"Docker" , "SCSS" , "GraphQL" , "Angular" , "Django"].map((skill, index) => (
          <div key={index} className="card p-3 shadow-sm">
            <p className="m-0">{skill}</p>
          </div>
        ))}
      </div>
    </section>





   <section id="moreskills" className="section text-center py-5">
   <h2 className="mb-4 font1">Soft Skills</h2>
   <div className="d-flex flex-wrap justify-content-center gap-3">
     {[ 'Communication Skills' , 'Leadership' , 'Accuracy' ,' Bringing Value' ,'Teamwork' , 'Time Management'  ].map((skill, index) => (
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