# React + Vite
Para-1 - How
Para-2 - can I assist you
Para-3 -today ?
Para-3 -See
Para-4 - my featured
para-5 - projects.
background-color = #E7FFCA

Para-1 - Hi
Para-2 - I’m Prithwi🤟
Para-3 -I specialize in MERN stack, system designing and backend engineering.
Software Engineer
background-color = #FFF5F5

A passionate graphic designer with a keen eye for creativity and a love for bringing ideas to life through visual experiences.

﻿

I'm Prithwi, a Full stack developer from Mumbai, India. With an innate curiosity for technology, I've embarked on a journey to master the art of crafting digital solutions that are both functional and visually compelling.
Starting with the foundation of HTML and CSS, I quickly immersed myself in the world of software development. As I honed my skills, I found a particular affinity for JavaScript and C++, which opened the doors to creating dynamic and engaging user experiences. Over time, I've embraced modern frameworks like React and dabbled in backend technologies like Node.js and System Designing solidifying my commitment to becoming a full-stack developer.
My goal is to seamlessly blend my passion for technology with the tranquility of my surroundings, crafting digital experiences that leave a lasting impact.

As Software Engineer. I Help Startups Launch And Grow Their Products


 <p className='context-one'>
      Hey there! 👋 I'm <b>Prithwi Singh</b>, a dynamic <b>Software Developer and Freelancer </b>from India, ready to set the tech world on fire! From the spark of an idea to a full-fledged launch, I'm your tech virtuoso, transforming concepts into digital masterpieces. I live for the adrenaline rush of coding competitions , where I push the limits and think outside the box.
      </p>
      <p className='context-two'>
        My passion? <b>Designing and building everything from sleek websites to fully-functional products</b>.
        As a freelancer, I infuse creativity, precision, and dedication into every project, ensuring exceptional results and delighted clients. Let's join forces and create something extraordinary together! 🚀
      </p>

      <h2>Here's What I Do!</h2>






import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Resume from './Pages/Resume/Resume';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
// import ProfileCard from './Components/Card/ProfileCard';

function App() {
  return (
      <div className="App">
            {/* <ProfileCard className="ProfileCard"/> */}
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
  );
}

export default App;/