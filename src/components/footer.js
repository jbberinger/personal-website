import React from 'react';

import instagram from './icons/instagram.svg';
import linkedin from './icons/linkedin.svg';
import github from './icons/github.svg';
import twitter from './icons/twitter.svg';
import codepen from './icons/codepen.svg';

const Footer = () =>
  <footer id='footer'>
    <a href="https://github.com/jbberinger" target="_blank" rel="noopener noreferrer">Designed & Built by Justin Beringer</a>
    <div className="footer-icon-container">
      <a href="https://www.instagram.com/justin.beringer/" target="_blank" rel="noopener noreferrer"><img src={instagram} className="footer-icon" alt="instagram icon" /></a>
      <a href="https://github.com/jbberinger/" target="_blank" rel="noopener noreferrer"><img src={github} className="footer-icon" alt="github icon" /></a>
      <a href="https://www.linkedin.com/in/justin-beringer/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="footer-icon" alt="linkedin icon" /></a>
      <a href="https://twitter.com/JustinBeringer" target="_blank" rel="noopener noreferrer"><img src={twitter} className="footer-icon" alt="twitter icon" /></a>
      <a href="https://codepen.io/jbberinger/" target="_blank" rel="noopener noreferrer"><img src={codepen} className="footer-icon" alt="codepen icon" /></a>
    </div>
  </footer>

export default Footer;