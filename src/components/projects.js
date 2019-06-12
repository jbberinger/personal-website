import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import github from './icons/github.svg';
import codepen from './icons/codepen.svg';
import glitch from './icons/glitch.svg';
import youtube from './icons/youtube.svg';
import markdown from './images/MarkdownApp.png';
import urlshortener from './images/urlshortener.png';
import powerlifting from './images/PowerliftingApp.png';
import snake from './images/SnakeApp.png';

const ProjectsSection = ({ isVisible }) =>
  <section className="projects-section" id="projects-section">
    <TransitionGroup>

      {isVisible.first &&
        <CSSTransition appear={true} timeout={1600} classNames="fadeup-scroll-projects" in={isVisible.first} key="1">
          <div>
            <div className="section-title-container"><h2 className="section-title">Projects</h2><span className="line" /></div>
            {/* Markdown Previewer */}
            <div className="project-content-right">
              <div className="project-text-right">
                <h3>Markdown Previewer</h3>
                <h4>JavaScript / React / SCSS  / Marked.js</h4>
                <div className="condensed" id="project-1">
                  <article className="project-description-right">
                    A web application for previewing github flavoured markdown using the Marked.js parser.
                  </article>
                </div>
                <div className="project-buttons-right">
                  <a href="https://codepen.io/jbberinger/full/dLKdBP" target="_blank" rel="noopener noreferrer"><img src={codepen} className="project-icon-left" alt="codepen icon" /></a>
                </div>
              </div>
              <div className="project-img-container">
                <img className="project-img" src={markdown} alt="markdown previewer app screenshot" />
              </div>
            </div>
          </div>
        </CSSTransition>
      }

      {isVisible.second &&
        <CSSTransition appear={true} timeout={1600} classNames="fadeup-scroll-projects" in={isVisible.second} key="2">
          <div>
            {/* URL Shortener App */}
            <div className="project-content-left">
              <div className="project-img-container">
                <img className="project-img" src={urlshortener} alt="url shortener app screenshot" />
              </div>
              <div className="project-text-left">
                <h3>URL Shortener API</h3>
                <h4>JavaScript / Node.js / Express.js / MongoDB</h4>
                <div className="condensed" id="project-2">
                  <article className="project-description-left">
                    A microservice for shortening URLs using MongoDB and a RESTful API.
                  </article>
                </div>
                <div className="project-buttons-left">
                  <a href="https://github.com/jbberinger/URL-Shortener-API" target="_blank" rel="noopener noreferrer"><img src={github} className="project-icon-left" alt="github icon" /></a>
                  <a href="https://turquoise-timer.glitch.me/" target="_blank" rel="noopener noreferrer"><img src={glitch} className="project-icon-left" alt="youtube icon" /></a>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      }

      {isVisible.third &&
        <CSSTransition appear={true} timeout={1600} classNames="fadeup-scroll-projects" in={isVisible.third} key="3">
          <div>
            {/* Powerlifting App */}
            <div className="project-content-right">
              <div className="project-text-right">
                <h3>Powerlifting App</h3>
                <h4>Java / JavaFX / CSS</h4>
                <div className="condensed" id="project-3">
                  <article className="project-description-right">
                    An application for calculating and visualizing a loaded barbell with animation. Also, generate a profile of your best lifts and view the current IPF world records.
                  </article>
                </div>
                <div className="project-buttons-right">
                  <a href="https://github.com/jbberinger/powerlifting-application" target="_blank" rel="noopener noreferrer"><img src={github} className="project-icon-right" alt="github icon" /></a>
                  <a href="https://youtu.be/HwwiNK744RE" target="_blank" rel="noopener noreferrer"><img src={youtube} className="project-icon-right" alt="youtube icon" /></a>
                </div>
              </div>
              <div className="project-img-container">
                <img className="project-img" src={powerlifting} alt="powerlifting app screenshot" />
              </div>
            </div>
          </div>
        </CSSTransition>
      }

      {isVisible.fourth &&
        <CSSTransition appear={true} timeout={1600} classNames="fadeup-scroll-projects" in={isVisible.fourth} key="4">
          <div>
            {/* Snake Game */}
            <div className="project-content-left">
              <div className="project-img-container">
                <img className="project-img" src={snake} alt="snake game screenshot" />
              </div>
              <div className="project-text-left">
                <h3>Snake Game</h3>
                <h4>Java</h4>
                <div className="condensed" id="project-4">
                  <article className="project-description-left">
                    An implementation of the classic snake game with difficulty settings, persistent stats, and sound effects.
                    </article>
                </div>
                <div className="project-buttons-left">
                  <a href="https://github.com/jbberinger/Snake" target="_blank" rel="noopener noreferrer"><img src={github} className="project-icon-left" alt="github icon" /></a>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      }

    </TransitionGroup>
  </section>

export default ProjectsSection;