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
      I'm Prithwi, a Full stack developer from Mumbai, India. With an innate curiosity for technology, I've embarked on a journey to master the art of crafting digital solutions that are both functional and visually compelling.
      </p>
      <p className="description">
      Starting with the foundation of HTML and CSS, I quickly immersed myself in the world of software development. As I honed my skills, I found a particular affinity for JavaScript and C++, which opened the doors to creating dynamic and engaging user experiences. Over time, I've embraced modern frameworks like React and dabbled in backend technologies like Node.js and System Designing solidifying my commitment to becoming a full-stack developer.
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
