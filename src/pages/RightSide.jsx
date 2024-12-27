import React from 'react'
import { Routes, Route } from 'react-router-dom';
import  About from './About';
import Project from './Project';
import Freelance from './Freelance';
import CompetitiveProgramming from './CompetitiveProgramming'
import Contact from './Contact';
const RightSide = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<Project />} />  {/* Default Route */}
        <Route path="/about" element={<About />} />
        <Route path="/freelance" element={<Freelance />} />
        <Route path="/CompetitiveProgramming" element={<CompetitiveProgramming />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default RightSide;