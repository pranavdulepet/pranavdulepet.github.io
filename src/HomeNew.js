// Home.js
import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './HomePage.css';
import Education from "./EducationComponent";

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
import amazon from './images/amzn.jpeg'

import pranav from './images/pranav-pfp.jpeg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1000px;
  margin: auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin: 10px 0 0 0;
`;

const Content = styled.main`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
  width: 100%;
`;

const Footer = styled.footer`
  margin-top: 40px;
  font-size: 0.9rem;
  color: #aaa;
`;

const Home = () => {
  return (
    <Container>
      <Header>
        <ProfileImage src={pranav} alt="Profile" />
        <ProfileDetails>
          <Title>Pranav Dulepet</Title>
          <Subtitle>Computer Science at UMD | Software Developer Intern (ML) at Amazon</Subtitle>
        </ProfileDetails>
      </Header>
      <Content>
        <Tabs>
          <TabList>
            <Tab>About</Tab>
            <Tab>Projects</Tab>
            <Tab>Experience</Tab>
            <Tab>Education</Tab>
            <Tab>Contact & Resume</Tab>
          </TabList>

          <TabPanel>
            <h3>About</h3>
            <p>As a <a className="aboutme" href="https://github.com/pranavdulepet" target="_blank">computer science student</a> at <a className="aboutme" href="https://www.cs.umd.edu/" target="_blank">the University of Maryland - College Park</a>, I am passionate about using technology to tackle everyday problems.
              My experience in a variety of fields within computer science, from app development to machine learning, has given me a unique perspective on how technology can be used to create innovative solutions.
              I am particularly interested in a wide range of applications, specifically involving <a className="aboutme" href="http://www.umiacs.umd.edu/labs/pirl/" target="_blank">deep learning</a>.
              I have also developed an interest in the <a className="aboutme" href="https://www.rhsmith.umd.edu/quest" target="_blank">intersection of technology and business</a>, and how they can be used together to drive progress and make a real impact.
              I am constantly seeking new opportunities to learn and grow, and I am eager to apply my skills and knowledge to make a meaningful difference.</p>
          </TabPanel>
          <TabPanel>
            <h3>Projects</h3>
            <div className="project-container">
              <div className="project">
                <a href="http://www.agoraai.app/" target="_blank">
                  <img src={agora} alt="Project 1" />
                </a>
                <h3>agora</h3>
                <p className="project"><strong>Skills: </strong>Python, Large Language Models, React, Express, Swift, MongoDB</p>
              </div>
              <div className="project">
                <a href="https://apps.apple.com/us/app/college-ro/id1577113429" target="_blank">
                  <img src={collegero} alt="Project 1" />
                </a>
                <h3>CollegeRO</h3>
                <a className="aboutme" href="https://dbknews.com/2022/03/06/umd-student-creates-app-to-help-students-find-research-opportunities/" target="_blank">(Ft. in The Diamondback, UMD's newspaper)</a>
                <p className="project"><strong>Skills: </strong>Full-Stack iOS Development, Rest APIs, MongoDB, AWS, GitHub, Google/Firebase Analytics</p>
              </div>
              <div className="project">
                <a href="https://github.com/pranavdulepet/aerial-object-detection" target="_blank">
                  <img src={aerial} alt="Project 1" />
                </a>
                <h3>Aerial Object Detection</h3>
                <a className="aboutme" href="https://www.marksz.org/hackweek/" target="_blank">(1st Place in the Northrop Grumman Innovation Challenge)</a>
                <p className="project"><strong>Skills: </strong>Python, YOLOv5, PyTorch, Google Colab, Matplotlib</p>
              </div>
              <div className="project">
                <a href="https://github.com/pranavdulepet/legalai" target="_blank">
                  <img src={legalai} alt="Project 4" />
                </a>
                <h3>LegalAI</h3>
                <p className="project"><strong>Skills: </strong>scikit-learn, spaCy, Elasticsearch, Textacy, Blackstone, pytextrank</p>
              </div>
              <div className="project">
                <a href="https://github.com/pranavdulepet/umd-next/blob/main/umd-amzn-design-challenge.pdf" target="_blank">
                  <img src={umdnext} alt="Project 3" />
                </a>
                <h3>UMDNext</h3>
                <a className="aboutme" href="https://sites.google.com/umd.edu/amazondesignchallenge/home" target="_blank">(2nd Place in the Amazon-UMD Product Design Challenge)</a>
                <p className="project"><strong>Skills: </strong>Product Design, Customer and Market Research, Figma, Microsoft PowerPoint, UI/UX</p>
              </div>
              <div className="project">
                <a href="https://github.com/umd-fire-coml/2022-t1-convolutional" target="_blank">
                  <img src={musicrec} alt="Project 2" />
                </a>
                <h3>Music Recommender</h3>
                <p className="project"><strong>Skills: </strong>TensorFlow, Keras, K-Nearest Neighbors, Triplet Loss, Python, Google Colab, GitHub</p>
              </div>
              <div className="project">
                <a href="https://apps.apple.com/us/app/things-near-me/id1506053357?ls=1" target="_blank">
                  <img src={thingsnearme} alt="Project 5" />
                </a>
                <h3>Things Near Me</h3>
                <p className="project"><strong>Skills: </strong>Full-Stack iOS Development, Swift, UIKit, Firebase</p>
              </div>
              <div className="project">
                <a href="https://github.com/pranavdulepet/open_house_sign.git" target="_blank">
                  <img src={signstoleads} alt="Project 6" />
                </a>
                <h3>Signs To Leads</h3>
                <p className="project"><strong>Skills: </strong>Full-Stack iOS Development, Swift, UIKit, Firebase</p>
              </div>
              <div className="project">
                <a href="https://devpost.com/software/aura-obgpw7" target="_blank">
                  <img src={aura} alt="Project 7" />
                </a>
                <h3>Aura</h3>
                <p className="project"><strong>Skills: </strong>Full-Stack iOS Development, NLP Libraries, Google Cloud, GitHub</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList>
                <Tab>Industry</Tab>
                <Tab>Research</Tab>
              </TabList>
              <TabPanel>
                <h3>Industry Experience</h3>
                <div className="industry-experience">
                  <div className="experience">
                    <h3>SDE Intern (ML)</h3>
                    <a href="https://www.alexa.com" target="_blank">
                      <img src={amazon} alt="Amazon" />
                    </a>
                    <h3>Amazon</h3>
                    <p>06/24 - 08/24</p>
                    <p>Alexa AI</p>
                    <p><strong>Skills: </strong></p>
                  </div>
                  <div className="experience">
                    <h3>SWE Intern</h3>
                    <a href="https://www.fidelity.com/" target="_blank">
                      <img src={fidelity} alt="Fidelity" />
                    </a>
                    <h3>Fidelity Investments</h3>
                    <p>06/23 - 08/23</p>
                    <p>I built a LinkedIn-like MyNetwork recommendation engine for internal Fidelity employees.
                      I used a graph neural network approach to create a hybrid recommendation model with reinforcement learning.
                      Here is an article I wrote with more information: <a className="aboutme" href="https://medium.com/@pdulepet/enterprise-mynetwork-platform-c138f7e98537" target="_blank">link</a>.</p>
                    <p><strong>Skills: </strong>Python, PyTorch, DGL, Graph Neural Networks, Swift, NetworkX, Neo4j</p>
                  </div>
                  <div className="experience">
                    <h3>SWE Intern</h3>
                    <a href="https://www.capitalone.com/" target="_blank">
                      <img src={capitalone} alt="Capital One" />
                    </a>
                    <h3>Capital One</h3>
                    <p>01/23 - 05/23</p>
                    <p>I implemented a similarity search framework to use on financial graph embeddings as part of the Enterprise Graph Services team.
                      I compared and benchmarked NMSLIB and ANNOY on samples of up to 5 million in size with high-dimensionality.
                      Here is an article I wrote with more information: <a className="aboutme" href="https://www.capitalone.com/tech/machine-learning/similarity-search-graph-embeddings/" target="_blank">link</a>.
                    </p>
                    <p><strong>Skills: </strong>Python, NMSLIB, ANNOY, scikit-learn, GloVe, Graph Machine Learning</p>
                  </div>
                  <div className="experience">
                    <h3>SWE Intern</h3>
                    <a href="https://www.evozyne.com/" target="_blank">
                      <img src={evozyne} alt="Evozyne" />
                    </a>
                    <h3>Evozyne</h3>
                    <p>06/22 - 08/22</p>
                    <p>I researched and applied SMT solvers to model the gene cloning process.
                      I used Pandas, Matplotlib, and Seaborn to analyze and visualize ways to improve the model by comparing the performance of different algorithms.
                      Here is an article I wrote with more information: <a className="aboutme" href="https://medium.com/@pdulepet/smt-in-computational-biology-dccf006eb397" target="_blank">link</a>.
                    </p>
                    <p><strong>Skills: </strong>Python, Z3, Satisfiability Modulo Theories, Matplotlib, Seaborn, Pandas</p>
                  </div>
                  <div className="experience">
                    <h3>SWE/Tech Lead</h3>
                    <a href="https://hack4impact.org/" target="_blank">
                      <img src={h4i} alt="Hack4Impact" />
                    </a>
                    <h3>Hack4Impact</h3>
                    <p>09/21 - present</p>
                    <p>As a Tech Lead for two semesters, I was a liaison between the software engineers and the project managers.
                      I assigned and completed tasks according to client requirements and wrote documentation before handing off code to the client.
                      Our team worked with the California-based online tutoring non-profit, Step Up Tutoring during my first semester and the Virginia-based immigrant youth and family resource service, Edufuturo during my second semester.
                    </p>
                    <p><strong>Skills: </strong>React.js, React Native, Node.js, Firebase</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <h3>Research Experience</h3>
                <div className="academic-experience">
                  <div className="experience">
                    <h3>Undergraduate Researcher</h3>
                    <h3>Univerity of Maryland - College Park (GAMMA)</h3>
                    <p>01/24 - present</p>
                    <p>Researching conistent view video and image generation <a className="aboutme" href="https://gamma.umd.edu" target="_blank">Geometric Algorithms for Modeling, Motion and Animation Lab</a>. </p>
                    <p><strong>Skills: </strong>Python, TensorFlow, Stable Diffusion</p>
                  </div>
                  <div className="experience">
                    <h3>Undergraduate Researcher</h3>
                    <h3>Univerity of Maryland - College Park (PIRL)</h3>
                    <p>02/23 - present</p>
                    <p>Developed iOS app using LiDAR scanner to create 3D representations of rooms and extract features.
                      Used to capture Room Impulse Responses to then use differentiable acoustics to learn acoustic coefficients.
                      Working on building upon NeRF with the scanner and modifying deep learning models. <a className="aboutme" href="http://www.umiacs.umd.edu/labs/pirl/" target="_blank">Perceptual Interfaces and Reality Lab</a> in <a className="aboutme" href="https://cfar.umd.edu/" target="_blank">the CfAR</a>. </p>
                    <p><strong>Paper(s):</strong><a className="aboutme" href="https://arxiv.org/abs/2402.07901" target="_blank">FAST: Factorizable Attention for Speeding up Transformers</a></p>
                    <p><strong>Skills: </strong>Swift, ARKit 6, Python, PyTorch</p>
                  </div>
                  <div className="experience">
                    <h3>Undergraduate Researcher</h3>
                    <h3>Univerity of Maryland - College Park (CLIP)</h3>
                    <p>08/23 - 05/24</p>
                    <p>Contributed to prompt survey paper. Focused on multimodal, evaluation, and Chain-of-Thought prompting techniques <a className="aboutme" href="http://www.umiacs.umd.edu/labs/clip/" target="_blank">Computational Linguistics and Information Processing Lab</a> in <a className="aboutme" href="https://cfar.umd.edu/" target="_blank">the CfAR</a>. </p>
                    <p><strong>Paper(s):</strong><a className="aboutme" href="https://arxiv.org/abs/2406.06608/" target="_blank">The Prompt Report: A Systematic Survey of Prompting Techniques</a></p>
                    <p><strong>Skills: </strong>Python</p>
                  </div>
                  <div className="experience">
                    <h3>Undergraduate Researcher</h3>
                    <h3>Univerity of Maryland - College Park (iSchool)</h3>
                    <p>07/21 - 08/22</p>
                    <p>I was a part of the web privacy research group under Professor Ido Sivan-Sevilla. I worked with Python, OpenWPM, and AWS EC2 to collect, parse, and analyze web privacy data to identify trends and correlations in how third-party web trackers follow users’ movements and collect personal data.
                      We complied our work to present at the 3rd annual Applications of Contextual Integrity Symposium at the University of Chicago. </p>
                    <p><strong>Skills: </strong>Python, Amazon Web Services (AWS), SQL</p>
                  </div>
                  <div className="experience">
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
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <h3>Education</h3>
            <Education />
          </TabPanel>
          <TabPanel>
            <h3>Contact & Resume</h3>
            <div className="contact-info">
              <div className="resume-download">
                <a className="aboutme" href={resume} download>Download Resume</a>
              </div>
              <div className="phone-number">
                <p>925-997-0461</p>
              </div>
              <div className="email">
                <a className="aboutme" href="mailto:pdulepet@umd.edu" target="_blank">pdulepet@umd.edu</a>
              </div>
              <div className="social-links">
                <a className="aboutme" href="https://www.linkedin.com/in/pranavdulepet" target="_blank">LinkedIn</a>
                <a className="aboutme" href="https://github.com/pranavdulepet" target="_blank">GitHub</a>
              </div>
            </div>
          </TabPanel>

        </Tabs>
      </Content>
      <Footer>
        © 2024 Pranav Dulepet
      </Footer>
    </Container>
  );
};

export default Home;
