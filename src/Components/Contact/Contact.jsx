// import './Contact.css'
// import { useState } from 'react'
// import mail_icon from '../../assets/mail-icon.png'
// import phone_icon from '../../assets/phone-icon.png'
// import location_icon from '../../assets/location-icon.png'
// function Contact() {
//   const [result, setResult] =useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "4d2e3b91-50be-46f3-98cb-691a5671763a");

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//       setResult(res.message);
//       event.target.reset();
//     } else {
//       console.log("Error", res);
//       setResult(res.message);
//     }
//   };
//   return (
//     <div className='contact'>
//        <div className='contact-col'>
//         <p>Let's connect and explore how we can collaborate to bring your ideas to life. Drop me a message, and let's start the conversation!</p>
//         <ul>
//             <li><img src={mail_icon}/> Prithwisinghpersonal@gmail.com</li>
//             <li><img src={phone_icon}/>+1 123-456-7890</li>
//             <li><img src={location_icon}/>09 Street Ekta nagar kandiwali(W) <br/> Mumbai 400067 INDIA
//             </li>
//         </ul>
//        </div>
//        <div className='contact-col'>
//         <form onSubmit={onSubmit}>
//         <label htmlFor="">Your name</label>
//         <input type="text" name="name" placeholder='Enter your name' required />

//         <label htmlFor="">Phone Number</label>
//         <input type="text" name='phone' placeholder='Enter your mobile' required/>


//         <label htmlFor="">Write your message here</label>
//         <textarea name="message" id="text-area" rows="6" required></textarea>

//         <button type='submit' className='btn dark-btn'>Submit now</button>
//         </form>
//         <span>{result}</span>
//        </div>
//     </div>
//   )
// }
// export default Contact;

// //2222222222222222222222222222222222222222
// import './Contact.css'
// import { useState } from 'react'
// import mail_icon from '../../assets/mail-icon.png'
// import phone_icon from '../../assets/phone-icon.png'
// import location_icon from '../../assets/location-icon.png'

// function Contact() {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending...");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "4d2e3b91-50be-46f3-98cb-691a5671763a");

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//       setResult("Message sent successfully!");
//       event.target.reset();
//     } else {
//       console.log("Error", res);
//       setResult("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <div className='contact'>
//       <div className='contact-col'>
//         <p>Let's connect and explore how we can collaborate to bring your ideas to life. Drop me a message, and let's start the conversation!</p>
//         <ul>
//           <li><img src={mail_icon} alt="Mail Icon" /> Prithwisinghpersonal@gmail.com</li>
//           <li><img src={phone_icon} alt="Phone Icon" />+1 123-456-7890</li>
//           <li><img src={location_icon} alt="Location Icon" />09 Street Ekta nagar kandiwali(W) <br /> Mumbai 400067 INDIA</li>
//         </ul>
//       </div>
//       <div className='contact-col'>
//         <form onSubmit={onSubmit}>
//           <label htmlFor="name">Your Name</label>
//           <input type="text" name="name" placeholder='Enter your name' required />

//           <label htmlFor="phone">Phone Number</label>
//           <input type="text" name='phone' placeholder='Enter your mobile' required />

//           <label htmlFor="message">Write your message here</label>
//           <textarea name="message" id="text-area" rows="6" placeholder='Your message' required></textarea>

//           <button type='submit' className='btn dark-btn'>Submit Now</button>
//         </form>
//         <span>{result}</span>
//       </div>
//     </div>
//   )
// }

// export default Contact;
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    project: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-form">
      <div className="header">
        <h1>Let's get started.</h1>
        <p>BASIC CONTACT FORM</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">My name is</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="YOUR FULL NAME"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="project">and I have a</label>
          <input
            type="text"
            id="project"
            name="project"
            placeholder="WEBSITE, FULL-TIME JOB, ETC."
            value={formData.project}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">that needs help. You can reach me at</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="YOUR EMAIL ADDRESS"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">SEND INFO</button>
      </form>
    </div>
  );
};

export default Contact;
