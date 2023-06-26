import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import LandingPage from '../pages/Landing/landing-page'

const Protected = ({ component }) => {
    const Component = component
    const { isAuthenticated } = useAuth0()
    return isAuthenticated ? <Component /> : <LandingPage />
}

export default Protected