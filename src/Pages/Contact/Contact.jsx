import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
<div className="contact-container">
      <h1>Contact</h1>
      <p>If you're building in / excited about Web-apps or just wanna chat, let's connect.</p>
      <div className="buttons">
        <button className="call-button">let's Discuss</button>
        <button className="email-button">E-Mail</button>
      </div>
      
      <div className="message-form">
        <h2>Send a message</h2>
        <form>
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <textarea placeholder="Message" className="message-field"></textarea>
          <button type="submit" className="send-button">Send Now</button>
        </form>
      </div>

      <div className="subscribe-section">
        <p>Stay up to date</p>
      </div>
    </div>
  )
}

export default Contact;
