import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='ml-5 mt-14 max-lg:ml-3'>
    <ul>
    <li className='py-1.5'>
        <Link to="/" className="block text-base font-normal hover:text-blue-500 max-lg:text-sm lg:[text-base]">Project</Link>
      </li>
      <li className='py-1.5'>
        <Link to="/about" className="block text-base font-normal hover:text-blue-500 max-lg:text-sm lg:[text-base]">About</Link>
      </li>

      <li className='py-1.5'>
        <Link to="/productivity" className="block text-base font-normal hover:text-blue-500 max-lg:text-sm lg:[text-base]">Experience</Link>
      </li>
      <li className='py-1.5'>
        <Link to="/freelance" className="block text-base font-normal hover:text-blue-500 max-lg:text-sm lg:[text-base]">Freelance</Link>
      </li>
      <li className='py-1.5'>
        <Link to="/competitiveProgramming" className="block text-base font-normal hover:text-blue-500 max-lg:text-sm lg:[text-base]">CP</Link>
      </li>
      {/* <li className='py-1.5'>
        <Link to="/contact" className="block text-base font-normal hover:text-blue-500 max-lg:text-sm lg:[text-base]">Contact Me</Link>
      </li> */}
    </ul>
  </nav>
  )
}

export default Navbar;