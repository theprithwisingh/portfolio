import React from 'react'
import Navbar from '../components/Navbar';
import ProfileIcon from '../components/ProfileIcon';
// import ThemeProvider from '../components/ThemeProvider';

const LeftSide = () => {
  return (
    <div className=''>
         <ProfileIcon/>
         <Navbar/>
         {/* <ThemeProvider/> */}
    </div>
  )
}

export default LeftSide;