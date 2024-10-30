import React from 'react'
import './Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

import myPhoto from '../../assest/myimage.png'
import arrow from '../../assest/arrow.png'
const Home = () => {
  return (
    <div className='home'>
      <p className='heading'>Software Engineer</p>
      <p className='heading-line'>"I’m <span>Prithwi</span> , a software engineer from India focused on building fast, reliable, and scalable web applications. 
      <br />
      I’m driven  about optimizing performance and delivering efficient solutions. In my free time, I explore new technologies through personal projects.
      <br /> It keeps me connected with the latest trends in development."</p>

      {/* <div className="pin">
          <a href="#" className="pin-link">
            <span className="icon-image">
               <img src={myPhoto} alt="" />
            </span> About me <span><FontAwesomeIcon icon={faGreaterThan} />
            </span>
          </a>
      </div> */}

<div className="pin">
  <a href="#" className="pin-link">
    <span className="icon-image">
      <img src={myPhoto} alt="My Photo" />
    </span>
    About me
    <span className="arrow-icon">
      <img src={arrow} alt="" />
    </span>
  </a>
</div>

<div className="newsletter-container">
      <h2>Subscribe to Soniya's Newsletter</h2>
      <p>I occasionally write about technology, and share thoughts on the intersection of creativity and engineering.</p>
      
      <div className="newsletter-form">
        <input type="email" placeholder="Email" className="email-input" />
        <button className="signup-button">Sign up</button>
      </div>
</div>

    </div>
  )
}

export default Home;
