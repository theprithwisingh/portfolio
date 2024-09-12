import React from 'react';
import './Project.css'
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
const Projects = () => {
  return (
  <div className="Project-container">
      <h1>Projects</h1>
      <p>Smart projects, impactful outcomes.</p>
      <div className='projects'>
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
      </div>
    </div>
  );
};

export default Projects;

