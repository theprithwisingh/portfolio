import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          I'm Piyush Garg, and I've always been passionate about technology and education. My journey has taken me through
          various roles-content creator, developer, entrepreneur, and innovator-all driven by a deep love for sharing
          knowledge and making complex concepts more understandable.
        </p>
      </div>
       <div className='flex justify-center align-middle'>
            <img className='size-[40%]' src="https://dummyimage.com/1080x1080/ff0000/fff&text=Hello" alt="posterImage" />
       </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">As a YouTuber</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            I've built my channel around my passion for technology and education. My goal is to make the world of
            programming and software development more accessible to everyone, regardless of their background or
            experience level. I remember how challenging it was when I first started learning to code, and that's why I'm
            committed to breaking down complex concepts into simple, easy-to-understand tutorials. For me, YouTube is
            more than just a platform; it's a way to give back to the community that helped me grow.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">As a Content Creator</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            I realized there were significant gaps in the tools available for educators like me. I decided to take matters
            into my own hands. That's how Teachyst was born-a platform designed to empower educators to share their
            knowledge without worrying about the technical side of things. Today, Teachyst serves over 10,000 students,
            and I'm proud to say it's helping teachers and learners alike have a smoother, more professional experience.
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Connect with me</h3>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition duration-300">
            <i className="fab fa-youtube fa-2x"></i> {/* Example icon */}
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition duration-300">
              <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition duration-300">
              <i className="fab fa-linkedin fa-2x"></i>
          </a>
          {/* Add more social media links here */}
        </div>
      </div>
    </div>
  </section>
  )
}

export default About;