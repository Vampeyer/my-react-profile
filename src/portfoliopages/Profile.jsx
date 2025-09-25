import { whoami } from "../App";
import Skills from "./Skills";
import Certs from "./Certifications";

const Profile = () => (
  <>



  
<div className="flexing"> 
    <section id="profile" className="section text-center ">
      <h2 className="mb-4 font1">Profile</h2>


      <div className="card p-4 mx-auto shadow-sm" style={{ maxWidth: '24rem' }}>
        <h4>{whoami}</h4>
        <p className="">Frontend Developer</p>
        <p>Passionate about building clean, user-friendly web apps with modern technologies.</p>
      </div>
    </section>
    </div>

    <div className="whiteline" ></div>

<Skills/>
<Certs/>
    </>
  );
  export default Profile