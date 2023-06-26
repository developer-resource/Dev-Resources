import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Protected = ({ component }) => {
    const Component = component
    const { isAuthenticated } = useAuth0()
    return isAuthenticated && <Component />
}

export default Protected