import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Menu = () => {
    const [menu, setMenu] = useState(false)
    const { isAuthenticated, logout } = useAuth0();

    const menuClass = 'text-white text-xl md:text-2xl my-10 hover:text-teal-500'

    return (
        <div>
            <p onClick={() => setMenu(state => !state)} className='dark:text-white cursor-pointer mt-1 text-black text-2xl md:text-3xl'>{String.fromCharCode(menu ? 10005 : 9776)}</p>
            {menu
                ?
                isAuthenticated
                ? 
                <div className='absolute left-0 text-white flex flex-col py-4 h-screen sm:py-12 bg-[rgba(000,000,000,.87)] w-full p-6 mt-5 rounded'>
                    <NavLink className={menuClass} to='/'>Home</NavLink>
                    <NavLink className={menuClass} to='/projects'>Projects</NavLink>
                    <NavLink className={menuClass} to='/myspace'>My Space</NavLink>
                    <NavLink className={menuClass} to='/chat'>Chat</NavLink>
                    <NavLink className={menuClass} to='/roadmap'>RoadMap</NavLink>
                </div>
                : 
                <div className='absolute left-0 text-white flex flex-col py-4 h-screen sm:py-12 bg-[rgba(000,000,000,.87)] w-full p-6 mt-5 rounded'>
                    <NavLink className={menuClass} to='/'>Home</NavLink>
                    <NavLink className={menuClass} to='/projects'>Projects</NavLink>
                    <NavLink className={menuClass} to='/roadmap'>RoadMap</NavLink>
                </div>
                : null}
        </div >
    )
}

export default Menu