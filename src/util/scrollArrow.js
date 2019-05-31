import React from 'react';
import { CSSTransition } from 'react-transition-group';

const ScrollArrow = ({ scrollPosition, mounted }) =>
  <div className="floating-arrow-container" style={{ opacity: scrollPosition > 0 ? '0' : '1' }}>
    <CSSTransition timeout={3500} classNames="fade-arrow" in={mounted}>
      <span className="floating-arrow" id="floating-arrow">∨</span>
    </CSSTransition>
  </div>

export default ScrollArrow;