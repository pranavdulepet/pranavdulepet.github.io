import React from 'react';
import './HomePage.css';
import collegero from './images/collegero-logo.jpg';
import aura from './images/aura-logo.png';
import github from './images/github-logo.png';
import aerial from './images/aerial-image.png';
import legalai from './images/legalai-image.png';
import musicrec from './images/music-image.png';
import signstoleads from './images/signstoleads-logo.png';
import thingsnearme from './images/thingsnearme-logo.jpg';
import umdnext from './images/umdnext-logo.png';
import resume from './images/pranav_dulepet_resume.pdf';
import capitalone from './images/capitalone-logo.png';
import fidelity from './images/fidelity-logo.png';
import evozyne from './images/evozyne-logo.png';
import agora from './images/agora-logo.png';
import h4i from './images/h4i-logo.png';
import Articles from "./ArticleComponent";
import Education from "./EducationComponent";

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
      <div class="header">
        <div class="name">
          <h1>Pranav<br/> Dulepet</h1>
          <p className="bio">CS @ UMD • AI Research @ UMIACS • Applied Quantitative Analysis TA </p>
        </div>
        <div class="menu">
          <ul>
            <ol><a href="#about-section">About</a></ol>
            <ol><a href="#projects-section">Projects</a></ol>
            <ol><a href="#experience-section">Experience</a></ol>
            <ol><a href="#classes-section">Education</a></ol>
            <ol><a href="#articles-section">Articles</a></ol>
            <ol><a href="#contact-section">Contact & Resume</a></ol>
          </ul>
        </div>
      </div>
      <div className="main-container">
        <button id="top-btn" onClick={topFunction}>Back to top</button>
        <div id="about-section" className="about-section">
          <h2>About</h2>
          <p>As a <a className="aboutme" href="https://github.com/pranavdulepet" target="_blank">computer science student</a> at <a className="aboutme" href="https://www.cs.umd.edu/" target="_blank">the University of Maryland - College Park</a>, I am passionate about using technology to tackle everyday problems. 
            My experience in a variety of fields within computer science, from app development to machine learning, has given me a unique perspective on how technology can be used to create innovative solutions. 
            I am particularly interested in a wide range of applications of <a className="aboutme" href="https://cfar.umd.edu/" target="_blank">computer vision</a> and <a className="aboutme" href="https://github.com/pranavdulepet/legalai" target="_blank">natural language processing</a> including Generative AI and Autonomous Robots.
            I have also developed an interest in the <a className="aboutme" href="https://www.rhsmith.umd.edu/quest" target="_blank">intersection of technology and business</a>, and how they can be used together to drive progress and make a real impact. 
            I am constantly seeking new opportunities to learn and grow, and I am eager to apply my skills and knowledge to make a meaningful difference.</p>
        </div>
        <div id="projects-section" className="projects-section">
          <h2>Projects</h2>
          <div class="project-container">
          <div class="project">
            <a href="http://agoraai.app/" target="_blank">
              <img src={agora} alt="Project 1" />
              </a>
              <h3>agora</h3>
              <p><strong>Skills: </strong>Python, Large Language Models, React, Express, Swift</p>
            </div>
            <div class="project">
            <a href="https://apps.apple.com/us/app/college-ro/id1577113429" target="_blank">
              <img src={collegero} alt="Project 1" />
              </a>
              <h3>CollegeRO</h3>
              <a className="aboutme" href="https://dbknews.com/2022/03/06/umd-student-creates-app-to-help-students-find-research-opportunities/" target="_blank">(Ft. in The Diamondback, UMD's newspaper)</a>
              <p><strong>Skills: </strong>Full-Stack iOS Development, Rest APIs, MongoDB, AWS, GitHub, Google/Firebase Analytics</p>
            </div>
            <div class="project">
            <a href="https://github.com/pranavdulepet/aerial-object-detection" target="_blank">
              <img src={aerial} alt="Project 1" />
              </a>
              <h3>Aerial Object Detection</h3>
              <a className="aboutme" href="https://www.marksz.org/hackweek/" target="_blank">(1st Place in the Northrop Grumman Innovation Challenge)</a>
              <p><strong>Skills: </strong>Python, YOLOv5, PyTorch, Google Colab, Matplotlib</p>
            </div>
            <div class="project">
            <a href="https://github.com/pranavdulepet/legalai" target="_blank">
              <img src={legalai} alt="Project 4" />
              </a>
              <h3>LegalAI</h3>
              <p><strong>Skills: </strong>scikit-learn, spaCy, Elasticsearch, Textacy, Blackstone, pytextrank</p>
            </div>
            <div class="project">
            <a href="https://github.com/pranavdulepet/umd-next/blob/main/umd-amzn-design-challenge.pdf" target="_blank">
              <img src={umdnext} alt="Project 3" />
              </a>
              <h3>UMDNext</h3>
              <a className="aboutme" href="https://sites.google.com/umd.edu/amazondesignchallenge/home" target="_blank">(2nd Place in the Amazon-UMD Product Design Challenge)</a>
              <p><strong>Skills: </strong>Product Design, Customer and Market Research, Figma, Microsoft PowerPoint, UI/UX</p>
            </div>
            <div class="project">
            <a href="https://github.com/umd-fire-coml/2022-t1-convolutional" target="_blank">
              <img src={musicrec} alt="Project 2" />
              </a>
              <h3>Music Recommender</h3>
              <p><strong>Skills: </strong>TensorFlow, Keras, K-Nearest Neighbors, Triplet Loss, Python, Google Colab, GitHub</p>
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
          <h2>Experience</h2>
          <h3>Industry Experience</h3>
          <div class="industry-experience">
              <div class="experience">
                  <h3>SWE Intern</h3>
                  <a href="https://www.fidelity.com/" target="_blank">
                  <img src={fidelity} alt="Fidelity"/>
                  </a>
                  <h3>Fidelity Investments</h3>
                  <p>06/23 - present</p>
                  <p>I built a LinkedIn-like MyNetwork recommendation engine for internal Fidelity employees. 
                    I used a graph neural network approach to create a hybrid recomendation model with reinforcement learning.</p>
                  <p><strong>Skills: </strong>Python, PyTorch, DGL, Graph Neural Networks, Swift, NetworkX, Neo4j</p>
              </div>
              <div class="experience">
                  <h3>SWE Intern</h3>
                  <a href="https://www.capitalone.com/" target="_blank">
                  <img src={capitalone} alt="Capital One"/>
                  </a>
                  <h3>Capital One</h3>
                  <p>01/23 - 05/23</p>
                  <p>I implemented a similarity search framework to use on financial graph embeddings as part of the Enterprise Graph Services team.
                    I used compared and benchmarked NMSLIB and ANNOY on samples of up to 5 million in size with high-dimensionality.
                    Here is an article I wrote with more information: <a className="aboutme" href="https://medium.com/@pdulepet/machine-learning-in-finance-similarity-search-2affaa2b5d56" target="_blank">link</a>.
                  </p>
                  <p><strong>Skills: </strong>Python, NMSLIB, ANNOY, scikit-learn, GloVe, Graph Machine Learning</p>
              </div>
              <div class="experience">
                  <h3>SWE Intern</h3>
                  <a href="https://www.evozyne.com/" target="_blank">
                  <img src={evozyne} alt="Evozyne"/>
                  </a>
                  <h3>Evozyne</h3>
                  <p>06/22 - 08/22</p>
                  <p>I researched and applied SMT solvers to model the gene cloning process. 
                    I used Pandas, Matplotlib, and Seaborn to analzye and vizualize ways to improve the model by comparing the performance of differnt algorithms.
                    Here is an article I wrote with more information: <a className="aboutme" href="https://medium.com/@pdulepet/smt-in-computational-biology-dccf006eb397" target="_blank">link</a>.
                  </p>
                  <p><strong>Skills: </strong>Python, Z3, Satisfiability Modulo Theories, Matplotlib, Seaborn, Pandas</p>
              </div>
              <br></br>
              <div class="experience">
                  <h3>SWE/Tech Lead</h3>
                  <a href="https://hack4impact.org/" target="_blank">
                  <img src={h4i} alt="Hack4Impact"/>
                  </a>
                  <h3>Hack4Impact</h3>
                  <p>09/21 - present</p>
                  <p>As a Tech Lead for two semesters, I was a liason between the software engineers and the project managers.
                    I assigned and completed tasks accoring to client requirements and wrote documenation before handing off code to the client. 
                    Our team worked with the California-based online tutoring non-profit, Step Up Tutoring during my first semester and the Virginia-based immigrant youth and family resource service, Edufuturo during my second semester.
                  </p>
                  <p><strong>Skills: </strong>React.js, React Native, Node.js, Firebase</p>
              </div>
              </div>
              <h3>Academic Experience</h3>
              <div class="academic-experience">
                <div class="experience">
                      <h3>Undergraduate Researcher</h3>
                      <h3>Univerity of Maryland - College Park (CLIP)</h3>
                      <p>08/23 - present</p>
                      <p>Working on understanding effects of sentence embeddings. <a className="aboutme" href="http://www.umiacs.umd.edu/labs/clip/" target="_blank">Computational Linguistics and Information Processing Lab</a> in <a className="aboutme" href="https://cfar.umd.edu/" target="_blank">the CfAR</a>. </p>
                        <p><strong>Skills: </strong>Python</p>
                  </div>
                  <div class="experience">
                      <h3>Undergraduate Researcher</h3>
                      <h3>Univerity of Maryland - College Park (PIRL)</h3>
                      <p>02/23 - present</p>
                      <p>Developed iOS app using LiDAR scanner to create 3D representations of rooms and extract features.
                        Used to capture Room Impulse Responses to then use differentiable acoustics to learn acoustic coefficients.
                        Working on building upon NeRF with the scanner and modifying deep learning models. <a className="aboutme" href="http://www.umiacs.umd.edu/labs/pirl/" target="_blank">Perceptual Interfaces and Reality Lab</a> in <a className="aboutme" href="https://cfar.umd.edu/" target="_blank">the CfAR</a>. </p>
                        <p><strong>Skills: </strong>Swift, ARKit 6, Python, PyTorch</p>
                  </div>
                  <div class="experience">
                      <h3>Undergraduate Researcher</h3>
                      <h3>Univerity of Maryland - College Park (iSchool)</h3>
                      <p>07/21 - 08/22</p>
                      <p>I was a part of the web privacy research group under Professor Ido Sivan-Sevilla. I worked with Python, OpenWPM, and AWS EC2 to collect, parse, and analyze web privacy data to identify trends and correlations in how third-party web trackers follow users’ movements and collect personal data.
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
          <h2>Education</h2>
          <Education/>
        </div>
        <div id="articles-section" className="articles-section">
          <h2>Articles</h2>
            <div>
              <Articles/>
            </div>
        </div>
        <div id="contact-section" className="contact-section">
          <h2>Contact & Resume</h2>
          <div class="contact-info">
          <div class="resume-download">
              <a className="aboutme" href={resume} download>Download Resume</a>
          </div>
            <div class="phone-number">
              <p>925-997-0461</p>
            </div>
            <div class="email">
              <a className="aboutme" href="mailto:pdulepet@umd.edu" target="_blank">pdulepet@umd.edu</a>
            </div>
            <div class="social-links">
              <a className="aboutme" href="https://www.linkedin.com/in/pranavdulepet" target="_blank">linkedin</a>
              <a className="aboutme" href="https://github.com/pranavdulepet" target="_blank">github</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default HomePage;