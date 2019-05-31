import React from 'react';
import './styles/App.scss';
import './styles/transitions.scss';
import NavBar from './components/navbar';
import SideBarLeft from './components/sidebarLeft';
import SideBarRight from './components/sidebarRight';
import WelcomeSection from './components/welcome';
import AboutSection from './components/about';
import ProjectsSection from './components/projects';
import ContactSection from './components/contact';
import Footer from './components/footer';
import ScrollArrow from './util/scrollArrow';

/* TO DO
* - update github link for markdown parser after exporting it from codepen
*/

class App extends React.Component {

  state = {
    scrollPosition: 0,
    mounted: false,
    aboutVisible: false,
    projectsVisible: {
      first: false,
      second: false,
      third: false,
      fourth: false,
    },
    contactVisible: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ mounted: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // listens for scroll changes and updates state
  handleScroll = () => {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const height = document.documentElement.scrollHeight - clientHeight;
    const scrolled = scroll / height;

    let { aboutVisible, projectsVisible, contactVisible } = this.state;
    if (scrolled > 0.15) aboutVisible = true;
    if (scrolled > 0.4) projectsVisible.first = true;
    if (scrolled > 0.6) projectsVisible.second = true;
    if (scrolled > 0.7) projectsVisible.third = true;
    if (scrolled > 0.8) projectsVisible.fourth = true;
    if (scrolled > 0.9) contactVisible = true;

    this.setState({
      scrollPosition: scrolled,
      aboutVisible: aboutVisible,
      projectsVisible: projectsVisible,
      contactVisible: contactVisible
    });

  }

  // Scrolls to anchor point smoothly
  navLinkHandler = (event) => {
    let id = event.target.id;
    if (id === 'nav-about') {
      document.getElementById('about-section').scrollIntoView({ behavior: "smooth" });
    } else if (id === 'nav-projects') {
      document.getElementById('projects-section').scrollIntoView({ behavior: "smooth", inline: "start" });
    } else if (id === 'nav-contact') {
      this.loadAll();
      // Waits for components to load before scrolling
      setTimeout(() => {
        document.getElementById('footer').scrollIntoView(false);
      }, 300);

    }
  }

  loadAll = () => {
    let { aboutVisible, projectsVisible, contactVisible } = this.state;
    projectsVisible.first = true;
    projectsVisible.second = true;
    projectsVisible.third = true;
    projectsVisible.fourth = true;
    this.setState({
      aboutVisible: aboutVisible,
      projectsVisible: projectsVisible,
      contactVisible: contactVisible
    });
  }

  render() {
    return (
      <div className="app">
        <NavBar navLinkHandler={this.navLinkHandler} scrollPosition={this.state.scrollPosition} mounted={this.state.mounted} />
        <SideBarLeft mounted={this.state.mounted} />
        <SideBarRight mounted={this.state.mounted} />
        <div className="main">
          <WelcomeSection mounted={this.state.mounted} />
          <AboutSection isVisible={this.state.aboutVisible} />
          <ProjectsSection isVisible={this.state.projectsVisible} />
          <ContactSection isVisible={this.state.contactVisible} />
        </div>
        <Footer />
        <ScrollArrow scrollPosition={this.state.scrollPosition} mounted={this.state.mounted} />
      </div>
    );
  }
}

export default App; 