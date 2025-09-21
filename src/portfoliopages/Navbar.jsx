import { NavLink } from "react-router-dom";



const Navbar = () => (
    <>
    <nav className="navbar  navbar-dark bg-dark nav-container ">
      <div className="container-fluid">
     <h6 className='font1'> <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}  to="/profile">
      Welcome to Jacobs Profile
  </NavLink></h6>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" navbar-collapse show nav-container" id="navbarNav">  {/* The show tag , makes the navbar show by default */}
          <ul className="navbar-nav ms-auto flex-row flex-wrap gap-3">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `navv  ${isActive ? 'green' : ''}`} 
              to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({ isActive }) => `navv  ${isActive ? 'green' : ''}`} 
              to="/profile">Profile</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/skills">Skills</NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink className={({ isActive }) => `navv ${isActive ? 'green' : ''}`} 
              to="/projects">Projects</NavLink>

            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `navv ${isActive ? 'green' : ''}`} 
              to="/contact">Contact</NavLink>

            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `navv ${isActive ? 'green' : ''}`} 
              to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );

  export default Navbar