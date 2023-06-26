import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'


const Page = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Home} />
            </Routes>
        </BrowserRouter>
    )
}


export { Page }