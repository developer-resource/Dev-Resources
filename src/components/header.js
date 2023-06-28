import React from 'react'
import Menu from './menu'
import Logo from './logo'
import Avatar from './avatar'
import DayNightToggle from './dayNight-toggle'

const Header = ({ handleThemeSwitch }) => {
    return (
        <div className='flex justify-between '>
            <Menu />
            <Logo />
            <div className='flex justify-center items-center text-white'>
                <DayNightToggle handleThemeSwitch={handleThemeSwitch} />
                <Avatar />
            </div>
        </div>
    )
}

export default Header