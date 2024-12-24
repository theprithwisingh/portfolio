import React from 'react'
import Navbar from '../components/Navbar';
import ProfileIcon from '../components/ProfileIcon';
// import ThemeProvider from '../components/ThemeProvider';

const LeftSide = () => {
  return (
    <div className='max-sm:flex'>
         <ProfileIcon/>
         <div className='max-sm:hidden'><Navbar/></div>
         {/* <ThemeProvider/> */}
    </div>
  )
}

export default LeftSide;