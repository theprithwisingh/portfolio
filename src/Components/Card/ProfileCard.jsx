import React from 'react';
import profileImage from '../assets/images.jpg';
import './ProfileCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ProfileCard = () => {
  return (
    <>
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
    </>
  );
};

export default ProfileCard;
