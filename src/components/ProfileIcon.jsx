import React from 'react'

const ProfileIcon = () => {
  return (
    <div className='flex flex-col justify-start align-middle mt-5 ml-5'>
    <img className='h-16 w-16 rounded-md' src="https://dummyimage.com/1080x1080/ff0000/fff&text=Hello" alt="" />
    <h3 className='text-[12px] font-bold'>Prithwi singh</h3>
    <a className='text-[12px]' href="mailto:prithwisingh77@gmail.com">Prithwisingh@google.com</a>
</div>
  )
}

export default ProfileIcon