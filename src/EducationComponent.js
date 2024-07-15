import React from 'react';
import './EducationComponent.css';
import umdcs from './images/umd-cs-logo.png';
import quest from './images/quest-logo.png';
import berk from './images/ucb-logo.png';
import foothill from './images/foothill-logo.jpeg';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: '',
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    this.setState({ selectedButton: event.target.name });
  }

  render() {
    return (
      <div>
        <div className="school-button-container">
          <img
            name="school1"
            className={`school-button ${this.state.selectedButton === 'school1' ? 'selected' : ''}`}
            onClick={this.handleButtonClick}
            src={umdcs}
            alt="school1 logo"
          />

          <img
            name="school2"
            className={`school-button ${this.state.selectedButton === 'school2' ? 'selected' : ''}`}
            onClick={this.handleButtonClick}
            src={quest}
            alt="school2 logo"
          />

          <img
            name="school3"
            className={`school-button ${this.state.selectedButton === 'school3' ? 'selected' : ''}`}
            onClick={this.handleButtonClick}
            src={berk}
            alt="school3 logo"
          />

          <img
            name="school4"
            className={`school-button ${this.state.selectedButton === 'school4' ? 'selected' : ''}`}
            onClick={this.handleButtonClick}
            src={foothill}
            alt="school4 logo"
          />
        </div>
        <div className="class-list">
          {this.state.selectedButton === 'school1' && (
            <ul>
              <a id="aboutme" href="https://www.cs.umd.edu/" target="_blank" rel="noopener noreferrer">
                B.S. (Honors) in Computer Science - Machine Learning, August 2021 - present
              </a>
              <div className="course-grid">
                <div className="course">
                  <a id="aboutme" href="https://www.cs.umd.edu/class/" target="_blank" rel="noopener noreferrer">
                    CMSC396H
                  </a>
                  <br />
                  Undergraduate Honors Seminar
                </div>
                <div className="course">
                  <a id="aboutme" href="https://www.cs.umd.edu/class/" target="_blank" rel="noopener noreferrer">
                    CMSC426
                  </a>
                  <br />
                  Computer Vision
                </div>
                <div className="course">
                  <a id="aboutme" href="https://www.cs.umd.edu/class/" target="_blank" rel="noopener noreferrer">
                    CMSC320
                  </a>
                  <br />
                  Data Science
                </div>
                <div className="course">
                  <a id="aboutme" href="https://www.cs.umd.edu/class/" target="_blank" rel="noopener noreferrer">
                    CMSC420
                  </a>
                  <br />
                  Advanced Data Structures
                </div>
                <div className="course">
                  <a id="aboutme" href="https://www.cs.umd.edu/class/" target="_blank" rel="noopener noreferrer">
                    CMSC351
                  </a>
                  <br />
                  Algorithms
                </div>
                <div className="course">
                  <a id="aboutme" href="https://www.cs.umd.edu/class/" target="_blank" rel="noopener noreferrer">
                    CMSC330
                  </a>
                  <br />
                  Organization of Programming Languages
                </div>
                <div className="course">
                  <a id="aboutme" href="https://www.fire.umd.edu/" target="_blank" rel="noopener noreferrer">
                    FIRE120, 198, 298
                  </a>
                  <br />
                  Machine Learning Research (FIRE program)
                </div>
                <div className="course">
                  <a id="aboutme" href="https://www.cs.umd.edu/class/fall2022/cmsc216/" target="_blank" rel="noopener noreferrer">
                    CMSC216
                  </a>
                  <br />
                  Introduction to Computer Systems
                </div>
                <div className="course">
                  <a id="aboutme" href="https://www.cs.umd.edu/class/spring2022/cmsc250-010X/" target="_blank" rel="noopener noreferrer">
                    CMSC250
                  </a>
                  <br />
                  Discrete Structures
                </div>
                <div className="course">
                  <a id="aboutme" href="https://www.cs.umd.edu/class/spring2022/cmsc132-010X-040X/" target="_blank" rel="noopener noreferrer">
                    CMSC132
                  </a>
                  <br />
                  Object Oriented Programming II
                </div>
                <div className="course">
                  <a id="aboutme" href="https://www-math.umd.edu/offered-courses/372-math-240-introduction-to-linear-algebra.html" target="_blank" rel="noopener noreferrer">
                    MATH240
                  </a>
                  <br />
                  Linear Algebra
                </div>
                <div className="course">
                  <a id="aboutme" href="https://www-math.umd.edu/offered-courses/412-stat-400-applied-probability-and-statistics-i.html" target="_blank" rel="noopener noreferrer">
                    STAT400
                  </a>
                  <br />
                  Applied Statistics & Probability I
                </div>
                <div className="course">
                  <a id="aboutme" href="https://www.cs.umd.edu/class/fall2021/cmsc131-01XX-03XX" target="_blank" rel="noopener noreferrer">
                    CMSC131
                  </a>
                  <br />
                  Object Oriented Programming I
                </div>
              </div>
            </ul>
          )}
          {this.state.selectedButton === 'school2' && (
            <ul>
              <a id="aboutme" href="https://www.rhsmith.umd.edu/quest" target="_blank" rel="noopener noreferrer">
                Honors Program at UMD, August 2022 - present
              </a>
              <div className="course-grid">
                <div className="course">
                  <a id="aboutme" href="https://www.rhsmith.umd.edu/quest/curriculum" target="_blank" rel="noopener noreferrer">
                    BMGT390H
                  </a>
                  <br />
                  Designing Innovative Systems
                </div>
                <div className="course">
                  <a id="aboutme" href="https://www.rhsmith.umd.edu/quest/curriculum" target="_blank" rel="noopener noreferrer">
                    BMGT438A
                  </a>
                  <br />
                  Applied Quantitative Analysis
                </div>
                <div className="course">
                  <a id="aboutme" href="https://www.rhsmith.umd.edu/quest/curriculum" target="_blank" rel="noopener noreferrer">
                    BMGT190H
                  </a>
                  <br />
                  Introduction to Design and Quality
                </div>
              </div>
            </ul>
          )}
          {this.state.selectedButton === 'school3' && (
            <ul>
              <a id="aboutme" href="https://www.berkeley.edu/" target="_blank" rel="noopener noreferrer">
                High School Dual-Enrollment, 2020
              </a>
              <div className="course-grid">
                <div className="course">
                  <a id="aboutme" href="https://inst.eecs.berkeley.edu/~cs61a/su20/" target="_blank" rel="noopener noreferrer">
                    COMPSCI61A
                  </a>
                  <br />
                  Structures and Interpretation of Computer Programs
                </div>
                <div className="course">
                  <a id="aboutme" href="https://classes.berkeley.edu/content/2020-summer-stat-c8-001-lec-001" target="_blank" rel="noopener noreferrer">
                    STATC8
                  </a>
                  <br />
                  Foundations of Data Science
                </div>
              </div>
            </ul>
          )}
          {this.state.selectedButton === 'school4' && (
            <ul>
              <a id="aboutme" href="https://www.foothill.edu/" target="_blank" rel="noopener noreferrer">
                High School Dual-Enrollment, 2020 - 2021
              </a>
              <div className="course-grid">
                <div className="course">
                  <a id="aboutme" href="https://catalog.foothill.edu/course-outlines/C-S-1B/" target="_blank" rel="noopener noreferrer">
                    CS1B
                  </a>
                  <br />
                  Intermediate Software Design with Java
                </div>
                <div className="course">
                  <a id="aboutme" href="https://catalog.foothill.edu/course-outlines/C-S-31A/" target="_blank" rel="noopener noreferrer">
                    CS31
                  </a>
                  <br />
                  Introduction to Database Management
                </div>
                <div className="course">
                  <a id="aboutme" href="https://catalog.foothill.edu/course-outlines/BUSI-12/" target="_blank" rel="noopener noreferrer">
                    BUS12
                  </a>
                  <br />
                  Intro to Data Analytics
                </div>
              </div>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Education;
