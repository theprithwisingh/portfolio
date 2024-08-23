import React from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';
import ai from '../assets/AI.png'
import blockchain from '../assets/blockchain.png'
import product from '../assets/product.png'
import webdev from '../assets/webdev.png'
import profileImage from '../assets/images.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const About = () => {

  return (
    <div className="about-section">
      <div className='left'>

      <div className='pic-name-position'>
        <img src={profileImage} alt="" />
        <p>Prithwi singh</p>
        <p>Software engineer & Freelancer</p>
      </div>

      <hr/>
      <div className='email-location-socialmedia'>
        <div className='email'>
          <FontAwesomeIcon icon={faEnvelope} className='icon'/>
          <div className='email-context'>
            <div>Email</div>
            <div>Prihtwisingh@google.com</div>
          </div>
        </div>
        <div className='location'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/>
          <div className='location-context'>
            <div>Location</div>
            <div>Mumbai, India</div>
          </div>
        </div>
        <div className='socialmedia'>
          <FontAwesomeIcon icon={faGithub} className='social-icon'/>
          <FontAwesomeIcon icon={faTwitter} className='social-icon'/>
          <FontAwesomeIcon icon={faInstagram} className='social-icon'/>
          <FontAwesomeIcon icon={faLinkedin} className='social-icon'/>
        </div>
      </div>
      </div>

      <div className='right'>
      <h1>About Me</h1>
      <div className='navbar-setting'><Navbar/></div>
      <hr />
      <p className='context-one'>
      Hey there! 👋 I'm <b>Prithwi Singh</b>, a dynamic <b>Software Developer and Freelancer </b>from India, ready to set the tech world on fire! From the spark of an idea to a full-fledged launch, I'm your tech virtuoso, transforming concepts into digital masterpieces. I live for the adrenaline rush of coding competitions , where I push the limits and think outside the box.
      </p>
      <p className='context-two'>
        My passion? <b>Designing and building everything from sleek websites to fully-functional products</b>.
        As a freelancer, I infuse creativity, precision, and dedication into every project, ensuring exceptional results and delighted clients. Let's join forces and create something extraordinary together! 🚀
      </p>

      <h2>Here's What I Do!</h2>
      <div className="services"> 
        <div className="service">
          <div className='image'>
            <img src={webdev} alt="" />
          </div>
          <div className='service-context'>
          <h3>Web Development</h3>
          </div>
        </div>







        <div className="service">
          <div className='image'>
            <img src={product} alt="" />
          </div>
          <div className="service-context">
            <h3>Full Stack Products</h3>
          </div>
        </div>


        <div className="service">
          <div className='image'>
            <img src={blockchain} alt="" />
          </div>
          <div className='service-context'>
           <h3>Blockchain</h3>
          </div>
          
        </div>
        <div className="service">
          <div className='image'>
            <img src={ai} alt="" />
          </div>
          <div className="service-context">
            <h3>Artificial Intelligence</h3>
          </div>
        </div>
      </div>
        
      </div>
      
  </div>
  );
};
export default About;

