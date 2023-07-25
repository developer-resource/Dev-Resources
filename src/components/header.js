import React from 'react'
import Menu from './menu'
import Logo from './logo'
import Avatar from './avatar'
import DayNightToggle from './dayNight-toggle'
import { useAuth0 } from '@auth0/auth0-react'

const Header = ({ handleThemeSwitch }) => {

    const { isAuthenticated, loginWithPopup } = useAuth0()

    return (
        <div className='flex justify-between '>
            <Menu />
            <Logo />
            <div className='flex justify-center items-center text-white'>
                <DayNightToggle handleThemeSwitch={handleThemeSwitch} />
                {isAuthenticated
                    ?
                    <Avatar />
                    :
                    <button
                        onClick={() => loginWithPopup()}
                        className='bg-indigo-500 px-3 font-semibold py-1 rounded'>Login</button>
                }
            </div>
        </div>
    )
}

export default Header