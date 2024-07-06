import React from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';

const About = () => {

  return (
    <div className="right-section">
     <Navbar/>
      <h1>About Me</h1>
      <p>
        Hey there! 👋 I'm a <b>Software Developer and Freelancer</b> hailing from India, ready to ignite the tech scene! 🚀 
        From idea conception to successful launch, I'm your go-to guy! I thrive on the adrenaline rush of <b>coding competitions and hackathons</b>, 
        constantly pushing boundaries and thinking outside the box.
      </p>
      <p>
        My passion? <b>Designing and building everything from sleek websites to fully-functional products</b>. But wait, there's more to me! 
        I'm not just about creating – I'm also dedicated to giving back. You'll find me contributing to open-source projects like 
        <b>#GSoC, SWOC, ZS, Summer of Bitcoin, MLH</b> and more 💖.
      </p>

      <h2>Here's What I Do!</h2>
      <div className="services">
        <div className="service">
          <h3>Web Development</h3>
          <p>I create stunning websites that look great and work perfectly.</p>
        </div>
        <div className="service">
          <h3>Full Stack Products</h3>
          <p>I build everything you need for your website or app, from the front to the back.</p>
        </div>
        <div className="service">
          <h3>Blockchain</h3>
          <p>I use blockchain to make digital transactions secure and transparent.</p>
        </div>
        <div className="service">
          <h3>Artificial Intelligence</h3>
          <p>I leverage artificial intelligence to make software smart so they can help you work better and faster.</p>
        </div>
      </div>

      <h2>The Buzz: Clients Share Their Stories!</h2>
      <div className="testimonials">
        <div className="testimonial">
          <h3>Principal</h3>
          <p>Vimal Vidyalay School, Bihar, India</p>
          <p>Priyanshu's expertise in web development is truly remarkable. When we approached him...</p>
        </div>
        <div className="testimonial">
          <h3>Anurag Joseph</h3>
          <p>Computer Operator at VJY Vidyalya, CS, India</p>
          <p>Priyanshu is an absolute gem in web development! His technical prowess is...</p>
        </div>
      </div>

      <h2>Code With Purpose: My Open Source Voyage!</h2>
      <div className="open-source-logos">
        <img src="mlh-logo-url" alt="MLH" />
        <img src="bitcoin-logo-url" alt="Bitcoin" />
        <img src="swoc-logo-url" alt="SWOC" />
        <img src="zs-logo-url" alt="ZS" />
      </div>
    </div>
  );
};

export default About;

