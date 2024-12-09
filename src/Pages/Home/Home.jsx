// import React from 'react';
// import './Home.css';
// import '../../../src/index.css';
// import data from '../../assest/data.json';
// import myPhoto from '../../assest/myimage.png';
// import arrow from '../../assest/arrow.png';

// const Home = () => {
   
//   return (
//     <div className='home fade-in-element'>
//       <p className='heading'>Software Engineer</p>
//       <p className='heading-line'>
//         "I’m <span>Prithwi</span>, a software engineer from India focused on building fast, reliable, and scalable web applications.
//         <br />
//         I’m driven about optimizing performance and delivering efficient solutions. In my free time, I explore new technologies through personal projects.
//         <br />
//         It keeps me connected with the latest trends in development."
//       </p>

//       <div className="pin">
//         <a href="#" className="pin-link">
//           <span className="icon-image">
//             <img src={myPhoto} alt="My Photo" />
//           </span>
//           About me
//           <span className="arrow-icon">
//             <img src={arrow} alt="" />
//           </span>
//         </a>
//       </div>
// {/* //fetching project data */}
// <div className='projectData'>
//   {data.projects.map((project, index) => (
//     <div key={index} className="project-card">
//       <div className="image-container">
//         <img 
//           src={`${project.images[2]}`} 
//           alt={project.title} 
//         />
//       </div>
//       <div className='projectTitleOverview'>
//       <h2>{project.title}</h2>
//       <p>{project.overview}</p>
//       </div>
//     </div>
//   ))}
// </div>

//     </div>
//   );
// };

// export default Home;

import React from 'react';
import './Home.css';
import '../../../src/index.css';
import data from '../../assest/data.json';
import myPhoto from '../../assest/myimage.png';
import arrow from '../../assest/arrow.png';

const Home = () => {
  const renderProjects = () => {
    if (!data.projects || data.projects.length === 0) {
      return <p>No projects available.</p>;
    }

    return data.projects.map((project, index) => (
      <div key={index} className="project-card">
        <div className="image-container">
          <img 
            src={project.images[2] || myPhoto} // Fallback to myPhoto if no image available
            alt={`${project.title} image`} 
            loading="lazy" 
          />
        </div>
        <div className='projectTitleOverview'>
          <h2>{project.title}</h2>
          <p>{project.overview}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className='home fade-in-element'>
      <p className='heading'>Software Engineer</p>
      <p className='heading-line'>
        "I’m <span>Prithwi</span>, a software engineer from India, passionate about building fast, reliable, and scalable web applications.
        <br />
        My focus is on optimizing performance and delivering efficient solutions. In my free time, I explore new technologies and work on personal projects,
        <br />
        which helps me stay updated with the latest trends in development."
      </p>

      <div className="pin">
        <a href="#about" className="pin-link">
          <span className="icon-image">
            <img src={myPhoto} alt="My Photo" loading="lazy" />
          </span>
          About me
          <span className="arrow-icon">
            <img src={arrow} alt="Arrow icon" loading="lazy" />
          </span>
        </a>
      </div>

      <div className='projectData'>
        {renderProjects()}
      </div>
    </div>
  );
};

export default Home;
