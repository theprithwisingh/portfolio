import React from 'react'
import { Routes, Route } from 'react-router-dom';
import  About from './About';
import Project from './Project';
import Freelance from './Freelance';
import Productivity from './Productivity';
import Blogs from './Blogs';
import Contact from './contact';
const RightSide = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<Project />} />  {/* Default Route */}
        <Route path="/about" element={<About />} />
        <Route path="/freelance" element={<Freelance />} />
        <Route path="/productivity" element={<Productivity />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default RightSide;