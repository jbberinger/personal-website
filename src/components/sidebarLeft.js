import React from 'react';
import { CSSTransition } from 'react-transition-group';
import instagram from './icons/instagram.svg';
import linkedin from './icons/linkedin.svg';
import github from './icons/github.svg';
import twitter from './icons/twitter.svg';
import codepen from './icons/codepen.svg';

const SideBarLeft = ({ mounted }) =>
  <div id="sidebar-left">
    <CSSTransition timeout={3000} classNames="fadein" in={mounted}>
      <ul>
        <li><a href="https://www.instagram.com/justin.beringer/" target="_blank" rel="noopener noreferrer"><img src={instagram} className="social-icon" alt="instagram icon" /></a></li>
        <li><a href="https://github.com/jbberinger/" target="_blank" rel="noopener noreferrer"><img src={github} className="social-icon" alt="github icon" /></a></li>
        <li><a href="https://www.linkedin.com/in/justin-beringer/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="social-icon" alt="linkedin icon" /></a></li>
        <li><a href="https://twitter.com/JustinBeringer" target="_blank" rel="noopener noreferrer"><img src={twitter} className="social-icon" alt="twitter icon" /></a></li>
        <li><a href="https://codepen.io/jbberinger/" target="_blank" rel="noopener noreferrer"><img src={codepen} className="social-icon" alt="codepen icon" /></a></li>
        <li className="arrow">^</li>
        <li className="arrow">^</li>
        <li className="arrow">^</li>
      </ul>
    </CSSTransition>
  </div>

export default SideBarLeft;