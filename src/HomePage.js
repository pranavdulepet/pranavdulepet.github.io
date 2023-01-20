import React from 'react';
import './HomePage.css';

function HomePage() {

  let slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  let prevBtn = document.querySelector('.prev');
  let nextBtn = document.querySelector('.next');

  prevBtn.addEventListener('click', function () {
    goToSlide(currentSlide - 1);
  });

  nextBtn.addEventListener('click', function () {
    goToSlide(currentSlide + 1);
  });

  function goToSlide(n) {
    // Remove the current-slide class from the current slide
    slides[currentSlide].classList.remove('current-slide');

    // Update the current slide index
    currentSlide = (n + slides.length) % slides.length;

    // Add the current-slide class to the new slide
    slides[currentSlide].classList.add('current-slide');
  }

  // Show the first slide
  slides[currentSlide].classList.add('current-slide');

  const experience_content = [
    { jobTitle: 'Incoming Software Engineer Intern', company: 'Capital One', companyLogo: 'cap-one.png', startDate: '01/2023', endDate: 'Present', description: 'Technology Incubator Program (Spring 2023)' },
    { jobTitle: 'Software Engineer Intern', company: 'Evozyne', companyLogo: 'evozyne.png', startDate: '06/2022', endDate: '08/2022', description: 'Worked on researching and implementing Satisfiability Modulo Theories (SMT) to the gene cloning process. Visualized the current process to determine ways to improve it using Seaborn and Matplotlib.' },
    { jobTitle: 'Software Engineer', company: 'Hack4Impact', companyLogo: 'h4i.png', startDate: '09/2021', endDate: 'Present', description: 'Tech Lead at the University of Maryland chapter for two semesters, Software Engineer for the National Engineering Committee from September 2021 to January 2023' },
    // other experience
  ];

  const experienceSection = document.getElementById('experience-list-industry');
  experienceSection.innerHTML = '';

  for (let i = 0; i < experience_content.length; i++) {
    const company = experience_content[i].company;
    const jobTitle = experience_content[i].jobTitle;
    const companyLogo = experience_content[i].companyLogo;
    const startDate = experience_content[i].startDate;
    const endDate = experience_content[i].endDate;
    const description = experience_content[i].description;

    experienceSection.innerHTML += `
      <div class="experience-item">
        <img src="${companyLogo}" alt="${company} logo">
        <div class="experience-info">
          <h3>${jobTitle} at ${company}</h3>
          <p>${startDate} - ${endDate}</p>
          <p>${description}</p>
        </div>
      </div>
    `;
  }

  const experience_content_academic = [
    { positionTitle: 'Research Assistant', group: 'the University of Maryland', startDate: '07/2021', endDate: '08/2022', description: 'Conducted web privacy research under Professor Ido Sivan-Sevilla' },
    { positionTitle: 'Student Researcher', group: 'the University of Maryland', startDate: '11/2021', endDate: '12/2022', description: 'Conducted ML research under Dr. Raymond Tu and the First-Year Innovation and Research Experience (FIRE) program' },
    // other experience
  ];

  const experienceSectionAcademic = document.getElementById('experience-list-academic');
  experienceSectionAcademic.innerHTML = '';

  for (let i = 0; i < experience_content_academic.length; i++) {
    const group = experience_content_academic[i].group;
    const positionTitle = experience_content_academic[i].positionTitle;
    const startDate = experience_content_academic[i].startDate;
    const endDate = experience_content_academic[i].endDate;
    const description = experience_content_academic[i].description;

    experienceSectionAcademic.innerHTML += `
      <div class="experience-item">
        <div class="experience-info">
          <h3>${positionTitle} at ${group}</h3>
          <p>${startDate} - ${endDate}</p>
          <p>${description}</p>
        </div>
      </div>
    `;
  }


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
          <h1>Pranav Dulepet</h1>
        </div>
        <div class="menu">
          <ul>
            <li><a href="#about-section">About Me</a></li>
            <li><a href="#experience-section">Experience</a></li>
            <li><a href="#projects-section">Projects</a></li>
            <li><a href="#classes-section">Classes</a></li>
            <li><a href="#contact-section">Contact</a></li>
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
          <div class="slider-container">
            <div class="slider-wrapper">
              <div class="slide">
                <img src="project1.png" alt="Project 1"></img>
                <h3>Project 1</h3>
                <p>A short description of the project.</p>
                <a href="#">View Project</a>
                <a href="#">View Code</a>
              </div>
              <div class="slide">
                <img src="project2.png" alt="Project 2"></img>
                <h3>Project 2</h3>
                <p>A short description of the project.</p>
                <a href="#">View Project</a>
                <a href="#">View Code</a>
              </div>

            </div>
            <button class="prev">prev</button>
            <button class="next">next</button>
          </div>
        </div>
        <div id="experience-section" className="experience-section">
          <h3>Experience</h3>
          <h2>Industry</h2>
          <div id="experience-list-industry"></div>
          <h2>Academic</h2>
          <div id="experience-list-academic"></div>
        </div>
        <div id="classes-section" className="classes-section">
          <h3>Classes</h3>
          <ul>
            <li>Advanced React</li>
            <li>Node.js for Beginners</li>
          </ul>
        </div>
        <div id="contact-section" className="contact-section">
          <h3>Contact Me</h3>
          <p>Email: john.doe@example.com</p>
          <p>Phone: 555-555-5555</p>
          <div className="social-links">
            <a href="https://linkedin.com/in/johndoe">LinkedIn</a>
            <a href="https://github.com/johndoe">GitHub</a>
          </div>
        </div>
      </div>
    </div >
  );
}

export default HomePage;