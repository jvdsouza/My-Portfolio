import React from "react";
import './Main.css';
// core components
// import Footer from "components/Footer/Footer.jsx";

class MainBody extends React.Component {
  render() {
    return (
        <div className = "main-body">
          <div className="info-card" id="About">
            <h2>About Me</h2>
              <p>
                I am a young, motivated and determined <span className="About-highlight">self-taught</span> developer with skills 
                in <span className="About-highlight">full-stack Javascript Web developement, Software Engineering</span>, and a Graduate of <span className="About-highlight">Civil Engineering (Honours) from Monash University</span>. 
              </p>
              <p>
                Having worked in various areas I have gained numerous soft skills. These areas such as Retail, Geotechnical Engineering, and
                Traffic Engineering have pushed me to work on my abilities outside just solving problems. However I find my heart remains with computer science and 
                software development. Currently I am a Coding Mentor in <span className="About-highlight">Python</span> for John Monash Science 
                School and putting my best in helping <span className="About-highlight">teach young teenagers in year 10 and year 11 about computer science</span>.
              </p>
              <p>
                I plan on continuing my self development in <span className="About-highlight">computer science</span>, <span className="About-highlight">software engineering</span>,
                and <span className="About-highlight">web development</span>.
                I am also looking for new opportunities to challenge myself and the knowledge I have procured
                from the various courses and resources I have taken and read, further developing my extensive
                knowledge, such as by taking on <a className="About-highlight" href="#Projects">projects</a> myself, in teams or open source projects.
              </p>
                My current skillset consists of:
                <div>
                  <ul>
                    <li>Javascript</li>
                    <li>ES6</li>
                    <li>ReactJs</li>
                    <li>NodeJs and Express</li>
                    <li>Databases such as MongoDB and PostgreSQL</li>
                    <li>HTML5 and CSS3</li>
                    <li>Python</li>
                    <li>and many more libraries for Javascript and Python</li>
                  </ul>
                  <span>And planning to learn:</span>
                  <ul>
                    <li>GraphQL + Apollo + Prisma</li>
                    <li>Agile development</li>
                    <li>Amazon Web Services (AWS)</li>
                    <li>Redis</li>
                    <li>Jest Testing</li>
                    <li>CI/CD</li>
                    <li>Docker + Docker Compose</li>
                    <li>Rust + Web Assembly</li>
                    <li>Electron</li>
                    <li>and open to anything else</li>
                  </ul>
                </div>
              <p>
                I am also <span className="About-highlight">available for hire!</span>
              </p>
          </div>

          <div className="info-card" id="Projects">
            <h2>Projects</h2>
            <table>
              <tbody>
                <tr>
                  <td className="Underline">
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://jasonsveryownblog.herokuapp.com/">
                      Personal Blog
                  </a>
                  </td>
                  <td className="Project-info">
                    <p><span className="Projects-highlight">Full stack</span> blog, featuring a front-end view and a back-end server
                    alongside a <span className="Projects-highlight">CRUD app</span>. Technologies used involve <span className="Projects-highlight">MongoDB Atlas, 
                    Express, ReactJs and NodeJs</span>.</p>
                  </td>
                </tr>
                <tr>
                  <td className="Underline">
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      href="https://github.com/jvdsouza/weather-app">
                        Weather App
                    </a>
                  </td>
                  <td className="Project-info">
                  <p><span className="Projects-highlight">Front-End</span> app utilising the <span className="Projects-highlight">Apixu API</span> to deliver weather temperature
                    and weather status, alongside using <span className="Projects-highlight">Google Maps API</span> to show the location
                    of where the weather is being recorded.</p>
                  </td>
                </tr>
                <tr>
                  <td className="Underline">
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      href="https://www.fullstacktrends.com/">
                      Full Stack Trends <br/>(Open Source Contribution)
                    </a>
                  </td>
                  <td className="Project-info">
                  <p>An <span className="Projects-highlight">Open Source Project</span> for those who were part of one of the Udemy Courses
                    I studied <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/">(Complete Web Developer 2019)</a>,
                    highlighting the current trends of technologies in the Full-Stack Web Development world and their popularity.
                    Responsible for <span className="Projects-highlight">building the modal</span> that lists the courses the students were partaking
                    when contributing to the project.</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="info-card" id="Contact">
            <h2>Contact Me</h2>
            <p>You can get in touch with me through the following:</p>
            <table>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>jvincentdsouza@gmail.com</td>
                </tr>
                <tr>
                  <td>Linkedin</td>
                  <td>
                    <a target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://www.linkedin.com/in/jason-d-souza-861762100/">
                          LinkedIn Profile
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}

export default MainBody;
