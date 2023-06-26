import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiSolidToggleLeft, BiSolidToggleRight } from 'react-icons/bi'
import { getThemeMode } from '../utils/helper'

const Menu = ({ handleThemeSwitch }) => {
    const [menu, setMenu] = useState(false)

    const menuClass = 'text-white text-xl md:text-2xl my-10 hover:text-teal-500'

    return (
        <div>
            <p onClick={() => setMenu(state => !state)} className='dark:text-white cursor-pointer mt-1 text-black text-2xl md:text-3xl'>{String.fromCharCode(menu ? 10005 : 9776)}</p>
            {menu
                ?
                <div className='absolute left-0 text-white flex flex-col py-4 sm:py-12 bg-[rgba(000,000,000,.87)] w-full p-6 mt-5 rounded'>
                    <NavLink className={menuClass} to='/'>Home</NavLink>
                    <NavLink className={menuClass} to='/roadmap'>Roadmap</NavLink>
                    <NavLink className={menuClass} to='/saved'>Saved</NavLink>
                    <NavLink className={menuClass} to='/chat'>Chat</NavLink>
                    {getThemeMode() === 'dark'
                        ?
                        <BiSolidToggleRight
                            onClick={handleThemeSwitch}
                            className='mt-5 cursor-pointer'
                            size={45} />
                        :
                        <BiSolidToggleLeft
                            onClick={handleThemeSwitch}
                            className='mt-5 cursor-pointer'
                            size={45} />}
                </div>
                : null}
        </div>
    )
}

export default Menu