import React from "react";
import ProjectCard from "../components/ProjectCard";

import "../style/Projects.css";

class Projects extends React.Component {


  componentDidMount() {
    document.title = "Projects";
    document.getElementById("main").classList.add("projects");
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    document.getElementById("main").classList.remove("projects");
  }

  render() {
    return (
      <main id="main">
        <h1 className="projects-title">Projects</h1>
        <div className="project-container">
          <ProjectCard className="project-card" title="Portfolio Website!" image="../public/hero.jfif" 
            description="This is the current website that you're currently on!" learn="/"/>
          
          <ProjectCard className="project-card" title="Test" image="../public/hero.jfif" 
            description="TEsT" learn="/"/>

          <ProjectCard className="project-card" title="Test" image="../public/hero.jfif" 
            description="TEsT" learn="/"/>

          <ProjectCard className="project-card" title="Test" image="../public/hero.jfif" 
            description="TEsT" learn="/"/>
          
        </div>
      </main>
    );
  }
}

export default Projects;