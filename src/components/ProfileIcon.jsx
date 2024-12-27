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
    <div className="
        flex flex-col justify-start align-middle mt-5 ml-2
        max-sm:ml-2 max-sm:px-2 max-sm:py-2 max-sm:mt-2 max-sm:flex max-sm:flex-row" >
      <div>
      <img className="h-24 w-24 rounded-md border-red-500" src="https://dummyimage.com/1080x1080/ff0000/fff&text=Hello" alt="Profile" />
      </div>
      <div className='max-sm:ml-3 max-sm:mt-1'>
      <h3 className="text-lg font-bold max-lg:text-[14px] max-2xl:text-base">Prithwi Singh</h3>
      <h3 className="text-lg font-bold max-lg:text-[14px] max-2xl:text-base">Full stack engineer</h3>
      <a className="text-md max-lg:text-[14px] " href="mailto:prithwisingh77@gmail.com">Prithwisingh7777@gmail.com</a>
      </div>
    </div>
  );
}

export default ProfileIcon;

