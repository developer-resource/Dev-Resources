import React, { useEffect, useState } from 'react'
// import Footer from '../components/footer'
import { getThemeMode, setThemeMode } from '../utils/helper'
import HomePage from './Home/home-page'
import Header from '../components/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Protected from '../components/protected-component'
import { ROUTES } from '../utils/routes'
import CardDetailsPage from './cardDetails/card-details-page'
import ProjectPage from './Project/project-page'

const Layout = () => {
    const [theme, setTheme] = useState('dark')

    const handleThemeSwitch = () => {
        if (theme === 'dark') {
            setTheme('light')
            setThemeMode('light')
        }
        else {
            setTheme('dark')
            setThemeMode('dark')
        }
    }

    useEffect(() => {
        if (getThemeMode() === 'dark') {
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
            setTheme('light')
        }
    }, [theme])

    return (
        <div className="flex flex-col h-screen bg-white dark:bg-gray-900 transition-all duration-1000 font-fonts">

            <BrowserRouter>
                {/* Header */}
                <header className="fixed shadow-md dark:shadow-[rgba(255,255,255,.18)] top-0 left-0 w-full py-4 px-6 bg-transparent">
                    <Header handleThemeSwitch={handleThemeSwitch} />
                </header>

                {/* Content */}
                <main className="flex-1 flex overflow-scroll mt-20">
                    <Routes>
                        <Route path={ROUTES.HOME} element={<Protected component={HomePage} />} />
                        <Route path={ROUTES.CARD_DETAILS} element={<Protected component={CardDetailsPage} />} />
                        <Route path={ROUTES.PROJECTS} element={<Protected component={ProjectPage} />} />
                    </Routes>
                </main>

                {/* Footer */}
                {/* <footer className="bottom-0 left-0 w-full py-[.5px] px-6">
                    <Footer />
                </footer> */}
            </BrowserRouter>

        </div >
    )
}

export default Layout