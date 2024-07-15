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
      <div className='card'>
      <div className='pic-name-position'>
        <img src={profileImage} alt="" />
        <p>Prithwi singh</p>
        <p>Software engineer & Freelancer</p>
      </div>
      <hr />
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
          <FontAwesomeIcon icon={faInstagram} className='social-icon'/>
        </div>
      </div>
    </div>
      <h1>About Me</h1>
      <div className='navbar-setting'><Navbar/></div>
      <hr />
      <div className='About-context'></div>
      <p className='context-one'>
        Hey there! 👋 I'm a <b>Software Developer and Freelancer</b> hailing from India, ready to ignite the tech scene! 
        From idea conception to successful launch, I'm your go-to guy! I thrive on the adrenaline rush of <b>coding competitions and hackathons</b>, 
        constantly pushing boundaries and thinking outside the box.
      </p>
      <p className='context-two'>
        My passion? <b>Designing and building everything from sleek websites to fully-functional products</b>. But wait, there's more to me!
        I'm not just about creating – I'm also dedicated to giving back. You'll find me contributing to open-source projects like 
        <b>#GSoC, SWOC, ZS, Summer of Bitcoin, MLH</b> and more.
      </p>

      <h2>Here's What I Do!</h2>
      <div className="services">
        <div className="service">
          <div className='image'>
            <img src={webdev} alt="" />
          </div>
          <div className='service-context'>
          <h3>Web Development</h3>
          <p>I create stunning websites that look great and work perfectly.</p>
          </div>
          
        </div>
        <div className="service">
          <div className='image'>
            <img src={product} alt="" />
          </div>
          <div className="service-context">
            <h3>Full Stack Products</h3>
            <p>I build everything you need for your website or app, from the front to the back.</p>
          </div>
        </div>


        <div className="service">
          <div className='image'>
            <img src={blockchain} alt="" />
          </div>
          <div className='service-context'>
           <h3>Blockchain</h3>
           <p>I use blockchain to make digital transactions secure and transparent.</p>
          </div>
          

        </div>
        <div className="service">
          <div className='image'>
            <img src={ai} alt="" />
          </div>
          <div className="service-context">
            <h3>Artificial Intelligence</h3>
            <p>I leverage artificial intelligence to make software smart so they can help you work better and faster.</p>
          </div>
          
        </div>
      </div>

      <h2>"Client Feedback: Their Experiences!"</h2>
      <div className="testimonials">
        <div className="testimonial">
          <div className='image-name'>
            <img src={product} alt="" />
            <p>Prithw singh - codingQuery</p>
          </div>
          <p>rom idea conception to successful launch, I'm your go-to guy! I thrive on the adrenaline rush of coding competitions and hackathons....</p>
        </div>

        <div className="testimonial">
          <div className='image-name'>
            <img src={product} alt="" />
            <p>Prithw singh - codingQuery</p>
          </div>
          <p>rom idea conception to successful launch, I'm your go-to guy! I thrive on the adrenaline rush of coding competitions and hackathons....</p>
        </div>

        <div className="testimonial">
          <div className='image-name'>
            <img src={product} alt="" />
            <p>Prithw singh - codingQuery</p>
          </div>
          <p>rom idea conception to successful launch, I'm your go-to guy! I thrive on the adrenaline rush of coding competitions and hackathons....</p>
        </div>
      </div>
  </div>
  );
};

export default About;

