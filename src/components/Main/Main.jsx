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
                in <span className="About-highlight">full-stack Javascript Web developement, Software Engineering</span>, and a 
                Graduate of <span className="About-highlight">Civil Engineering (Honours) from Monash University</span>. 
              </p>
              <p>
                Having worked in various areas I have gained numerous soft skills. These areas such as Retail, Geotechnical Engineering, and
                Traffic Engineering have pushed me to work on my abilities outside just solving problems. However I find my passion remains with computer science and 
                software development. Currently I am a Coding Mentor in <span className="About-highlight">Python</span> for John Monash Science 
                School and putting my best in helping <span className="About-highlight">teach young teenagers in year 10 and year 11 about computer science</span>.
                I have also recently become a Coding Mentor at 
                the <a className='About-link' target="_blank" rel="noopener noreferrer" href="https://www.meetup.com/Melbourne-Code-Mentoring-Web-Development-Design/">Free Code Mentoring meetup 
                group</a>
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
                    <li>Redux for React</li>
                    <li>NodeJs and Express</li>
                    <li>RESTful API development</li>
                    <li>Databases such as MongoDB and PostgreSQL</li>
                    <li>Basic Jest unit testing</li>
                    <li>AWS lambda</li>
                    <li>HTML5 and CSS3</li>
                    <li>Responsive Design</li>
                    <li>Progressive Web App developement</li>
                    <li>Git and GitHub version control</li>
                    <li>Python</li>
                  </ul>
                  <span>And planning to learn:</span>
                  <ul>
                    <li>GraphQL + Apollo client and server</li>
                    <li>Agile development</li>
                    <li>More Amazon Web Services (AWS)</li>
                    <li>Redis</li>
                    <li>CI/CD</li>
                    <li>Docker + Docker Compose</li>
                    <li>Rust + Web Assembly</li>
                    <li>Electron</li>
                    <li>Machine Learning with Octave</li>
                  </ul>
                </div>
              <p>
                I am also <span className="About-highlight">actively looking to utilise my skills and learn more about commercial development.</span>
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
                    href="https://jasondsouza.dev/">
                      Portfolio
                  </a>
                  <br/>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://github.com/jvdsouza/My-Portfolio">
                      (GitHub)
                  </a>
                  </td>
                  <td className="Project-info">
                    <p>Portfolio developed using a Creative Tim Template and <span className="Projects-highlight">changed drastically to be personalised</span>. 
                      This project involved restructuring a <span className="Projects-highlight">complex template and rearranging the styling</span> in order to 
                      create a portfolio that appeals to various people.
                      <br/>
                      The style component of the website involved <span className="Projects-highlight">obtaining multiple people's views on the design of the website, 
                      studying the responsive design, and studying other designs in order to develop the user experience of the website</span>.
                    </p>
                  </td>
                </tr>

                <tr>
                  <td className="Underline">
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://jasonsveryownblog.herokuapp.com/">
                      Personal Blog
                  </a>
                  <br/>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://github.com/jvdsouza?utf8=%E2%9C%93&tab=repositories&q=blog&type=&language=">
                      (GitHub)
                  </a>
                  </td>
                  <td className="Project-info">
                    <p><span className="Projects-highlight">Full stack</span> blog, featuring a front-end view and a back-end server
                    alongside a <span className="Projects-highlight">CRUD app</span>. Technologies used involve <span className="Projects-highlight">MongoDB Atlas, 
                    Express, ReactJs and NodeJs</span>. 
                    <br/>
                    This blog was developed as my first Full Stack website, <span className="Projects-highlight">challenging me to work and learn 
                    at the same time</span>, providing me barriers to overcome. In the end I was successfully able to <span className="Projects-highlight">scale the 
                    application after the initial implementation</span> with the <span className="Projects-highlight">CRUD app that allows me to externally input blog posts, 
                    update current blog posts and delete blogposts which requires a login</span>. 
                    <br/>
                    These set of apps also require an API key, 
                    self implemented, of which are not and were not ever stored on GitHub during development or when pushed to production.</p>
                  </td>
                </tr>

                <tr>
                  <td className="Underline">
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      href="https://weather-app-project-jvd.netlify.com/">
                        Weather App
                    </a>
                    <br/>
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      href="https://github.com/jvdsouza/weather-app">
                        (GitHub)
                    </a>
                  </td>
                  <td className="Project-info">
                  <p><span className="Projects-highlight">Front-End React</span> app utilising the <span className="Projects-highlight">Apixu API</span> to 
                    deliver weather temperature and weather status, alongside using <span className="Projects-highlight">Google Maps API</span> to show the 
                    location of where the weather is being recorded. 
                    <br/>
                    This project required the use of <span className="Projects-highlight">AJAX, handled by Promises as introduced in ES6 to chain 
                    asynchronous JavaScript actions instead of using nested callback functions</span>. Issues that were encountered involved 
                    the <span className="Projects-highlight">implementation of the Google Map API, having to read documentation</span> in order to 
                    implement completely without issues or errors occuring on the Front End. 
                    <br/>
                    This Single Page Application evolved over the course of development, initially beginning with only fetching and serving data for the 
                    weather, the app features <span className="Projects-highlight">grew with the Google Maps API, fetching and 
                    utilising more data, and implementation of user experience to a basic extent</span></p>
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
                    <br/>
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      href="https://github.com/jvdsouza/weather-app">
                        (GitHub)
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
                <tr>
                  <td className="Underline">
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      href="https://github.com/create-care-global/web-app">
                      Create Care Global <br/>(Winter 2019 Random Hacks of Kindness Hackathon)
                    </a>
                  </td>
                  <td className="Project-info">
                  <p>A <span className="Projects-highlight">Full Stack project</span> developed (and currently continuously developing) over the weekend of the 18th and 19th of May in the Winter 2019 
                    Random Hacks of Kindness Hackathon. 
                    <br/>
                    This project involved working in a <span className="Projects-highlight">dynamic and diverse group of people in order to distill a problem</span> that 
                    the non-profit charity called Create Care Global <a target="_blank" rel="noopener noreferrer" href="http://create-care-global.org/"> (http://create-care-global.org/)</a> had, 
                    due to the lack of techical people in their team which they required. 
                    <br/>
                    The weekend involved <span className="Projects-highlight">working with Business Analysts, Consultants, Reverse Engineers, and people of other skillsets</span> in 
                    order to create an application that would solve their problem. 
                    <br/>
                    The solution manifested as a Full Stack web application that allowed users to log in or register, 
                    and dependant on whether they needed help or if they were providing help they would have different access to different functions of the web app. 
                    This application used technologies such as <span className="Projects-highlight">React, Node and GraphQL using Apollo, GraphQL-yoga and Prisma</span>.</p>
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
