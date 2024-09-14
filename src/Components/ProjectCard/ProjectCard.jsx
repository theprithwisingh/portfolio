import React from 'react';
import './ProjectCard.css'; // Importing the CSS file
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ image, title, description,stack,link,url}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <button disabled>{stack}</button>
        <div className="project-links">
          <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
            Visit
          </a>
          <a href={url} className="project-link" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
