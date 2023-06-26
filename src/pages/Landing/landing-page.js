import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LandingPage = () => {
    const { loginWithRedirect } = useAuth0()
    return (
        <section  className="min-h-screen ps-5 flex items-center bg-gradient-to-r from-rose-400 to-orange-300 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 text-white py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl text-slate-900 dark:text-white font-bold mb-4">Unlock Your Career Potential: Jobs, Internships, and Roadmaps to Success</h1>
                <p className="text-2xl py-20 mb-6">Looking For Jobs?</p>
                <button onClick={() => loginWithRedirect()} className="bg-white text-black font-bold py-2 px-4 rounded">Get Started</button>
            </div>
        </section>


    )
}

export default LandingPage