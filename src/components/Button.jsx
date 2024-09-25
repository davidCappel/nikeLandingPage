import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center
     items-center gap-2 px-7 py-4 border 
     font-montserrat text-lg leading-none
      bg-coral-red rounded-full text-white hover:bg-red-500  transition duration-300 ease-in-out

      transform hover:scale-105 '>
      {label} 
      {iconURL&& <img src={iconURL} alt="arrow right icon" className='ml-2 rounded-full s-5 h-5'/>}
    </button>
  )
}

export default Button