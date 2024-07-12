import React from 'react'
import './Resume.css'
import Navbar from '../../Components/Navbar/Navbar';
const Resume = () => {
  return (
    <div className='Resume-section'>
       <h3 className="subtitle">Resume</h3>
       <div className='navbar-setting'><Navbar/></div>
       <hr />
       <div className='Experience-form'>
        <img src="" alt="" />
        <p>Experience</p>
       </div>
    </div>
  )
}

export default Resume;
