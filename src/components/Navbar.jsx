import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='ml-2 mt-14 max-sm:mt-1 max-sm:ml-1 max-lg:ml-3'>
    <ul className='max-sm:flex max-sm:justify-between max-sm:mt-1 max-sm:text-7xl'>
    <li className='py-1.5'>
        <Link 
        to="/" 
        className="
        max-sm:text-[12px] max-sm:font-semibold text-[#000000] max-sm:bg-[#ff0000] max-sm:py-1 max-sm:px-2 rounded
        max-lg:text-base max-lg:font-semibold
        max-2xl:text-lg max-2xl:font-semibold
          
        ">Project</Link>
      </li>

      <li className='py-1.5'>
        <Link 
        to="/about" 
        className="
        max-sm:text-[12px] max-sm:font-semibold text-[#000000] max-sm:bg-[#ff0000] max-sm:py-1 max-sm:px-2 rounded
        max-lg:text-base max-lg:font-semibold
        max-2xl:text-lg max-2xl:font-semibold
        ">About</Link>
      </li>

      <li className='py-1.5'>
        <Link 
        to="/productivity" 
        className="
        max-sm:text-[12px] max-sm:font-semibold text-[#000000] max-sm:bg-[#ff0000] max-sm:py-1 max-sm:px-2 rounded
        max-lg:text-base max-lg:font-semibold
        max-2xl:text-lg max-2xl:font-semibold
         ">Experience</Link>
      </li>
      <li className='py-1.5'>
        <Link 
        to="/freelance" 
        className="
        max-sm:text-[12px] max-sm:font-semibold text-[#000000] max-sm:bg-[#ff0000] max-sm:py-1 max-sm:px-2 rounded
        max-lg:text-base max-lg:font-semibold
        max-2xl:text-lg max-2xl:font-semibold
        ">Freelance</Link>
      </li>
      <li className='py-1.5'>
        <Link 
        to="/competitiveProgramming" 
        className="
        max-sm:text-[12px] max-sm:font-semibold text-[#000000] max-sm:bg-[#ff0000] max-sm:py-1 max-sm:px-2 rounded
        max-lg:text-base max-lg:font-semibold
        max-2xl:text-lg max-2xl:font-semibold
        ">CP</Link>
      </li>
      <li className='py-1.5'>
        <Link 
        to="/contact" 
        className="
        max-sm:text-[12px] max-sm:font-semibold text-[#000000] max-sm:bg-[#ff0000] max-sm:py-1 max-sm:px-2 rounded
        max-lg:text-base max-lg:font-semibold
        max-2xl:text-lg max-2xl:font-semibold
        ">Contact Me</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar;