import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ContactSection = ({ isVisible }) =>
  <section className="contact-section" id="contact-section">
    <TransitionGroup>
      {isVisible &&
        <CSSTransition appear={true} timeout={1600} classNames="fadeup-scroll" in={isVisible} key="abc">
          <div className="contact-container">
            <div className="contact-content">
              <p>Give me a shout if you'd like to work together,<br />or if you just want to grab a coffee!</p>
            </div>
            <a href="mailto:jbberinger@gmail.com" target="_blank" rel='noopener noreferrer'><button className="contact-button" type="button">contact me</button></a>
          </div>
        </CSSTransition>
      }
    </TransitionGroup>
  </section>

export default ContactSection;