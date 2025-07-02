import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './HomePage.css';
import Education from './EducationComponent';
import { ThemeContext } from './ThemeContext';

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
import amazon from './images/amazon.png';
import apple from './images/apple-logo.png';

import { Mail, Linkedin, Github, Phone, FileText } from 'lucide-react';

import pranav from './images/pranav-dulepet-nature-pfp.heic';
import cv from './images/pranav_dulepet_cv_grad_apps.pdf';

// Define light and dark themes
const lightTheme = {
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 240, 240, 0.85))',
  containerBg: 'rgba(255, 255, 255, 0.7)',
  text: '#1a1a1a',
  subtitleText: '#555',
  footerText: '#777',
  cardBg: 'white',
  cardBorder: 'rgba(0, 0, 0, 0.1)',
  aboutSectionBg: 'rgba(255, 255, 255, 0.8)',
  currentInterestsBg: 'rgba(255, 255, 255, 0.9)',
  tabListBg: 'rgba(240, 240, 240, 0.8)',
  tabBg: 'white',
  tabText: '#555',
  tabSelectedText: '#1a1a1a',
  contactInfoBg: 'rgba(255, 255, 255, 0.8)',
  resumeButtonBg: '#1a1a1a',
  resumeButtonText: 'white',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
  cardBoxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
  cardHoverBoxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
  linkBg: 'rgba(96, 89, 77, 0.1)',
  linkHoverBg: 'rgba(96, 89, 77, 0.2)',
  borderColor: 'rgba(0, 0, 0, 0.1)',
  publicationBorder: 'rgba(0, 0, 0, 0.1)',
};

const darkTheme = {
  background: 'linear-gradient(135deg, rgba(25, 25, 35, 0.95), rgba(15, 15, 25, 0.85))',
  containerBg: 'rgba(30, 30, 40, 0.7)',
  text: '#f0f0f0',
  subtitleText: '#ccc',
  footerText: '#999',
  cardBg: '#2a2a3a',
  cardBorder: 'rgba(255, 255, 255, 0.1)',
  aboutSectionBg: 'rgba(40, 40, 50, 0.8)',
  currentInterestsBg: 'rgba(40, 40, 50, 0.9)',
  tabListBg: 'rgba(40, 40, 50, 0.8)',
  tabBg: '#2a2a3a',
  tabText: '#ccc',
  tabSelectedText: '#f0f0f0',
  contactInfoBg: 'rgba(40, 40, 50, 0.8)',
  resumeButtonBg: '#4a4a5a',
  resumeButtonText: '#f0f0f0',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
  cardBoxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  cardHoverBoxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
  linkBg: 'rgba(120, 120, 140, 0.2)',
  linkHoverBg: 'rgba(120, 120, 140, 0.3)',
  borderColor: 'rgba(255, 255, 255, 0.1)',
  publicationBorder: 'rgba(255, 255, 255, 0.1)',
};

