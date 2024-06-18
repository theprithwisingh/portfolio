// import './App.css'
// // import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';
// import Hero from './Components/Hero/Hero';
// import Navbar from './Components/Navbar/Navbar'
// import Projects from './Components/Skills/Project';

// function App() {
//   return (
//     <div className='App'>
//         <Navbar/>
//         <Hero/>
//         <Projects/>
//         <Contact/>
//         <Footer/>
//     </div>
//   )
// }

// export default App;


import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Skills/Project'; 
import ProjectDetails from './Pages/ProjectDetails';


function App() {
  return (
      <div className='App'>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;
