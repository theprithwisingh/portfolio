import React, { useEffect, useState } from 'react';
import { getFreelanceData } from '../utils/LocalStorage';

const freelance = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const project = getFreelanceData();
    setData(project);
  }, []);

  return (
    <div className='m-5'>
      <h1 className='text-3xl text-black font-bold mb-5'>Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data && data.length > 0 ? (
          data.map((project) => (
            <div key={project.id} className="project-card bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl">
              <img src={project.image} alt={`${project.title} image`} className="project-image w-full h-48 object-cover" />
              <div className="px-1.5 py-1">
                <h3 className="text-sm font-semibold text-gray-900">{project.title}</h3>
                {/* <p className="text-gray-700 text-sm mb-2">{project.description}</p> */}
                <p className="text-gray-700 text-[11px] mb-1 h-14 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
  {project.description}
</p>

                <p className='text-[11px] font-semibold mb-1 text-gray-900'>{project.category}</p>
                {/* Enhanced Tech Stack Display */}
                <div className="tech-stack mb-2">
                  <h4 className=" text-[11px] font-semibold text-black mb-1">Tech Stack:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech, index) => (
                      <li 
                        key={index} 
                        className="bg-gray-100 text-gray-600 text-[10px] px-1 py-1 rounded-sm hover:bg-gray-200 hover:text-black transition"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-[11px] font-bold py-1 px-1 bg-gray-100 rounded-md hover:text-black transition">
                    GitHub
                  </a>
                  <a href={project.demo_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-[11px] font-bold py-1 px-1 bg-gray-100 rounded-md hover:text-black transition">Demo
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

export default freelance;