// Global styles for theme
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', 'Rubik', sans-serif;
    margin: 0;
    padding: 0;
    background: ${props => props.theme.background},
      url('./images/IMG_8858.jpg') no-repeat center center fixed;
    background-size: cover;
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: ${props => props.theme.containerBg};
    backdrop-filter: blur(10px);
    padding: 30px;
    border-radius: 24px;
  }

  .aboutme {
    text-decoration: none;
    color: ${props => props.theme.text};
    background: ${props => props.theme.linkBg};
    padding: 4px 8px;
    border-radius: 8px;
    transition: all 0.2s ease;
    font-weight: 500;
  }

  .aboutme:hover {
    background: ${props => props.theme.linkHoverBg};
    transform: translateY(-1px);
  }

  .react-tabs__tab-list {
    border-bottom: none;
    margin-bottom: 40px;
    display: flex;
    gap: 15px;
    padding: 12px;
    background: ${props => props.theme.tabListBg};
    border-radius: 16px;
    backdrop-filter: blur(8px);
    border: 1px solid ${props => props.theme.borderColor};
  }

  .react-tabs__tab {
    padding: 12px 24px;
    border-radius: 12px;
    transition: all 0.2s ease;
    color: ${props => props.theme.tabText};
    font-weight: 600;
    opacity: 0.8;
    border: none;
    position: relative;
    overflow: hidden;
  }

  .react-tabs__tab::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: ${props => props.theme.text};
    transition: all 0.3s ease;
    transform: translateX(-50%);
    opacity: 0;
  }

  .react-tabs__tab--selected::after {
    width: 70%;
    opacity: 1;
  }

  .react-tabs__tab--selected {
    background: ${props => props.theme.tabBg};
    color: ${props => props.theme.tabSelectedText};
    opacity: 1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .react-tabs__tab:hover {
    background: ${props => props.theme.tabBg === 'white' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)'};
  }

  .react-tabs__tab-panel {
    background: transparent;
    padding: 20px;
    margin-top: 10px;
    box-sizing: border-box;
    min-height: 500px;
    width: 100%;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    position: absolute;
    border-radius: 16px;
    transform: translateY(10px);
    pointer-events: none;
  }

  .react-tabs__tab-panel--selected {
    display: block;
    height: 100%;
    opacity: 1;
    position: relative;
    transform: translateY(0);
    pointer-events: auto;
  }

  .project, .experience {
    background-color: ${props => props.theme.cardBg};
    box-shadow: ${props => props.theme.cardBoxShadow};
    border: 1px solid ${props => props.theme.cardBorder};
  }

  .project:hover, .experience:hover {
    box-shadow: ${props => props.theme.cardHoverBoxShadow};
  }
  
  .contact-info {
    background: ${props => props.theme.contactInfoBg};
    border: 1px solid ${props => props.theme.borderColor};
  }
  
  .resume-download a {
    background: ${props => props.theme.resumeButtonBg};
    color: ${props => props.theme.resumeButtonText};
  }
  
  .publication h4 {
    border-bottom: 1px solid ${props => props.theme.publicationBorder};
  }

  /* Ensure nested tabs have the same transition */
  .react-tabs .react-tabs__tab-panel {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  /* Ensure consistent tab panel heights */
  .react-tabs__tab-list + div {
    position: relative;
    min-height: 600px;
  }

  /* Ensure nested tabs maintain proper spacing */
  .react-tabs .react-tabs {
    margin-top: 20px;
  }

  .react-tabs .react-tabs__tab-list {
    margin-bottom: 30px;
  }
`;

// Styled components with theme support
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: ${props => props.theme.text};
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.subtitleText};
  margin: 10px 0 0 0;
`;

const Content = styled.main`
  background: ${props => props.theme.containerBg};
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: ${props => props.theme.boxShadow};
  
  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 15px;
  }
`;

const Footer = styled.footer`
  margin-top: 40px;
  font-size: 0.9rem;
  color: ${props => props.theme.footerText};
`;

/* New Styled Components for Rounded Translucent Backgrounds */
const AboutSection = styled.div`
  background: ${props => props.theme.aboutSectionBg};
  backdrop-filter: blur(4px);
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CurrentInterestsSection = styled.div`
  background: ${props => props.theme.currentInterestsBg};
  border-radius: 15px;
  padding: 20px;
  margin-top: 10px;
  border: 1px solid ${props => props.theme.borderColor};
`;

// Theme toggle button
const ThemeToggle = styled.button`
  background: ${props => props.isDark ? '#f0f0f0' : '#2a2a3a'};
  color: ${props => props.isDark ? '#2a2a3a' : '#f0f0f0'};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:focus {
    outline: none;
  }
`;

const ContactIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.text};
    background: ${props => props.theme.linkBg};
    padding: 8px;
    border-radius: 50%;
    transition: all 0.2s ease;
    
    &:hover {
      background: ${props => props.theme.linkHoverBg};
      transform: translateY(-3px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
  
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const Home = () => {
  // State for theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for user's preferred color scheme on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add or remove dark-mode class from body
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  };

  // Set initial body class on component mount
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  /* Tab Content Components */
  const AboutContent = () => (
    <>
      <h3>About</h3>
      <AboutSection>
        <p>


          As a master's student at <a className="aboutme" href="https://www.clsp.jhu.edu" target="_blank" rel="noopener noreferrer">
            Johns Hopkins University</a> studying AI and Human Language Technologies and as a former computer science student at the <a className="aboutme" href="https://www.cs.umd.edu/" target="_blank" rel="noopener noreferrer"> the University of Maryland - College Park
          </a>, I am passionate about using technology to tackle everyday problems. My experience in a variety of fields within
          computer science, from app development to machine learning, has given me a unique perspective on how technology can be
          used to create innovative solutions. I am particularly interested in a wide range of applications, specifically involving{' '}
          <a className="aboutme" href="https://arxiv.org/abs/2402.07901" target="_blank" rel="noopener noreferrer">
            deep learning and AI</a> in the contexts of <a className="aboutme" href="https://www.paragonfellowship.org" target="_blank" rel="noopener noreferrer">policy</a>,
          healthcare, and education. I am constantly seeking new opportunities to learn and grow, and I am eager to apply my skills and knowledge to make a meaningful difference.
        </p>
      </AboutSection>
      <h3>Current Interests</h3>
      <CurrentInterestsSection>
        <p>
          • ML Systems
          <br />
          • Long-Context LLMs
          <br />
          • AI Safety & Policy
        </p>
      </CurrentInterestsSection>
    </>
  );

  const ProjectsContent = () => (
    <>
      <h3>Projects</h3>
      <div className="project-container">
        <div className="project">
          <a href="http://www.agoraai.app/" target="_blank" rel="noopener noreferrer">
            <img src={agora} alt="Project 1" />
          </a>
          <h3>agora.</h3>
          <a
            className="aboutme"
            href="https://www.agoraai.app/media"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Ft. by University of Maryland)
          </a>
          <p className="project">
            <strong>Skills: </strong>Python, Large Language Models, React, Express, Swift, MongoDB
          </p>
        </div>
        <div className="project">
          <a href="https://apps.apple.com/us/app/college-ro/id1577113429" target="_blank" rel="noopener noreferrer">
            <img src={collegero} alt="Project 1" />
          </a>
          <h3>CollegeRO</h3>
          <a
            className="aboutme"
            href="https://dbknews.com/2022/03/06/umd-student-creates-app-to-help-students-find-research-opportunities/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Ft. in The Diamondback, UMD's newspaper)
          </a>
          <p className="project">
            <strong>Skills: </strong>Full-Stack iOS Development, Rest APIs, MongoDB, AWS, GitHub, Google/Firebase Analytics
          </p>
        </div>
        <div className="project">
          <a href="https://github.com/pranavdulepet/aerial-object-detection" target="_blank" rel="noopener noreferrer">
            <img src={aerial} alt="Project 1" />
          </a>
          <h3>Aerial Object Detection</h3>
          <a className="aboutme" href="https://www.marksz.org/hackweek/" target="_blank" rel="noopener noreferrer">
            (1st Place in the Northrop Grumman Innovation Challenge)
          </a>
          <p className="project">
            <strong>Skills: </strong>Python, YOLOv5, PyTorch, Google Colab, Matplotlib
          </p>
        </div>
        <div className="project">
          <a href="https://github.com/pranavdulepet/legalai" target="_blank" rel="noopener noreferrer">
            <img src={legalai} alt="Project 4" />
          </a>
          <h3>LegalAI</h3>
          <p className="project">
            <strong>Skills: </strong>scikit-learn, spaCy, Elasticsearch, Textacy, Blackstone, pytextrank
          </p>
        </div>
        <div className="project">
          <a href="https://github.com/pranavdulepet/umd-next/blob/main/umd-amzn-design-challenge.pdf" target="_blank" rel="noopener noreferrer">
            <img src={umdnext} alt="Project 3" />
          </a>
          <h3>UMDNext</h3>
          <a
            className="aboutme"
            href="https://sites.google.com/umd.edu/amazondesignchallenge/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            (2nd Place in the Amazon-UMD Product Design Challenge)
          </a>
          <p className="project">
            <strong>Skills: </strong>Product Design, Customer and Market Research, Figma, Microsoft PowerPoint, UI/UX
          </p>
        </div>
        <div className="project">
          <a href="https://github.com/umd-fire-coml/2022-t1-convolutional" target="_blank" rel="noopener noreferrer">
            <img src={musicrec} alt="Project 2" />
          </a>
          <h3>Music Recommender</h3>
          <p className="project">
            <strong>Skills: </strong>TensorFlow, Keras, K-Nearest Neighbors, Triplet Loss, Python, Google Colab, GitHub
          </p>
        </div>
        <div className="project">
          <a href="https://apps.apple.com/us/app/things-near-me/id1506053357?ls=1" target="_blank" rel="noopener noreferrer">
            <img src={thingsnearme} alt="Project 5" />
          </a>
          <h3>Things Near Me</h3>
          <p className="project">
            <strong>Skills: </strong>Full-Stack iOS Development, Swift, UIKit, Firebase
          </p>
        </div>
        <div className="project">
          <a href="https://github.com/pranavdulepet/open_house_sign.git" target="_blank" rel="noopener noreferrer">
            <img src={signstoleads} alt="Project 6" />
          </a>
          <h3>Signs To Leads</h3>
          <p className="project">
            <strong>Skills: </strong>Full-Stack iOS Development, Swift, UIKit, Firebase
          </p>
        </div>
        <div className="project">
          <a href="https://devpost.com/software/aura-obgpw7" target="_blank" rel="noopener noreferrer">
            <img src={aura} alt="Project 7" />
          </a>
          <h3>Aura</h3>
          <p className="project">
            <strong>Skills: </strong>Full-Stack iOS Development, NLP Libraries, Google Cloud, GitHub
          </p>
        </div>
      </div>
    </>
  );

  const IndustryContent = () => (
    <div className="industry-experience">
      <div className="experience">
        <h3>Graduate SWE Intern (AI/ML)</h3>
        <a href="https://www.apple.com/apple-intelligence/" target="_blank" rel="noopener noreferrer">
          <img src={apple} alt="Apple" />
        </a>
        <h3>Amazon</h3>
        <p>05/25 - 08/25</p>
        <p>Apple Intelligence - building agentic frameworks</p>
        <p><strong>Skills:</strong> Swift, SwiftUI, LLM inference, LLM evaluation</p>
      </div>
      <div className="experience">
        <h3>SDE Intern (ML)</h3>
        <a href="https://www.alexa.com" target="_blank" rel="noopener noreferrer">
          <img src={amazon} alt="Amazon" />
        </a>
        <h3>Amazon</h3>
        <p>06/24 - 08/24</p>
        <p>Developed an end-to-end agentic LLM pipeline for generating personalized <a
          className="aboutme"
          href="https://www.amazon.com/alexa-routines/b?ie=UTF8&node=21442922011"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alexa Routine
        </a> recommendations. Article outlining tools and experiments coming soon!</p>
        <p><strong>Skills:</strong> Python, Spark, AWS Bedrock, AWS SageMaker, Closed & Open Source LLMs</p>
      </div>
      <div className="experience">
        <h3>SWE Intern</h3>
        <a href="https://www.fidelity.com/" target="_blank" rel="noopener noreferrer">
          <img src={fidelity} alt="Fidelity" />
        </a>
        <h3>Fidelity Investments</h3>
        <p>06/23 - 08/23</p>
        <p>
          I built a LinkedIn-like MyNetwork recommendation engine for internal Fidelity employees. I used a graph neural
          network approach to create a hybrid recommendation model with reinforcement learning. Here is an article I wrote
          with more information:{' '}
          <a
            className="aboutme"
            href="https://medium.com/@pdulepet/enterprise-mynetwork-platform-c138f7e98537"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>
          .
        </p>
        <p>
          <strong>Skills: </strong>Python, PyTorch, DGL, Graph Neural Networks, Swift, NetworkX, Neo4j
        </p>
      </div>
      <div className="experience">
        <h3>ML Intern</h3>
        <a href="https://www.capitalone.com/" target="_blank" rel="noopener noreferrer">
          <img src={capitalone} alt="Capital One" />
        </a>
        <h3>Capital One</h3>
        <p>01/23 - 05/23</p>
        <p>
          I implemented a similarity search framework to use on financial graph embeddings as part of the Enterprise Graph
          Services team. I compared and benchmarked NMSLIB and ANNOY on samples of up to 5 million in size with
          high-dimensionality. Here is an article I wrote with more information:{' '}
          <a
            className="aboutme"
            href="https://www.capitalone.com/tech/machine-learning/similarity-search-graph-embeddings/"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>
          .
        </p>
        <p>
          <strong>Skills: </strong>Python, NMSLIB, ANNOY, scikit-learn, GloVe, Graph Machine Learning
        </p>
      </div>
      <div className="experience">
        <h3>SWE Intern</h3>
        <a href="https://www.evozyne.com/" target="_blank" rel="noopener noreferrer">
          <img src={evozyne} alt="Evozyne" />
        </a>
        <h3>Evozyne</h3>
        <p>06/22 - 08/22</p>
        <p>
          I researched and applied SMT solvers to model the gene cloning process. I used Pandas, Matplotlib, and Seaborn to
          analyze and visualize ways to improve the model by comparing the performance of different algorithms. Here is an
          article I wrote with more information:{' '}
          <a
            className="aboutme"
            href="https://medium.com/@pdulepet/smt-in-computational-biology-dccf006eb397"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>
          .
        </p>
        <p>
          <strong>Skills: </strong>Python, Z3, Satisfiability Modulo Theories, Matplotlib, Seaborn, Pandas
        </p>
      </div>
      <div className="experience">
        <h3>SWE/Tech Lead</h3>
        <a href="https://hack4impact.org/" target="_blank" rel="noopener noreferrer">
          <img src={h4i} alt="Hack4Impact" />
        </a>
        <h3>Hack4Impact</h3>
        <p>09/21 - 05/23</p>
        <p>
          As a Tech Lead for two semesters, I was a liaison between the software engineers and the project managers. I
          assigned and completed tasks according to client requirements and wrote documentation before handing off code to
          the client. Our team worked with the California-based online tutoring non-profit, Step Up Tutoring during my first
          semester and the Virginia-based immigrant youth and family resource service, Edufuturo during my second semester.
        </p>
        <p>
          <strong>Skills: </strong>React.js, React Native, Node.js, Firebase
        </p>
      </div>
    </div>
  );

  const ResearchContent = () => (
    <div className="academic-experience">
      <div className="experience">
        <h3>Technology Policy Fellow</h3>
        <h3>Paragon Policy Fellowship</h3>
        <p>09/24 - 05/25</p>
        <p>
          I helped design a streamlined AI model approval process for the Santa Clara County Government, reducing redundant labor by
          consolidating three separate interviews into a centralized questionnaire. To support this process,
          I worked with two other fellows to implement an AI Usage Guidelines document that assists clients
          in accurately and comprehensively submitting GenAI applications.

          My team and I are currently working on creating a comprehensive AI dictionary and guidelines for Santa Clara County
          that we can use as a knowledge base for future downstream tasks such as a chatbot.

          <a className="aboutme" href="https://www.paragonfellowship.org" target="_blank" rel="noopener noreferrer">
            Paragon Policy Fellowship Website.
          </a>
        </p>
        <p>
          <strong>Skills: </strong>Literature Review, Policy Analysis
        </p>
      </div>
      <div className="experience">
        <h3>Undergraduate Researcher</h3>
        <h3>University of Maryland - College Park (GAMMA)</h3>
        <p>01/24 - 12/24</p>
        <p>
          Researched consistent view video and image generation.{' '}
          Developed a pipeline for camera-controlled view synthesis using Stable Diffusion and Zero123++,
          extending the Hawkl framework for text-controlled aerial view synthesis.
          <a className="aboutme" href="https://gamma.umd.edu" target="_blank" rel="noopener noreferrer">
            Geometric Algorithms for Modeling, Motion and Animation Lab
          </a>
          .
        </p>
        <p>
          <strong>Skills: </strong>Python, TensorFlow, Stable Diffusion
        </p>
      </div>
      <div className="experience">
        <h3>Undergraduate Researcher</h3>
        <h3>University of Maryland - College Park (PIRL)</h3>
        <p>02/23 - present</p>
        <p>
          Contributing to a new method called FAST (Factorizable Attention for Speeding up Transformers) that improves
          transformer efficiency by reducing computational and memory complexity from quadratic to linear.
          <p> </p>
          Developed iOS app using LiDAR scanner to create 3D representations of rooms and extract features. Used to capture
          Room Impulse Responses to then use differentiable acoustics to learn acoustic coefficients. Working on building
          upon NeRF with the scanner and modifying deep learning models.{' '}
          <a className="aboutme" href="http://www.umiacs.umd.edu/labs/pirl/" target="_blank" rel="noopener noreferrer">
            Perceptual Interfaces and Reality Lab
          </a>{' '}
          in{' '}
          <a className="aboutme" href="https://cfar.umd.edu/" target="_blank" rel="noopener noreferrer">
            the CfAR
          </a>
          .
        </p>
        <p>
          <strong>Paper(s):</strong>
          <a className="aboutme" href="https://arxiv.org/abs/2402.07901" target="_blank" rel="noopener noreferrer">
            FAST: Factorizable Attention for Speeding up Transformers
          </a>
        </p>
        <p>
          <strong>Skills: </strong>Swift, ARKit 6, Python, PyTorch
        </p>
      </div>
      <div className="experience">
        <h3>Undergraduate Researcher</h3>
        <h3>University of Maryland - College Park (CLIP)</h3>
        <p>08/23 - 05/24</p>
        <p>
          Contributed to prompt survey paper. Focused on multimodal, evaluation, and Chain-of-Thought prompting techniques{' '}
          <a className="aboutme" href="http://www.umiacs.umd.edu/labs/clip/" target="_blank" rel="noopener noreferrer">
            Computational Linguistics and Information Processing Lab
          </a>{' '}
          in{' '}
          <a className="aboutme" href="https://cfar.umd.edu/" target="_blank" rel="noopener noreferrer">
            the CfAR
          </a>
          .
        </p>
        <p>
          <strong>Paper(s):</strong>
          <a className="aboutme" href="https://arxiv.org/abs/2406.06608/" target="_blank" rel="noopener noreferrer">
            The Prompt Report: A Systematic Survey of Prompting Techniques
          </a>
        </p>
        <p>
          <strong>Skills: </strong>Python
        </p>
      </div>
      <div className="experience">
        <h3>Undergraduate Researcher</h3>
        <h3>University of Maryland - College Park (iSchool)</h3>
        <p>07/21 - 08/22</p>
        <p>
          I was a part of the web privacy research group under Professor Ido Sivan-Sevilla. I worked with Python, OpenWPM,
          and AWS EC2 to collect, parse, and analyze web privacy data to identify trends and correlations in how third-party
          web trackers follow users' movements and collect personal data. We compiled our work to present at the 3rd annual
          Applications of Contextual Integrity Symposium at the University of Chicago.
        </p>
        <p>
          <strong>Skills: </strong>Python, Amazon Web Services (AWS), SQL
        </p>
      </div>
      <div className="experience">
        <h3>Student Researcher</h3>
        <h3>University of Maryland - College Park (FIRE Program)</h3>
        <p>08/21 - 12/22</p>
        <p>
          We focused on learning the skills necessary to conduct research in our desired field as well as applying them. I
          was a part of the machine learning track where I further developed my knowledge of python, TensorFlow, Keras, and
          other common machine learning techniques and tools. The third semester was when it culminated in a cumulative
          research project, where we developed a music recommendation system based on user listening history. We implemented
          triplet loss and k-nearest neighbors to accomplish this task by aggregating song features and outputting
          recommended songs. We also had the opportunity to present this project at the FIRE symposium which had an audience
          of interested students and faculty.
        </p>
        <p>
          <strong>Skills: </strong>Python, TensorFlow, Keras
        </p>
      </div>
    </div>
  );

  const PublicationsContent = () => (
    <div className="publications">
      <div className="publication">
        <h4>Research Papers</h4>
        <ul>
          <li>
            <a className="aboutme" href="https://arxiv.org/abs/2402.07901" target="_blank" rel="noopener noreferrer">
              FAST: Factorizable Attention for Speeding up Transformers
            </a>
            <p className="publication-details">
            </p>
          </li>
          <li>
            <a className="aboutme" href="https://arxiv.org/abs/2406.06608/" target="_blank" rel="noopener noreferrer">
              The Prompt Report: A Systematic Survey of Prompt Engineering Techniques
            </a>
            <p className="publication-details">
              Under Review for Nature Springer, Morgan & Claypool
            </p>
          </li>
        </ul>
      </div>

      <div className="publication">
        <h4>Technical Writing</h4>
        <ul>
          <li>
            <a className="aboutme" href="https://medium.com/@pdulepet" target="_blank" rel="noopener noreferrer">
              Medium Blog
            </a>
            <p className="publication-details">
              Articles on ML, Software Engineering, and Technology
            </p>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Container>
          <Header className="header">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ProfileImage src={pranav} alt="Profile" />
              <ProfileDetails>
                <Title>Pranav Dulepet</Title>
                <Subtitle>AI/ML @ Johns Hopkins | AI Research</Subtitle>

                <ContactIcons>
                  <a href="mailto:ps.dulepet@gmail.com" title="Email" aria-label="Email">
                    <Mail size={22} />
                  </a>
                  <a href="https://www.linkedin.com/in/pranavdulepet" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                    <Linkedin size={22} />
                  </a>
                  <a href="https://github.com/pranavdulepet" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
                    <Github size={22} />
                  </a>
                  {/* <a href="tel:9259970461" title="Phone" aria-label="Phone">
                    <Phone size={22} />
                  </a> */}
                  <a href={resume} target="_blank" rel="noopener noreferrer" title="Resume" aria-label="Resume">
                    <FileText size={22} />
                  </a>
                </ContactIcons>

              </ProfileDetails>
            </div>
            <ThemeToggle isDark={isDarkMode} onClick={toggleTheme}>
              {isDarkMode ? '☀️' : '🌙'}
            </ThemeToggle>
          </Header>

          <Content>
            <Tabs>
              <TabList>
                <Tab>About</Tab>
                <Tab>Projects</Tab>
                <Tab>Experience</Tab>
                <Tab>Publications</Tab>
                <Tab>Education</Tab>
              </TabList>

              <TabPanel><AboutContent /></TabPanel>
              <TabPanel><ProjectsContent /></TabPanel>
              <TabPanel>
                <Tabs>
                  <TabList>
                    <Tab>Industry</Tab>
                    <Tab>Research</Tab>
                  </TabList>
                  <TabPanel><IndustryContent /></TabPanel>
                  <TabPanel><ResearchContent /></TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel><PublicationsContent /></TabPanel>
              <TabPanel><Education /></TabPanel>
            </Tabs>
          </Content>

          <ContactSection />
          <ResumeSection />
          <Footer>Last updated 07.02.2025</Footer>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

/* Helper Components with theme support */
const ContactSection = () => (
  <div className="contact-info">
    <div className="contact-item">
      <p>
        <a className="aboutme" href="mailto:ps.dulepet@gmail.com" target="_blank" rel="noopener noreferrer">
          ps.dulepet@gmail.com
        </a>
      </p>
    </div>
    <div className="contact-item">
      <p>925-997-0461</p>
    </div>
    <div className="social-links">
      <a className="aboutme" href="https://www.linkedin.com/in/pranavdulepet" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a className="aboutme" href="https://github.com/pranavdulepet" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  </div>
);

const ResumeSection = () => (
  <div className="resume-download">
    <a className="resume-button" href={resume} target="_blank" rel="noopener noreferrer">
      View Resume
    </a>
    <a className="resume-button" href={cv} target="_blank" rel="noopener noreferrer">
      View CV
    </a>
  </div>
);

const ProjectCard = ({ title, image, link, description, skills }) => (
  <div className="project">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} />
    </a>
    <h3>{title}</h3>
    <a
      className="aboutme"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      (Source)
    </a>
    <p className="project">
      <strong>Skills: </strong>{skills}
    </p>
  </div>
);



export default Home;