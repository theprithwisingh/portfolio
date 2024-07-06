// import './App.css'
// import ProfileCard from './Components/Card/ProfileCard';
// import About from './Pages/About/About';
// function App() {
//   return (
//     <div className='App'>
//       <ProfileCard/>
//       <About/>
//     </div>
//   )
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Resume from './Pages/Resume/Resume';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;


