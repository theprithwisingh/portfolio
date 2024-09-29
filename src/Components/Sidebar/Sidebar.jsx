
import React, { useState } from 'react';
import './Sidebar.css'
import { Link, useNavigate } from 'react-router-dom';
import { FaTwitter, FaGithub, FaInstagram, FaMedium, FaLinkedin,FaHome ,FaLocationArrow
,FaStickyNote,FaAddressCard,FaCode  } from 'react-icons/fa'; 
import { CiFaceMeh } from "react-icons/ci";//for about icon
import { BsFillChatQuoteFill } from "react-icons/bs";



const Sidebar = () => {
  const [menu , setMenu]=useState('Home');
  const navigate = useNavigate()
  const goToHomePage = () => {
    navigate('/');
  };
  return (
    <div className='sidebar'>
      <Link to='/'><h2 className='h2' onChange={goToHomePage}>Prithwi singh</h2></Link>
      <p className='tag'>full stack developer</p>
      <ul>
        <li><Link onClick={()=>setMenu('Home')} className={menu==='Home'?'active':''} to="/"><FaHome />Home</Link></li>
        <li><Link onClick={()=>setMenu('Projects')} className={menu==='Projects'?'active':''} to="/projects"> <FaLocationArrow />
        Projects</Link></li>
        <li><Link onClick={()=>setMenu('About')} className={menu==='About'?'active':''} to="/about"><CiFaceMeh />
        About</Link></li>
        <li><Link onClick={()=>setMenu('Blog')} className={menu==='Blog'?'active':''} to="/blog"><FaStickyNote />
        Blog</Link></li>
        <li><Link onClick={()=>setMenu('Contact')} className={menu==='Contact'?'active':''} to="/contact"><FaAddressCard />
        Contact</Link></li>
        <li><Link onClick={()=>setMenu('100xDev')} className={menu==='100xDev'?'active':''} to="/100xDev"><FaCode />
        100xDev</Link></li>
        <li><Link onClick={()=>setMenu('Thoughts')} className={menu==='Thoughts'?'active':''} to="/thoughts"><BsFillChatQuoteFill />
        Thoughts</Link></li>
      </ul>

      <div className='socialmedia'>
        <h3>Connect</h3>
        <div className='socialmedia-list'>
          <a href="https://x.com/theprithwisingh" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> Twitter
          </a>
          <a href="https://github.com/theprithwisingh" target="_blank" rel="noopener noreferrer">
            <FaGithub /> Github
          </a>
          <a href="https://instagram.com/theprithwisingh" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="https://medium.com/theprithwisingh" target="_blank" rel="noopener noreferrer">
            <FaMedium /> Medium
          </a>
          <a href="https://www.linkedin.com/in/prithwi-singh-8817811ab/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
