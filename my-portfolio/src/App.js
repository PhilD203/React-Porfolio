import React from 'react';
import './App.css';
import projects from './projectData/projectData.json'
import Nav from './components/Nav';
import IntroSection from './components/IntroSection';
import About from './components/About';
import ProjectSection from './components/ProjectSection'
import Resume from './components/Resume';
import Footer from './components/Footer';
import Col from './components/Col';
import Container from './components/Container';
import Wrapper from './components/Wrapper';




class App extends React.Component {

  state = {
    projects,
  }

  render() {
    return (
      <div className="AppBody">
        <Nav />
        <IntroSection />
        <Container>
        <About />
        </Container>
        <Container>
        <ProjectSection />
        <Resume />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
