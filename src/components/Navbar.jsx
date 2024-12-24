import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='ml-5 mt-14 max-sm:mt-2.5 max-sm:ml-20 max-lg:ml-3'>
    <ul className='max-sm:flex max-sm:justify-around max-sm:mt-1 max-sm:text-7xl'>
    <li className='py-1.5'>
        <Link to="/" className="block text-base font-normal hover:text-blue-500 max-lg:text-sm lg:[text-base]   max-sm:bg-slate-400 max-sm:py-1 max-sm:px-2 max-sm:rounded-sm ">Project</Link>
      </li>
      <li className='py-1.5'>
        <Link to="/about" className="block text-base font-normal hover:text-blue-500 max-lg:text-sm lg:[text-base] max-sm:bg-slate-400 max-sm:rounded-sm">About</Link>
      </li>

      <li className='py-1.5'>
        <Link to="/productivity" className="block text-base font-normal hover:text-blue-500 max-lg:text-sm lg:[text-base] max-sm:bg-slate-400 max-sm:py-1 max-sm:px-2 max-sm:rounded-sm">Experienceeee</Link>
      </li>
      <li className='py-1.5'>
        <Link to="/freelance" className="block text-base font-normal hover:text-blue-500 max-lg:text-sm lg:[text-base] max-sm:bg-slate-400 max-sm:py-1 max-sm:px-2 max-sm:rounded-sm">Freelance</Link>
      </li>
      <li className='py-1.5'>
        <Link to="/competitiveProgramming" className="block text-base font-normal hover:text-blue-500 max-lg:text-sm lg:[text-base] max-sm:bg-slate-400 max-sm:py-1 max-sm:px-2 max-sm:rounded-sm">CP</Link>
      </li>
      <li className='py-1.5'>
        <Link to="/contact" className="block text-base font-normal hover:text-blue-500 max-lg:text-sm lg:[text-base] max-sm:bg-slate-400 max-sm:py-1 max-sm:px-2 max-sm:rounded-sm">Contact Me</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar;