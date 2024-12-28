import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const[active, setActive] = useState('underline');

  return (
    <nav className='ml-4 mt-14 max-sm:mt-[-40px] max-sm:ml-1 max-lg:ml-3'>
    <ul className='max-sm:flex max-sm:justify-between max-sm:mt-1 max-sm:text-7xl'>
      
    <li className='py-1.5'>
        <Link 
        to="/" 
        className="
        max-sm:text-[13px] max-sm:font-normal text-[#000000] rounded
        max-lg:text-base max-lg:font-semibold
        max-2xl:text-lg 2xl:font-semibold
        ">About</Link>
      </li>

    <li className='py-1.5'>
        <Link 
        to="/project" 
        className="
        max-sm:text-[13px] max-sm:font-normal text-[#000000] rounded
        max-lg:text-base max-lg:font-semibold
        max-2xl:text-lg 2xl:font-semibold
          
        ">Project</Link>
      </li>
      <li className='py-1.5'>
        <Link 
        to="/freelance" 
        className="
        max-sm:text-[13px] max-sm:font-normal text-[#000000] rounded
        max-lg:text-base max-lg:font-semibold
        max-2xl:text-lg 2xl:font-semibold
        ">Freelance</Link>
      </li>
      {/* <li className='py-1.5'>
        <Link 
        to="/competitiveProgramming" 
        className="
        max-sm:text-[13px] max-sm:font-normal text-[#000000] rounded
        max-lg:text-base max-lg:font-semibold
        max-2xl:text-lg 2xl:font-semibold
        ">CP</Link>
      </li> */}
      {/* <li className='py-1.5'>
        <Link 
        to="/productivity" 
        className="
        max-sm:text-[13px] max-sm:font-normal text-[#000000] rounded
        max-lg:text-base max-lg:font-semibold
        max-2xl:text-lg 2xl:font-semibold
         ">Experience</Link>
      </li> */}
      <li className='py-1.5'>
        <Link 
        to="/contact" 
        className="
        max-sm:text-[13px] max-sm:font-normal text-[#000000] rounded
        max-lg:text-base max-lg:font-semibold
        max-2xl:text-lg 2xl:font-semibold
        ">Contact Me</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar;