import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'

const Avatar = () => {
  const { user, logout } = useAuth0()

  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <img
        className='rounded-full cursor-pointer h-9 md:h-12'
        alt='User Icon'
        onClick={() => setToggle(e => !e)}
        src={user?.picture} />

      {toggle ? <div className='absolute right-5 dark:bg-[rgba(255,255,255,.2)] bg-[rgba(000,000,000,.2)] rounded flex justify-center items-center h-24 w-36  mt-1'>
        <button
          className='bg-indigo-600 px-3 py-1'
          onClick={() => logout()}>Logout</button>
      </div> : null}
    </div>
  )
}

export default Avatar