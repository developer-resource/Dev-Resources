import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Avatar = () => {
  const { user } = useAuth0()

  return (
    <div>
      <img
        className='rounded-full cursor-pointer h-9 md:h-12'
        alt='User Icon'
        src={user?.picture} />
    </div>
  )
}

export default Avatar