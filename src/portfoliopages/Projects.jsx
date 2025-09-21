
import { NavLink } from 'react-router-dom';

export const projects = [
  { id: '1', title: 'Project 1', desc: 'Client side Authentication system, built with React.' },
  { id: '2', title: 'Project 2', desc: 'Inventory Management System' },
  { id: '3', title: 'Project 3', desc: 'Supply Chain Management System for vendors and products' },
  { id: '4', title: 'Project 4', desc: 'I.T.  Support Site' },
  { id: '5', title: 'Project 5', desc: 'Embedded Engineering Course site ' },

  { id: '6', title: 'Project 6', desc: 'CSS Clock' },
  { id: '7', title: 'Project 7', desc: 'Scientific Calculator' },
  { id: '8', title: 'Project 8', desc: 'React to do list' },
  { id: '9', title: 'Project 9', desc: 'Admin platform too display data' },
  { id: '10', title: 'Project 10', desc: 'Ai Real-time Chat Application' },

  { id: '11', title: 'Project 11', desc: ' Bakery Website' },
  { id: '12', title: 'Project 12', desc: 'NFT Sepolia site' },
  { id: '13', title: 'Project 13', desc: '88 Key Piano ' },
  
  { id: '14', title: 'Project 14', desc: 'Figma and Figjam Frameworks' },
  { id: '15', title: 'Project 15', desc: 'P5.js and ML.js Projects'} 
];

const Projects = () => (
  <>
    <section id="portfolio" className="section text-center py-5">


      <h2 className="mb-4 font1">Projects</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {projects.map((project) => 
               // Conditionaly rendering projects , 1 - 5 
          parseInt(project.id) >= 1 && parseInt(project.id) <= 5 && (
            <div key={project.id} className="card p-3 shadow-sm" style={{ width: '18rem' }}>
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.desc}</p>
              <NavLink to={`/project/${project.id}`} className="btn btn-primary">View Details</NavLink>
            </div>
          )
        )}
        {/* End projects.map  conditional id template rendering loop  */}
      </div>

      <div style={{marginTop:"30px", border: "2px solid white"}}></div>

      <h2 className="mb-4 font1">MORE Projects</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {projects.map((project) => 
        // Conditionaly rendering projects , 6 - 9 
          parseInt(project.id) >= 6 && parseInt(project.id) <= 10 && (
            <div key={project.id} className="card p-3 shadow-sm" style={{ width: '18rem' }}>
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.desc}</p>
              <NavLink to={`/project/${project.id}`} className="btn btn-primary">View Details</NavLink>
            </div>
          )
        )}
      </div>
        {/* End projects.map  conditional id template rendering loop  */}




        <div style={{marginTop:"30px", border: "2px solid white"}}></div>

<h2 className="mb-4 font1">MORE Projects</h2>
<div className="d-flex flex-wrap justify-content-center gap-3">
  {projects.map((project) => 
  // Conditionaly rendering projects , 6 - 9 
    parseInt(project.id) >= 11 && parseInt(project.id) <= 15 && (
      <div key={project.id} className="card p-3 shadow-sm" style={{ width: '18rem' }}>
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.desc}</p>
        <NavLink to={`/project/${project.id}`} className="btn btn-primary">View Details</NavLink>
      </div>
    )
  )}
</div>
  {/* End projects.map  conditional id template rendering loop  */}


    </section>
  </>
);

export default Projects;