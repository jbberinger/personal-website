import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import portrait from './images/portrait.png'

const AboutSection = ({ isVisible }) =>
  <section className="about-section" id="about-section">
    <TransitionGroup>
      {isVisible &&
        <CSSTransition appear={true} timeout={1600} classNames="fadeup-scroll" in={isVisible} key="abc">
          <div>
            <div className="section-title-container about-title-container"><h2 className="section-title">About me</h2><span className="line" /></div>
            <div className="about-content">
              <div className="about-description">
                <div>
                  <p>Hey! I'm a full stack developer based in Victoria, BC, who loves tackling difficult challenges.</p>
                  <p>I got my start in programming with languages like Java, C, and C#, and have since applied that foundation into full stack web development.</p>
                  <p>Here are some of the languages and technologies I've worked with:</p>
                </div>
                <ul className="about-list">
                  {['JavaScript (ES6)', 'HTML5 and SCSS', 'React', 'MongoDB', 'Express.js', 'Socket.io', 'Java', 'C', 'C#', 'Python'].map(e => <li>{e}</li>)}
                </ul>
              </div>
              <div className="about-img-container">
                <img className="about-img" src={portrait} alt="portrait" />
              </div>
            </div>
          </div>
        </CSSTransition>
      }
    </TransitionGroup>
  </section>

export default AboutSection;