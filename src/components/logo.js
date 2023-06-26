import React from 'react'
import { TiCodeOutline } from 'react-icons/ti'

const Logo = () => {
  return (
    <div className='flex items-center gap-1'>
      <TiCodeOutline
        size={25}
        className='dark:text-white text-black' />

      <p className='dark:text-white text-black text-xl md:text-2xl font-bold font-fonts'>Developer Resources</p>
    </div>
  )
}

export default Logo