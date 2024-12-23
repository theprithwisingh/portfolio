// import React from 'react'

// const ProfileIcon = () => {
//   return (
//     <div className='flex flex-col justify-start align-middle mt-5 ml-5'>
//     <img className='h-16 w-16 rounded-md' src="https://dummyimage.com/1080x1080/ff0000/fff&text=Hello" alt="" />
//     <h3 className='text-[12px] font-bold'>Prithwi singh</h3>
//     <h3 className='text-[12px] font-bold'>Full stack engineer</h3>
//     <a className='text-[12px]' href="mailto:prithwisingh77@gmail.com">Prithwisingh@google.com</a>
// </div>
//   )
// }

// export default ProfileIcon;

import React from 'react';

const ProfileIcon = () => {
  return (
    <div className="flex flex-col justify-start align-middle mt-5 ml-5 max-lg:ml-3">
      <img className="h-16 w-16 rounded-md border-red-500" src="https://dummyimage.com/1080x1080/ff0000/fff&text=Hello" alt="Profile" />
      <h3 className="text-[12px] font-bold max-lg:text-[10px] lg:text-[12px]">Prithwi Singh</h3>
      <h3 className="text-[12px] font-bold max-lg:text-[10px] lg:text-[12px]">Full stack engineer</h3>
      <a className="text-[12px] max-lg:text-[10px] lg:text-[12px]" href="mailto:prithwisingh77@gmail.com">Prithwisingh7777@gmail.com</a>
    </div>
  );
}

export default ProfileIcon;

