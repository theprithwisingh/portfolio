import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='ml-5 mt-14 max-sm:mt-1 max-sm:ml-1 max-lg:ml-3'>
    <ul className='max-sm:flex max-sm:justify-between max-sm:mt-1 max-sm:text-7xl'>
    <li className='py-1.5'>
        <Link 
        to="/" 
        className="block text-base font-normal
        max-lg:text-sm lg:[text-base]  max-sm:rounded-md max-sm:text-[10px] max-sm:font-semibold text-[#ffffff] max-sm:bg-[#ff0000] max-sm:py-1 max-sm:px-1.5">Project</Link>
      </li>

      <li className='py-1.5'>
        <Link 
        to="/about" 
        className="block text-base font-normal 
        max-lg:text-sm lg:[text-base] max-sm:rounded-md max-sm:text-[10px] max-sm:font-semibold rounded text-[#ffffff] max-sm:bg-[#ff0000] max-sm:py-1 max-sm:px-2">About</Link>
      </li>

      <li className='py-1.5'>
        <Link 
        to="/productivity" 
        className="block text-base font-normal 
         max-lg:text-sm lg:[text-base] max-sm:rounded-md max-sm:text-[10px] max-sm:font-semibold rounded text-[#ffffff] max-sm:bg-[#ff0000] max-sm:py-1 max-sm:px-2">Experience</Link>
      </li>
      <li className='py-1.5'>
        <Link 
        to="/freelance" 
        className="block text-base font-normal
        max-lg:text-sm lg:[text-base]  max-sm:rounded-md max-sm:text-[10px] max-sm:font-semibold rounded text-[#ffffff] max-sm:bg-[#ff0000] max-sm:py-1 max-sm:px-2">Freelance</Link>
      </li>
      <li className='py-1.5'>
        <Link 
        to="/competitiveProgramming" 
        className="block text-base font-normal 
        max-lg:text-sm lg:[text-base]  max-sm:text-[10px] max-sm:font-semibold rounded-md text-[#ffffff] max-sm:bg-[#ff0000] max-sm:py-1 max-sm:px-2">CP</Link>
      </li>
      <li className='py-1.5'>
        <Link 
        to="/contact" 
        className="block text-base font-normal  
        max-lg:text-sm lg:[text-base] max-sm:text-[10px] max-sm:font-semibold  rounded-md text-[#ffffff] max-sm:bg-[#ff0000] max-sm:py-1 max-sm:px-2">Contact Me</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar;