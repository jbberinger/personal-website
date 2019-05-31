import React from 'react';
import { CSSTransition } from 'react-transition-group';

const WelcomeSection = ({ mounted }) =>
  < section id="welcome-section" >
    <CSSTransition timeout={3000} classNames="fadeup-hey" in={mounted}>
      <h2>Hey, my name is</h2>
    </CSSTransition>
    <CSSTransition timeout={3000} classNames="fadeup-name" in={mounted}>
      <h1>Justin Beringer.</h1>
    </CSSTransition>
    <CSSTransition timeout={3000} classNames="fadeup-desc" in={mounted}>
      <span id="welcome-description">
        I'm a full stack developer based in Victoria, BC with a passion for building
        beautiful and functional web sites and applications.
        </span>
    </CSSTransition>
    <CSSTransition timeout={3000} classNames="fadeup-contact" in={mounted}>
      <a href="mailto:jbberinger@gmail.com" target="_blank" rel="noopener noreferrer"><button className="contact-button" type="button">Contact</button></a>
    </CSSTransition>
  </section >

export default WelcomeSection;