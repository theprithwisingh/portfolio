import React from 'react';
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar';
import quote from '../../Components/assets/Quote.jpg'
const Contact = () => {
  return (
  <>
      <div className="form-wrapper">
      <div className='navbar-setting'><Navbar/></div>
        <img className='wallpaper' src={quote} alt="" />
        <h3 className="subtitle">Contact Form</h3>
        <hr />
        <form action="">
          <div className='name-email'>
            <input type="text" placeholder='Enter your name...'/>
            <input type="email" placeholder='Enter your email...'/>
          </div>
          <div className='massege'>
            <textarea name="Your Massege..." id=""></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
  </>
  );
};

export default Contact;
