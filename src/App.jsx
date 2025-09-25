import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './animations.css'
import './animationspin.css'


export const whoami = "Jacob Thompson";

import Navbar from './portfoliopages/Navbar';
import myimage from '/metech1.jpg'

import animationGear from '/animated-images/gear-icon-png.png'
import manandpc from '/animated-images/man-table.png'

const Home = () => (
  <>
  <section id="/" className="section text-center py-5">
    <h2 className="  mb-4 font1"  >Welcome</h2>
    <div className="p-4 mx-auto shadow-sm card " style={{ maxWidth: '24rem', zIndex:5 }}>
      <p>Welcome to {whoami}'s portfolio. Please explore my profile, projects, and contact info.</p>
    </div>

<img className='myimage' src={myimage} alt=" Enhanced Picture of me" />

<div className='animationContainer'>

<div> <img className='manandpc'  src={manandpc} alt="" /></div>

<img className='animationGear1' src={animationGear} alt="" />
<img className='animationGear2' src={animationGear} alt="" />
<img className='animationGear3' src={animationGear} alt="" />
</div>

  </section>
  </>
);
//    Profile imports 
import Profile from './portfoliopages/profile';
import  Skills from './portfoliopages/Skills';

import Projects from './portfoliopages/Projects';
import Contact from './portfoliopages/Contact';
import About from './portfoliopages/About';
import Services from './portfoliopages/Services';
import Footer from './portfoliopages/Footer';


import { BackspaceWrapper } from './components/BackspaceComponent';

//  Project Imports
import Project1 from './projects/projects1/Project1';
import Project2 from './projects/projects1/Project2'
import Project3 from './projects/projects1/Project3';
import Project4 from './projects/projects1/Project4';
import Project5 from './projects/projects1/Project5';

import Project6 from './projects/moreprojects2/Project6';
import Project7 from './projects/moreprojects2/Project7';
import Project8 from './projects/moreprojects2/Project8';
import Project9 from './projects/moreprojects2/Project9';
import Project10 from './projects/moreprojects2/Project10';

import Project11 from './projects/morprojects3/Project11';
import Project12 from './projects/morprojects3/Project12';
import Project13 from './projects/morprojects3/Project13';
import Project14 from './projects/morprojects3/Project14';
import Project15 from './projects/morprojects3/Project15';


const App = () => {


  return (<>

  <BrowserRouter>
 
    <Navbar />

    <BackspaceWrapper>
    <Routes>
      <Route path="/" element={<Home />} />
     <Route path="/profile" element={<Profile />} /> 
      <Route path="/skills" element={<Skills />} />

      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />

      <Route path="/project/1" element={<Project1 />} />
      <Route path="/project/2" element={<Project2 />} />
      <Route path="/project/3" element={<Project3 />} />
      <Route path="/project/4" element={<Project4 />} />
      <Route path="/project/5" element={<Project5 />} />

      <Route path="/project/6" element={<Project6 />} />
      <Route path="/project/7" element={<Project7 />} />
      <Route path="/project/8" element={<Project8 />} />
      <Route path="/project/9" element={<Project9 />} />
      <Route path="/project/10" element={<Project10 />} />

      <Route path="/project/11" element={<Project11 />} />
      <Route path="/project/12" element={<Project12 />} />
      <Route path="/project/13" element={<Project13 />} />
      <Route path="/project/14" element={<Project14 />} />
      <Route path="/project/15" element={<Project15 />} /> 

{/* Root routing ?  */}
      <Route path="*"  element={<Home />} />

    </Routes>

    </BackspaceWrapper>
  </BrowserRouter>
  <Footer />
  </>)
};

export default App;