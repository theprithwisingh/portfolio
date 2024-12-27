import React from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section id="about" className="m-5 dark:bg-gray-800">
      <hr className='lg:hidden xl:hidden 2xl:hidden md:hidden max-sm:block border-1 border-black w-4/4'/>
      <div className='lg:hidden xl:hidden 2xl:hidden md:hidden max-sm:block'><Navbar/></div>
      <hr className='lg:hidden xl:hidden 2xl:hidden md:hidden max-sm:block border-1 border-black w-4/4 my-1'/>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mt-4 mb-4">Prithwi Singh</h2>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Full stack engineer</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            "I'm Prithwi Singh, and I'm passionate about technology and learning. Over the years, I've explored different roles—developer, content creator, and problem-solver—all with the goal of improving my skills and sharing what I learn with others. I love breaking down complex topics to make them easier to understand and enjoy building projects that help me grow as a developer."
          </p>
        </div>
        <div className='flex justify-center align-middle'>
          <img className='size-[40%] mb-8' src="https://dummyimage.com/1080x1080/ff0000/fff&text=Hello" alt="posterImage" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">As a YouTuber</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I'm Prithwi Singh, and I plan to start a YouTube channel focused on technology, coding, and communication skills. I want to make learning these topics easier for everyone, no matter their experience. Having faced my own challenges in learning to code, my goal is to create clear, easy-to-follow tutorials and share my projects to help others grow. For me, it's about giving back to the community that supported my journey.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">As an Indie Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I'm Prithwi Singh, an indie developer just starting out on my journey. I'm passionate about building projects, learning new skills, and exploring different areas of technology. As I develop my skills, I enjoy experimenting with code and creating simple apps that solve everyday problems. I may be at the beginning of my journey, but I’m excited to keep learning, improving, and sharing my progress along the way.
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Connect with me</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faYoutube} className="fa-2x" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faGithub} className="fa-2x" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
