import React from "react";

import ProjectCard from "../components/ProjectCard";

import "../style/Projects.css";

class Projects extends React.Component {


  componentDidMount() {
    document.title = "Projects";
    document.getElementById("main").classList.add("projects");
  }

  componentWillUnmount() {
    document.getElementById("main").classList.remove("projects");
  }

  render() {
    return (
      <main id="main">

        <div className="project-container">
          <ProjectCard className="project-card" title="Test" image="../public/hero.jfif" 
            description="TEsT" learn="/"/>
          
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