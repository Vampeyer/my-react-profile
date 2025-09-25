const Services = () => {
    return (
      <>
        <h2 className="mb-4 font1" style={{ textAlign: "center", marginTop:"20px" }}>
          Services
        </h2>
        <div
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <section id="profile" className="section text-center">
            <div className="flex-item-small2 card p-2 shadow-sm">
              <h4>Professional IT Services</h4>
              <p className="">Full-Stack Developer & IT Consultant</p>
              <p>
                Delivering comprehensive technology solutions with modern frameworks and industry best practices.
              </p>
  
              <div style={{ justifyContent: "center" }}>
                <ul style={{ textAlign: "left", listStylePosition: "inside" }}>
                  
                  <li>
                    <strong>Technical Consultation & IT Support</strong>
                    <ul style={{ listStylePosition: "inside", marginTop: "8px" }}>
                      <li>Strategic technology planning and architecture review</li>
                      <li>System optimization and performance troubleshooting</li>
                      <li>Infrastructure assessment and upgrade recommendations</li>
                    </ul>
                  </li>
  
                  <li style={{ marginTop: "16px" }}>
                    <strong>Web Development & Software Engineering</strong>
                    <ul style={{ listStylePosition: "inside", marginTop: "8px" }}>
                      <li>Custom web applications using React, Node.js, and modern frameworks</li>
                      <li>API development and third-party integrations</li>
                      <li>Database design and cloud deployment solutions</li>
                    </ul>
                  </li>
  
                  <li style={{ marginTop: "16px" }}>
                    <strong>UI/UX Design & User Experience</strong>
                    <ul style={{ listStylePosition: "inside", marginTop: "8px" }}>
                      <li>User-centered design and interactive prototyping</li>
                      <li>Responsive design implementation and accessibility compliance</li>
                      <li>Design system development and brand consistency</li>
                    </ul>
                  </li>
  
                  <li style={{ marginTop: "16px" }}>
                    <strong>Quality Assurance & Code Review</strong>
                    <ul style={{ listStylePosition: "inside", marginTop: "8px" }}>
                      <li>Comprehensive testing strategies and automated test implementation</li>
                      <li>Code quality audits and performance optimization</li>
                      <li>Usability testing and accessibility compliance verification</li>
                    </ul>
                  </li>
  
                  <li style={{ marginTop: "16px" }}>
                    <strong>Digital Branding & Marketing Solutions</strong>
                    <ul style={{ listStylePosition: "inside", marginTop: "8px" }}>
                      <li>Brand identity development and digital asset creation</li>
                      <li>SEO optimization and content strategy development</li>
                      <li>Marketing automation and customer engagement solutions</li>
                    </ul>
                  </li>
  
                  <li style={{ marginTop: "16px" }}>
                    <strong>Business Website Enhancement</strong>
                    <ul style={{ listStylePosition: "inside", marginTop: "8px" }}>
                      <li>E-commerce integration and secure payment processing</li>
                      <li>Analytics implementation and conversion tracking</li>
                      <li>CMS development and content management solutions</li>
                    </ul>
                  </li>
  
                  <li style={{ marginTop: "16px" }}>
                    <strong>Cybersecurity & System Protection</strong>
                    <ul style={{ listStylePosition: "inside", marginTop: "8px" }}>
                      <li>Security vulnerability assessments and penetration testing</li>
                      <li>Network security implementation and monitoring solutions</li>
                      <li>Data protection compliance and backup strategy development</li>
                    </ul>
                  </li>
  
                </ul>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  };
  
  export default Services;