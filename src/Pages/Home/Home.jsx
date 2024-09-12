import React from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate()
  const gotoContactPage=()=>{
    navigate('/contact')
  }
  return (
    <div className='home'>
      <h1>Hey, I'm <span>Prithwi</span></h1>
      <p className="sub-heading">I love to <span className="highlight"> Code</span></p>
      <p className="description">
        Hard-Working, Ambitious, and a Fast Learner. I am a Full-Stack Developer and AI Enthusiast. 
        Currently, I am working as a Founding Engineer at <a href="https://kay.ai" target="_blank" rel="noopener noreferrer">Kay.ai</a> building workflow automation for insurance brokers.
      </p>
      <p className="description">
        I have built multiple products in the past 5 years. Raised $100K funding for my startup Dreamboat.ai, built Engagebud, Influencerbit.
      </p>
      <p className="description">
        I help startups and businesses build their web applications and apps. As a Full Stack Developer, I can build your product from scratch or help you with your existing product.
      </p>
      <button onClick={gotoContactPage} className="contact-btn">Contact</button>
      <a href="mailto:prithwisingh77@gmail.com" className="email-link">E-Mail</a>
    </div>
  );
};

export default Home;
