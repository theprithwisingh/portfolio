import React from 'react'

const Navbar = () => {
  return (
    <nav className='ml-5 mt-14'>
    <ul>
      <li className='py-1.5'>
        <a href="#about" className="block text-base font-normal hover:text-blue-500">About</a>
      </li>
      <li className='py-1.5'>
        <a href="#project" className="block text-base font-normal hover:text-blue-500">Project</a>
      </li>
      <li className='py-1.5'>
        <a href="#productivity" className="block text-base font-normal hover:text-blue-500">Experience</a>
      </li>
      <li className='py-1.5'>
        <a href="#freelance" className="block text-base font-normal hover:text-blue-500">Freelance</a>
      </li>
      <li className='py-1.5'>
        <a href="#blogs" className="block text-base font-normal hover:text-blue-500">Blogs</a>
      </li>
      <li className='py-1.5'>
        <a href="#contact" className="block text-base font-normal hover:text-blue-500">Contact Me</a>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar