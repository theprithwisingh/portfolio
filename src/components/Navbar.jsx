import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='ml-5 mt-14'>
    <ul>
    <li className='py-1.5'>
        <Link to="/" className="block text-base font-normal hover:text-blue-500">Project</Link>
      </li>
      <li className='py-1.5'>
        <Link to="/about" className="block text-base font-normal hover:text-blue-500">About</Link>
      </li>

      <li className='py-1.5'>
        <Link to="/productivity" className="block text-base font-normal hover:text-blue-500">Experience</Link>
      </li>
      <li className='py-1.5'>
        <Link to="/freelance" className="block text-base font-normal hover:text-blue-500">Freelance</Link>
      </li>
      <li className='py-1.5'>
        <Link to="/blogs" className="block text-base font-normal hover:text-blue-500">Blogs</Link>
      </li>
      <li className='py-1.5'>
        <Link to="/contact" className="block text-base font-normal hover:text-blue-500">Contact Me</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar;