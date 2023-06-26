import React, { useEffect, useState } from 'react'
import Footer from '../components/footer'
import { getThemeMode, setThemeMode } from '../utils/helper'
import HomePage from './Home/home-page'
import Header from '../components/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Protected from '../components/protected-component'

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
        <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-all duration-500 font-fonts">

            <BrowserRouter>
                {/* Header */}
                <header className="fixed shadow-md dark:shadow-[rgba(255,255,255,.18)] top-0 left-0 w-full py-4 px-6 bg-white dark:bg-black">
                    <Header handleThemeSwitch={handleThemeSwitch} />
                </header>

                {/* Content */}
                <main className="flex-grow mt-20 md:mt-24">
                    <Routes>
                        <Route path='/' element={<Protected component={HomePage} />} />
                    </Routes>
                </main>

                {/* Footer */}
                <footer className="bottom-0 left-0 w-full py-[.5px] px-6">
                    <Footer />
                </footer>
            </BrowserRouter>

        </div >
    )
}

export default Layout