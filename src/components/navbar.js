import React from 'react';
import { CSSTransition } from 'react-transition-group';
import resume from './resume/Justin_Beringer_Resume.pdf'

const NavBar = ({ mounted, scrollPosition, navLinkHandler }) =>
  <CSSTransition timeout={3000} classNames="fadedown" in={mounted}>
    <nav className={getNavBarClasses(scrollPosition)} id='nav-bar'>
      <a className="nav-link" id='nav-about' onClick={navLinkHandler}>About</a>
      <a className="nav-link" id='nav-projects' onClick={navLinkHandler}>Projects</a>
      <a className="nav-link" id='nav-contact' onClick={navLinkHandler}>Contact</a>
      <a className="nav-link" href={resume} target="_blank" >Resume</a>
    </nav>
  </CSSTransition>

const getNavBarClasses = (scrollPos) => `nav-bar ${scrollPos > 0 ? ' nav-bar-shadow' : ''}`

export default NavBar;