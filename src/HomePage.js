import React from 'react';
import './HomePage.css';
import collegero from './images/collegero-logo.jpg';
import aura from './images/aura-logo.png';
import github from './images/github-logo.png';
import signstoleads from './images/signstoleads-logo.png';
import thingsnearme from './images/thingsnearme-logo.jpg';
import umdnext from './images/umdnext-logo.png';
import resume from './images/pranav-dulepet-resume-24.pdf';
import capitalone from './images/capitalone-logo.png';
import evozyne from './images/evozyne-logo.png';
import h4i from './images/h4i-logo.jpeg';

function HomePage() {

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("top-btn").style.display = "block";
    } else {
      document.getElementById("top-btn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet"/>
      </head>
      <div class="header">
        <div class="name">
          <h1>Pranav<br/> Dulepet</h1>
        </div>
        <div class="menu">
          <ul>
            <ol><a href="#about-section">About Me</a></ol>
            <ol><a href="#experience-section">Experience</a></ol>
            <ol><a href="#projects-section">Projects</a></ol>
            <ol><a href="#classes-section">Classes</a></ol>
            <ol><a href="#contact-section">Contact</a></ol>
          </ul>
        </div>
      </div>
      <div className="main-container">
        <button id="top-btn" onClick={topFunction}>Back to top</button>
        <div id="about-section" className="about-section">
          <h3>About Me</h3>
          <p>As a <a id="aboutme" href="https://github.com/pranavdulepet" target="_blank">computer science student</a> at <a id="aboutme" href="https://www.cs.umd.edu/" target="_blank">the University of Maryland - College Park</a>, I am passionate about using technology to tackle everyday problems. 
            My experience in a variety of fields within computer science, from app development to machine learning, has given me a unique perspective on how technology can be used to create innovative solutions. 
            I am particularly interested in the <a id="aboutme" href="https://www.rhsmith.umd.edu/quest" target="_blank">intersection of technology and business</a>, and how they can be used together to drive progress and make a real impact. 
            I am constantly seeking new opportunities to learn and grow, and I am eager to apply my skills and knowledge to make a meaningful difference.</p>
        </div>
        <div id="projects-section" className="projects-section">
          <h3>Projects</h3>
          <div class="project-container">
            <div class="project">
            <a href="https://apps.apple.com/us/app/college-ro/id1577113429" target="_blank">
              <img src={collegero} alt="Project 1" />
              </a>
              <h3>CollegeRO</h3>
              <p><strong>Skills: </strong>Full-Stack iOS Development, Rest APIs, MongoDB, AWS, GitHub, Google/Firebase Analytics</p>
            </div>
            <div class="project">
            <a href="https://github.com/umd-fire-coml/2022-t1-convolutional" target="_blank">
              <img src={github} alt="Project 2" />
              </a>
              <h3>Music Recommender</h3>
              <p><strong>Skills: </strong>TensorFlow, Keras, K-Nearest Neighbors, Triplet Loss, Python, Google Colab, GitHub</p>
            </div>
            <div class="project">
            <a href="https://github.com/pranavdulepet/umd-next/blob/main/umd-amzn-design-challenge.pdf" target="_blank">
              <img src={umdnext} alt="Project 3" />
              </a>
              <h3>UMDNext</h3>
              <p><strong>Skills: </strong>Product Design, Customer and Market Research, Figma, Microsoft PowerPoint, UI/UX</p>
            </div>
            <div class="project">
            <a href="https://github.com/pranavdulepet/legalai" target="_blank">
              <img src={github} alt="Project 4" />
              </a>
              <h3>LegalAI</h3>
              <p><strong>Skills: </strong>scikit-learn, spaCy, Elasticsearch, Textacy, Blackstone, pytextrank</p>
            </div>
            <div class="project">
            <a href="https://apps.apple.com/us/app/things-near-me/id1506053357?ls=1" target="_blank">
              <img src={thingsnearme} alt="Project 5" />
              </a>
              <h3>Things Near Me</h3>
              <p><strong>Skills: </strong>Full-Stack iOS Development, Swift, UIKit, Firebase</p>
            </div>
            <div class="project">
            <a href="https://github.com/pranavdulepet/open_house_sign.git" target="_blank">
              <img src={signstoleads} alt="Project 6" />
              </a>
              <h3>Signs To Leads</h3>
              <p><strong>Skills: </strong>Full-Stack iOS Development, Swift, UIKit, Firebase</p>
            </div>
            <div class="project">
            <a href="https://devpost.com/software/aura-obgpw7" target="_blank">
              <img src={aura} alt="Project 7" />
              </a>
              <h3>Aura</h3>
              <p><strong>Skills: </strong>Full-Stack iOS Development, NLP Libraries, Google Cloud, GitHub</p>
            </div>
          </div>

        </div>
        <div id="experience-section" className="experience-section">
          <h3>Experience</h3>
                <div class="resume-download">
              <a id="aboutme" href={resume} download>Download Resume</a>
          </div>
          <h2>Industry Experience</h2>
          <div class="industry-experience">
              <div class="experience">
                  <h3>Incoming SWE Intern</h3>
                  <a href="https://www.capitalone.com/" target="_blank">
                  <img src={capitalone} alt="Capital One"/>
                  </a>
                  <p>01/23 - present</p>
                  <p>Technology Incubator program, Spring 2023</p>
                  <p><strong>Skills: </strong>_</p>
              </div>
              <div class="experience">
                  <h3>SWE Intern</h3>
                  <a href="https://www.evozyne.com/" target="_blank">
                  <img src={evozyne} alt="Evozyne"/>
                  </a>
                  <p>06/22 - 08/22</p>
                  <p>I researched and applied SMT solvers to model the gene cloning process. 
                    I used Pandas, Matplotlib, and Seaborn to analzye and vizualize ways to improve the model by comparing the performance of differnt algorithms.
                    Here is an article I wrote with more information: <a id="aboutme" href="https://medium.com/@pdulepet/smt-in-computational-biology-dccf006eb397" target="_blank">link</a>.
                  </p>
                  <p><strong>Skills: </strong>Python, Z3, Satisfiability Modulo Theories, Matplotlib, Seaborn, Pandas</p>
              </div>
              <div class="experience">
                  <h3>SWE/Tech Lead</h3>
                  <a href="https://hack4impact.org/" target="_blank">
                  <img src={h4i} alt="Hack4Impact"/>
                  </a>
                  <p>09/21 - present</p>
                  <p>As a Tech Lead for two semesters, I was a liason between the software engineers and the project managers.
                    I assigned and completed tasks accoring to client requirements and wrote documenation before handing off code to the client. 
                    Our team worked with the California-based online tutoring non-profit, Step Up Tutoring during my first semester and the Virginia-based immigrant youth and family resource service, Edufuturo during my second semester.
                  </p>
                  <p><strong>Skills: </strong>React.js, React Native, Node.js, Firebase</p>
              </div>
              </div>
              <h2>Academic Experience</h2>
              <div class="academic-experience">
                  <div class="experience">
                      <h3>Research Assistant</h3>
                      <h3>Univerity of Maryland - College Park</h3>
                      <p>07/21 - 08/22</p>
                      <p>I worked with Python, OpenWPM, and AWS EC2 to collect, parse, and analyze web privacy data to identify trends and correlations in how third-party web trackers follow users’ movements and collect personal data.
                        We complied our work to present at the 3rd annual Applications of Contextual Integrity Symposium at the University of Chicago. </p>
                        <p><strong>Skills: </strong>Python, Amazon Web Services (AWS), SQL</p>
                  </div>
                  <div class="experience">
                      <h3>Student Researcher</h3>
                      <h3>Univerity of Maryland - College Park (FIRE Program)</h3>
                      <p>08/21 - 12/22</p>
                      <p>We focused on learning the skills necessary to conduct research in our desired field as well as applying them.
                        I was a part of the machine learning track where I further developed my knowledge of python, TensorFlow, Keras, and other common machine learning techniques and tools. 
                        The third semester was when it culminated in a cumulative research project, where we developed a music recommendation system based on user listening history. 
                        We implemented triplet loss and k-nearest neighbors to accomplish this task by aggregating song features and outputting recommended songs.
                        We also had the opportunity to present this project at the FIRE symposium which had an audience of interested students and faculty. 
                      </p>
                      <p><strong>Skills: </strong>Python, TensorFlow, Keras</p>
                  </div>
              </div>
        </div>
        <div id="classes-section" className="classes-section">
          <h3>Classes</h3>
          <div class="course-grid">
            <div class="course">CMSC351<br/>Algorithms </div>
            <div class="course">CMSC330<br/>Organization of Programming Languages</div>
            <div class="course">BMGT438A<br/>Applied Quantitative Analysis</div>
            <div class="course">FIRE120, 198, 298<br/>Machine Learning Research (FIRE program)</div>
            <div class="course">CMSC216<br/>Introduction to Computer Systems</div>
            <div class="course">CMSC250<br/>Discrete Structures</div>
            <div class="course">CMSC132<br/>Object Oriented Programming II</div>
            <div class="course">MATH240<br/>Linear Algebra</div>
            <div class="course">STAT400<br/>Applied Statistics & Probability I</div>
            <div class="course">BMGT190H<br/>Introduction to Design and Quality</div>
            <div class="course">CMSC131<br/>Object Oriented Programming I</div>
          </div>
        </div>
        <div id="contact-section" className="contact-section">
          <h3>Contact</h3>
          <div class="contact-info">
            <div class="phone-number">
              <p>925-997-0461</p>
            </div>
            <div class="email">
              <a id="aboutme" href="mailto:pdulepet@umd.edu" target="_blank">pdulepet@umd.edu</a>
            </div>
            <div class="social-links">
              <a id="aboutme" href="https://www.linkedin.com/in/pranavdulepet" target="_blank">linkedin</a>
              <a id="aboutme" href="https://github.com/pranavdulepet" target="_blank">github</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default HomePage;