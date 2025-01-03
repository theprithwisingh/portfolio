import React, { useEffect, useState } from 'react';
import { getFreelanceData } from '../utils/LocalStorage';
import Filter from '../components/Filter';
import Navbar from '../components/Navbar';

const Freelance = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const project = getFreelanceData();
    setData(project);
    setFilteredData(project);
  }, []);

  const categories = ['All', ...new Set(data.map((project) => project.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((project) => project.category === category));
    }
  };

  return (
    <div className='m-5'>
      <hr className='lg:hidden xl:hidden 2xl:hidden md:hidden  max-sm:block border-1 border-black w-4/4'/>
      <div className='lg:hidden xl:hidden 2xl:hidden md:hidden  max-sm:block'><Navbar/></div>
      <hr className='lg:hidden xl:hidden 2xl:hidden md:hidden  max-sm:block border-1 border-black w-4/4 my-1'/>
      <h1 className='text-3xl text-black font-bold mb-5'>Freelance Works</h1>

      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={`${project.title} image`}
                className="project-image w-full h-48 object-cover"
              />
              <div className="px-1.5 py-1">
                <h3 className="text-base font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-700 text-[14px] mb-1 h-14 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                  {project.description}
                </p>
                <p className='text-[14px] font-semibold mb-1 text-gray-900'>{project.category}</p>

                <div className="tech-stack mb-2">
                  <h4 className=" text-[11px] font-semibold text-black mb-1">Tech Stack:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-gray-100 text-gray-600 text-[12px] px-1 py-1 rounded-sm hover:bg-gray-200 hover:text-black transition"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-[11px] font-bold py-1 px-1 bg-gray-100 rounded-md hover:text-black transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-[11px] font-bold py-1 px-1 bg-gray-100 rounded-md hover:text-black transition"
                  >
                    Demo
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

export default Freelance;
