import React, { createContext, useEffect, useState } from 'react'
import { fetchHomeData } from '../../api/home-api'
import Loader from '../../components/loader'
import BlankPage from '../../components/blankPage'

const HomeContext = createContext(null)

const HomeProvider = ({ children }) => {

    const [state, setState] = useState({
        pageData: [],
        loading: true
    })

    useEffect(() => {
        fetchHomeData()
            .then((res) => {
                setState({ ...state, pageData: res?.data, loading: false })
            })
            .catch((err) => {
                alert('Unable To Fetch Data...')
                setState({ ...state, loading: false })
            })
    }, []) //eslint-disable-line

    return (
        <HomeContext.Provider value={{
            pageData: state?.pageData
        }}>
            {state?.loading ? <Loader /> : (state?.pageData.length === 0 ? <BlankPage /> : children)}
        </HomeContext.Provider>
    )
}

export default HomeProvider
export { HomeContext }