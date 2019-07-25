import React from 'react';
import './App.css';
import projects from './projectData/projectData.json'
import Nav from './components/Nav';
import AboutSection from './components/AboutSection';
import ProjectCard from './components/Project Card'
import Wrapper from './components/Wrapper';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {

  state = {
    projects,
  }

  render() {
    return (
      <div className="AppBody">
        <Nav />
        <AboutSection />
        <Contact />
        <Wrapper>
          {this.state.projects.map(project =>(
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
          />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
