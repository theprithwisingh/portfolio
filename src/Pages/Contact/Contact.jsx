
import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div className="form-container" id='form-container'>
      <div className="form-wrapper">
        <h1 className="title">Let's get started.</h1>
        <p className="subtitle">Basic Contact Form</p>
        <form className="form">
          <label className="label">
            My name is
            <input type="text" className="input" placeholder="Your full name" /> and
          </label>
          <label className="label">
            I have a
            <input type="text" className="input" placeholder="Website, full-time job, etc." />
            that needs help.
          </label>
          <label className="label">
            You can reach me at
            <input type="email" className="input" placeholder="Your email address" />
            to get things started.
          </label>
          <button type="submit" className="submit-button">Send Info</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
