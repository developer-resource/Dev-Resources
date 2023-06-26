import React from 'react'
import HomeProvider from './home-provider'
import Home from './home'

const HomePage = () => {
    return (
        <HomeProvider>
            <Home />
        </HomeProvider>
    )
}

export default HomePage