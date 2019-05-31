import React from 'react';
import { CSSTransition } from 'react-transition-group';

const SideBarRight = ({mounted}) =>
  <div id="sidebar-right">
    <CSSTransition timeout={3000} classNames="fadein" in={mounted}>
      <ul>
        <li id="sidebar-email"><a href="mailto:jbberinger@gmail.com" target="_blank" rel="noopener noreferrer">jbberinger@gmail.com</a></li>
        <li className="arrow">^</li>
        <li className="arrow">^</li>
        <li className="arrow">^</li>
      </ul>
    </CSSTransition>
  </div>


export default SideBarRight;