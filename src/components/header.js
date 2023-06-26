import React from 'react'
import Menu from './menu'
import Logo from './logo'
import Avatar from './avatar'

const Header = ({ handleThemeSwitch }) => {
    return (
        <div className='flex justify-between '>
            <Menu handleThemeSwitch={handleThemeSwitch} />
            <Logo />
            <Avatar />
        </div>
    )
}

export default Header