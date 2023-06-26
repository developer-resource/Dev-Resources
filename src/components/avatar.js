import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Avatar = () => {
  const {user} = useAuth0()

  return (
    <div>
      <img
        className='rounded-full cursor-pointer h-9 md:h-12 dark:bg-white'
        alt='User Icon'
        src={user?.picture ? user.picture : 'https://cdn.icon-icons.com/icons2/3446/PNG/512/account_profile_user_avatar_icon_219236.png'} />
    </div>
  )
}

export default Avatar