import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menu,setMenu] = useState('about')
  return (
    <nav className="navbar">
      <ul>
      <li onClick={() => setMenu('about')} className={menu === 'about' ? 'active' : ''}>
          <Link to="/">About</Link>
        </li>
        {/* <li onClick={() => setMenu('resume')} className={menu === 'resume' ? 'active' : ''}>
          <Link to="/resume">Resume</Link>
        </li> */}
        <li onClick={() => setMenu('portfolio')} className={menu === 'portfolio' ? 'active' : ''}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
