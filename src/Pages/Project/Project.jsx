import React from 'react';
import './Project.css'
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
const Projects = () => {
  const projectData = [
    {
      image: 'https://shorturl.at/dyzyg',
      title: 'Kay AI',
      description: 'Building AI Co-workers for Insurance Brokerages and Agencies.',
      link: 'https://example.com',
      status: 'active',
    },
  {
    image: 'https://shorturl.at/dyzyg',
    title: 'Personal Website',
    description: 'Crafted from scratch with Next.js, TailwindCSS, and ShadCNA tool to generate secure passwords with customizable options Crafted from scratch with Next.js, TailwindCSS, and ShadCN Building AI Co-workers for Insurance Brokerages and Agencies Building AI Co-workers for Insurance Brokerages and Agencies A tool to generate secure passwords with customizable options Crafted from scratch with Next.js, TailwindCSS, and ShadCN Building AI Co-workers for Insurance Brokerages and Agencies Building AI Co-workers for Insurance Brokerages and Agencies ',
    link: 'https://example.com',
    status: 'active',
  },
  {
    image: 'https://shorturl.at/0iszL',
    title: 'Password Generator',
    description: 'A tool to generate secure passwords with customizable options A tool to generate secure passwords with customizable options Crafted from scratch with Next.js, TailwindCSS, and ShadCN Building AI Co-workers for Insurance Brokerages and Agencies Building AI Co-workers for Insurance Brokerages and Agencies.Crafted from scratch with Next.js, TailwindCSS, and ShadCNA tool to generate secure passwords with customizable options Crafted from scratch with Next.js, TailwindCSS, and ShadCN Building AI Co-workers for Insurance Brokerages and Agencies Building AI Co-workers for Insurance Brokerages and Agencies A tool to generate secure passwords with customizable options Crafted from scratch with Next.js, TailwindCSS, and ShadCN Building AI Co-workers for Insurance Brokerages and Agencies Building AI Co-workers for Insurance Brokerages and Agencies.',
    link: 'https://example.com',
    status: 'inactive',
  },
  {
    image: 'https://shorturl.at/dyzyg',
    title: 'Kay AI',
    description: 'Building AI Co-workers for Insurance Brokerages and Agencies A tool to generate secure passwords with customizable options Crafted from scratch with Next.js, TailwindCSS, and ShadCN Building AI Co-workers for Insurance Brokerages and Agencies Building AI Co-workers for Insurance Brokerages and Agencies.',
    link: 'https://example.com',
    status: 'active',
  }
  ];
  return (
  <div className="Project-container">
      <h1>Projects</h1>
      <p>Smart projects, impactful outcomes.</p>

      <div className='projects'>
      <div className="project-list">
        {/*Mapping on the Array*/}
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            status={project.status}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Projects;

