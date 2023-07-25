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
import ChatPage from './Chat'
import RoadMapPage from './RoadMap'
import FrontendRoadMap from './RoadMap/Pages/frontend.roadmap'
import BackendRoadMap from './RoadMap/Pages/backend.roadmap'
import DevOpsRoadMap from './RoadMap/Pages/devops.roadmap'
import AndroidRoadMap from './RoadMap/Pages/android.roadmap'
import JavaScriptRoadMap from './RoadMap/Pages/javascript.roadmap'
import BlockchainRoadMap from './RoadMap/Pages/blockchain.roadmap'
import PromptEngineeringRoadMap from './RoadMap/Pages/propmt-engineering.roadmap'
import CyberSecurityRoadMap from './RoadMap/Pages/cyber-security.roadmap'
import MySpace from './MySpace'

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
                        <Route path={ROUTES.CHAT} element={<Protected component={ChatPage} />} />
                        <Route path={ROUTES.ROADMAP} element={<Protected component={RoadMapPage} />} />
                        <Route path={ROUTES.ROADMAP_FRONTEND_DEVELOPMENT} element={<Protected component={FrontendRoadMap} />} />
                        <Route path={ROUTES.ROADMAP_BACKEND_DEVELOPMENT} element={<Protected component={BackendRoadMap} />} />
                        <Route path={ROUTES.ROADMAP_DEVOPS_DEVELOPMENT} element={<Protected component={DevOpsRoadMap} />} />
                        <Route path={ROUTES.ROADMAP_ANDROID_DEVELOPMENT} element={<Protected component={AndroidRoadMap} />} />
                        <Route path={ROUTES.ROADMAP_JAVASCRIPT_DEVELOPMENT} element={<Protected component={JavaScriptRoadMap} />} />
                        <Route path={ROUTES.ROADMAP_BLOCKCHAIN_DEVELOPMENT} element={<Protected component={BlockchainRoadMap} />} />
                        <Route path={ROUTES.ROADMAP_PROMPT_ENGINEERING_DEVELOPMENT} element={<Protected component={PromptEngineeringRoadMap} />} />
                        <Route path={ROUTES.ROADMAP_CYBER_SECURITY_DEVELOPMENT} element={<Protected component={CyberSecurityRoadMap} />} />
                        <Route path={ROUTES.MYSPACE} element={<Protected component={MySpace} />} />
                    </Routes>
                </main>
            </BrowserRouter>

        </div >
    )
}

export default Layout