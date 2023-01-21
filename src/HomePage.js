import React from 'react';
import './HomePage.css';
import collegero from './images/collegero-logo.jpg';
import aura from './images/aura-logo.png';
import github from './images/github-logo.png';
import signstoleads from './images/signstoleads-logo.png';
import thingsnearme from './images/thingsnearme-logo.jpg';
import umdnext from './images/umdnext-logo.png';

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
          <p>Sophomore computer science student at the University of Maryland - College Park</p>
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
        </div>
        <div id="classes-section" className="classes-section">
          <h3>Classes</h3>
        </div>
        <div id="contact-section" className="contact-section">
          <h3>Contact Me</h3>
          <div class="contact-info">
            <div class="phone-number">
              <h3>Phone Number</h3>
              <p>925-997-0461</p>
            </div>
            <div class="email">
              <h3>Email</h3>
              <a href="mailto:pdulepet@umd.edu" target="_blank">pdulepet@umd.edu</a>
            </div>
            <div class="social-links">
              <h3>Social</h3>
              <a href="https://www.linkedin.com/in/pranavdulepet" target="_blank">LinkedIn</a>
              <a href="https://github.com/pranavdulepet" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default HomePage;