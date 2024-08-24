import React from 'react';
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar';
import quote from '../../Components/assets/Quote.jpg'
const Contact = () => {
  return (
  <> 
  <div className='contact-section'>
    <div className='left-image'>
      <img src={quote} alt="" />
    </div>


    
    <div className='right-content'>
    <div className='navbar-setting'><Navbar/></div>
    <h1>Contact Me</h1>
    <hr />
    <form action="">
    <p>
     My name is <input type="text" placeholder="YOUR FULL NAME" className="animated-input" /> and I have a 
    <input type="text" placeholder="WEBSITE, FULL-TIME JOB, ETC." className="animated-input" /> that needs help. 
     You can reach me at <input type="email" placeholder="YOUR EMAIL ADDRESS" className="animated-input" /> to get things started.
     </p>
     <button type="submit">SEND INFO</button>
    </form>
    </div>


  </div>
  </>
  );
};

export default Contact;