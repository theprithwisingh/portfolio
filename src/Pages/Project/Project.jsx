import React from 'react';
import './Project.css'
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
const Projects = () => {
  const projectData = [
    {
      image: 'https://shorturl.at/dyzyg',
      title: 'Project-1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo porro reprehenderit nulla id sunt veritatis minus distinctio hic deleniti, possimus tempore commodi modi quae cumque odio quibusdam saepe harum!',
      stack:['JavaScript','ReactJS','Nodejs','Expressjs','Payment System'],
      url: 'https://medium.com/api-center/api-design-practice-7fce69e6336c',
      link: 'https://example.com'
    },
    {
      image: 'https://shorturl.at/dyzyg',
      title: 'Project-2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo porro reprehenderit nulla id sunt veritatis minus distinctio hic deleniti, possimus tempore commodi modi quae cumque odio quibusdam saepe harum!.',
      stack:['JavaScript','ReactJS','Nodejs','Expressjs','Payment System','ReactJS','Nodejs','Expressjs',],
      url: 'https://medium.com/api-center/api-design-practice-7fce69e6336c',
      link: 'https://example.com'
    },
    {
      image: 'https://shorturl.at/dyzyg',
      title: 'Project-3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo porro reprehenderit nulla id sunt veritatis minus distinctio hic deleniti, possimus tempore commodi modi quae cumque odio quibusdam saepe harum!',
      stack:['JavaScript','ReactJS','Nodejs','Expressjs','Payment System'],
      url: 'https://medium.com/api-center/api-design-practice-7fce69e6336c',
      link: 'https://example.com'
    },
  ];
  return (
  <div className="Project-container">
      <h1>Projects</h1>
      <p>Smart projects, impactful outcomes.</p>

      <div className='projects'>
        {/*Mapping on the Array*/}
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            stack={project.stack}
            link={project.link}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

