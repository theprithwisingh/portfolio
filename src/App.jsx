import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Projects from './Pages/Project/Project';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Productivity from './Pages/Productivity/Productivity';
import Thoughts from './Pages/Thoughts/Thoughts';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <div className='main-container' >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/100xDev" element={<Productivity/>} />
          <Route path="/thoughts" element={<Thoughts/>} />

        </Routes>
      </div>
    </div>
  );
}

export default App;


