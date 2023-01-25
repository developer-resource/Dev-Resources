import React from 'react'
import './nav.css'
const Nav = ({handleSearch}) => {

    
    return (
        <div className="container-fluid navContainer">
            <div className="row py-1 px-2">
                <div className="col-4 my-auto">
                    <img className='img-fluid logo' src={require('../../assets/drLogo.png')} alt="Developer Resource" />
                </div>
                <div className="col-4 my-auto text-center">
                    <input type="search" className='searchBar' onChange={(e) =>handleSearch(e.target.value) } placeholder='Search...' />
                </div>
                <div className="col-4 text-end my-auto">
                    <img className='img-fluid' src={require('../../assets/avatarIcon.png')} alt="User" />
                </div>
            </div>
        </div>
    )
}

export default Nav