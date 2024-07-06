import React from 'react';
import profileImage from '../assets/images.jpg'; // Adjust the path as needed
import './ProfileCard.css'; // Assuming you have a CSS file for styling

const ProfileCard = () => {
  return (
    <div className='left-card'>
    <div className="profile-card">
      <img src={profileImage} alt="Priyanshu Singh" className="profile-image" />
      <h1>Prithwi Singh</h1>
      <h2>Software Developer & Freelancer</h2>
      <div className="contact-info">
        <div className="email">
          <span role="img" aria-label="email">📧</span> prithwisingh77.com
        </div>
        <div className="location">
          <span role="img" aria-label="location">📍</span> Mumbai, India ❤️
        </div>
      </div>
      <div className="social-links">
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
    </div>
  );
};

export default ProfileCard;
