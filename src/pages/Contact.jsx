import React from 'react'
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
   <>
    <div className='m-5 h-screen'>
      <hr className='lg:hidden xl:hidden 2xl:hidden md:hidden  max-sm:block border-1 border-black w-4/4'/>
      <div className='lg:hidden xl:hidden 2xl:hidden md:hidden  max-sm:block'><Navbar/></div>
      <hr className='lg:hidden xl:hidden 2xl:hidden md:hidden  max-sm:block border-1 border-black w-4/4 my-1'/>
      <h1 className='text-3xl text-black font-bold mt-5 mb-5'>Do you have any project in mind?</h1>
      <p className='text-gray-800 dark:text-gray-400 leading-relaxed mb-8'>I'm always excited to collaborate on new ideas! Whether you have a task or a new project, <br />let's connect and bring your vision to life.
      <span className='text-black font-bold'>Click the button below</span> to get in touch with me via email and let's get started!</p>

      <a className="
      text-md py-2 px-4 bg-amber-500 rounded-sm
      " href="mailto:prithwisingh77@gmail.com">Send me a message</a>
    </div>
   </>
  )
}

export default Contact;