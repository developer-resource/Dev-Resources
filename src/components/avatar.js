import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Avatar = () => {
  const {user} = useAuth0()

  return (
    <div>
      <img
        className='rounded-full cursor-pointer h-9 md:h-12 dark:bg-white'
        alt='User Icon'
        src={user?.picture ? user.picture : 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp'} />
    </div>
  )
}

export default Avatar