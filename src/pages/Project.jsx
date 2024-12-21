import React, { useEffect, useState } from 'react';
import { getProjectData } from '../utils/LocalStorage';

const Project = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const project = getProjectData();
    setData(project);
  }, []);

  return (
    <div className='m-5'>
      <h1 className='text-3xl text-black font-bold mb-5'>Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data && data.length > 0 ? (
          data.map((project) => (
            <div key={project.id} className="project-card bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl">
              <img src={project.image} alt={`${project.title} image`} className="project-image w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-sm font-semibold mb-1 text-gray-900">{project.title}</h3>
                {/* <p className="text-gray-700 text-sm mb-2">{project.description}</p> */}
                <p className="text-gray-700 text-[12px] mb-2 h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
  {project.description}
</p>

                <p className='text-sm font-semibold mb-1 text-gray-900'>{project.category}</p>
                {/* Enhanced Tech Stack Display */}
                <div className="tech-stack mb-2">
                  <h4 className=" text-sm text-black mb-2">Tech Stack:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech, index) => (
                      <li 
                        key={index} 
                        className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded-sm hover:bg-gray-200 hover:text-black transition"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition">
                    GitHub
                  </a>
                  <a href={project.demo_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </div>
  );
};

export default Project;
