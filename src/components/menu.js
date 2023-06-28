import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Menu = () => {
    const [menu, setMenu] = useState(false)
    const { isAuthenticated, logout } = useAuth0();

    const menuClass = 'text-white text-xl md:text-2xl my-10 hover:text-teal-500'
    const loginLogoutBtn = 'text-white w-24 rounded bg-indigo-600 text-center text-xl py-2 px-3'

    return (
        <div>
            <p onClick={() => setMenu(state => !state)} className='dark:text-white cursor-pointer mt-1 text-black text-2xl md:text-3xl'>{String.fromCharCode(menu ? 10005 : 9776)}</p>
            {menu
                ?
                <div className='absolute left-0 text-white flex flex-col py-4 sm:py-12 bg-[rgba(000,000,000,.87)] w-full p-6 mt-5 rounded'>
                    {isAuthenticated
                        ?
                        <>
                            <NavLink className={menuClass} to='/'>Home</NavLink>
                            <NavLink className={menuClass} to='/projects'>Projects</NavLink>
                            <NavLink className={menuClass} to='/saved'>Saved</NavLink>
                            <NavLink className={menuClass} to='/chat'>Chat</NavLink>

                            <button className={loginLogoutBtn} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                        </>
                        :
                        null
                    }
                </div>
                : null}
        </div >
    )
}

export default Menu