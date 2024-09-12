import React from 'react';
import './ProjectCard.css'; // Importing the CSS file

const ProjectCard = ({ image, title, description, link, status }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
            Visit
          </a>
          {status && <span className={`status ${status}`}>{status}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
