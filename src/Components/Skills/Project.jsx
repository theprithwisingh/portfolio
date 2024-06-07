// import React from 'react'
// import './Project.css'
// // import food from '../../assets/food.jpg'
// function Project() {
//   return (
//     <div className='projects'>
//       <div className='heading-line'>
//       <h1>These are the projects I have worked on so</h1>
//       </div>
//       <div className='ul_list'>
//         <p>Portfolio</p>
//         <ul>
//           <li>All</li>
//           <li>Blockchain</li>
//           <li>Product</li>
//           <li>Full stack</li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Project

/*import { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('All');

  useEffect(() => {
    fetchProjects(selectedMenu);
  }, [selectedMenu]);

  const fetchProjects = async (menu) => {
    try {
      let url = '/api/projects';
      if (menu !== 'All') {
        url += `?category=${menu}`;
      }
      const response = await axios.get(url);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="projects-container">
      <ul className="menu">
        <li onClick={() => handleMenuClick('All')}>All</li>
        <li onClick={() => handleMenuClick('Products')}>Products</li>
        <li onClick={() => handleMenuClick('Blockchain')}>Blockchain</li>
        <li onClick={() => handleMenuClick('Full Stack')}>Full Stack</li>
      </ul>
      <div className="projects">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
*/

/*
import React, { useState } from 'react';
import './Project.css';

const Projects = () => {
  const [selectedMenu, setSelectedMenu] = useState('All');
  
  const projects = [
    { id: 1, name: 'Project 1', category: 'Products', description: 'Description 1' },
    { id: 2, name: 'Project 2', category: 'Blockchain', description: 'Description 2' },
    { id: 3, name: 'Project 3', category: 'Full Stack', description: 'Description 3' },
    { id: 4, name: 'Project 4', category: 'Products', description: 'Description 4' },
    { id: 5, name: 'Project 5', category: 'Blockchain', description: 'Description 5' },
    { id: 6, name: 'Project 6', category: 'Full Stack', description: 'Description 6' },
  ];

  const filteredProjects = selectedMenu === 'All' 
  ? projects 
  : projects.filter(project => project.category === selectedMenu);
  
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };
  
  return (
    <div className="projects-container">
      <ul className="menu">
        <li onClick={() => handleMenuClick('All')}>All</li>
        <li onClick={() => handleMenuClick('Products')}>Products</li>
        <li onClick={() => handleMenuClick('Blockchain')}>Blockchain</li>
        <li onClick={() => handleMenuClick('Full Stack')}>Full Stack</li>
      </ul>
      <div className="projects">
        {filteredProjects.map((project) => (
          <div className="project" key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


*/ 

import React, { useState } from 'react';
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
  ];

  const filteredProjects = selectedMenu === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedMenu);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="projects-container">
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
  );
};

export default Projects;
