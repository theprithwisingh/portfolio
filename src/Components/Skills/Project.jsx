/*import React, { useState } from 'react';
import './Project.css';

const Projects = () => {
  const [selectedMenu, setSelectedMenu] = useState('All');

  const projects = [
    { id: 1, name: 'Project 1', category: 'Products', description: 'Description 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Project 2', category: 'Blockchain', description: 'Description 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Project 3', category: 'Full Stack', description: 'Description 3', imageUrl: 'https://via.placeholder.com/150' },

    { id: 4, name: 'Project 4', category: 'Products', description: 'Description 4', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Project 5', category: 'Blockchain', description: 'Description 5', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Project 6', category: 'Full Stack', description: 'Description 6', imageUrl: 'https://via.placeholder.com/150' },

    { id: 7, name: 'Project 7', category: 'Products', description: 'Description 7', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Project 8', category: 'Blockchain', description: 'Description 8', imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Project 9', category: 'Full Stack', description: 'Description 9', imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Project 10', category: 'Products', description: 'Description 10', imageUrl: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Project 11', category: 'Blockchain', description: 'Description 11', imageUrl: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Project 12', category: 'Full Stack', description: 'Description 12', imageUrl: 'https://via.placeholder.com/150' }
  ];

  const filteredProjects = selectedMenu === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedMenu);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div>
    <div className="projects-container">
      <h1 className='title'>Look at My Project</h1>
      <ul className="menu">
        <li onClick={() => handleMenuClick('All')}>All</li>
        <li onClick={() => handleMenuClick('Products')}>Products</li>
        <li onClick={() => handleMenuClick('Blockchain')}>Blockchain</li>
        <li onClick={() => handleMenuClick('Full Stack')}>Full Stack</li>
      </ul>
      <div className="projects">
        {filteredProjects.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.imageUrl} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
export default Projects;
*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Projects = () => {
  const [selectedMenu, setSelectedMenu] = useState('All');

  const projects = [
    { id: 1, name: 'Project 1', category: 'Products', description: 'Description 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Project 2', category: 'Blockchain', description: 'Description 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Project 3', category: 'Full Stack', description: 'Description 3', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Project 4', category: 'Products', description: 'Description 4', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Project 5', category: 'Blockchain', description: 'Description 5', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Project 6', category: 'Full Stack', description: 'Description 6', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Project 7', category: 'Products', description: 'Description 7', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Project 8', category: 'Blockchain', description: 'Description 8', imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Project 9', category: 'Full Stack', description: 'Description 9', imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Project 10', category: 'Products', description: 'Description 10', imageUrl: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Project 11', category: 'Blockchain', description: 'Description 11', imageUrl: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Project 12', category: 'Full Stack', description: 'Description 12', imageUrl: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Project 13', category: 'Products', description: 'Description 13', imageUrl: 'https://via.placeholder.com/150' }
  ];

  const filteredProjects = selectedMenu === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedMenu);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="projects-container">
      <h1 className='title'>Look at My Projects</h1>
      <ul className="menu">
        <li onClick={() => handleMenuClick('All')}>All</li>
        <li onClick={() => handleMenuClick('Products')}>Products</li>
        <li onClick={() => handleMenuClick('Blockchain')}>Blockchain</li>
        <li onClick={() => handleMenuClick('Full Stack')}>Full Stack</li>
      </ul>
      <div className="projects">
        {filteredProjects.map((project) => (
          <div className="project" key={project.id}>
            <Link to={`/project/${project.id}`}>
              <img src={project.imageUrl} alt={project.name} className="project-image" />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
