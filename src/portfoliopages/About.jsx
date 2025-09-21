import { whoami } from "../App";

const About = () => (
  <section id="about" className="section text-center py-5">
    <h2 className="mb-4 font1">About</h2>
    <div className="card p-4 mx-auto shadow-sm" style={{ maxWidth: '24rem' }}>
      <h4>About {whoami}</h4>
      <p>Experienced developer with a love for creating efficient, scalable web solutions.</p>
    </div>
  </section>
);

export default About