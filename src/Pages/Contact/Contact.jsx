import React from 'react';
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar';
import quote from '../../Components/assets/Quote.jpg'
const Contact = () => {
  return (
  <> 
  <div className='contact-section'>
    <div className='left'>
      <img src={quote} alt="" />
    </div>


    <div className='right'>
    <div className='navbar-setting'><Navbar/></div>
    <h1>Contact me</h1>
    <div className='details'>
      <p>1234567890</p>
      <p>Prithwisingh@google.com</p>
      <p>mumbai,india</p>
    </div>
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

    
  </div>
  </>
  );
};

export default Contact;
{/* <div className="form-wrapper">
     <div className='right'>
      <img src={quote} alt="" />
     </div>
      <div className='navbar-setting'><Navbar/></div>
      img className='wallpaper' src={quote} alt="" />
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
      </div> */}