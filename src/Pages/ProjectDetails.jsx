import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

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

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <img src={project.imageUrl} alt={project.name} />
      <p>{project.description}</p>
      <p>Category: {project.category}</p>
    </div>
  );
};

export default ProjectDetails;
