import React, { createContext, useEffect, useState } from 'react'
import { fetchHomeData } from '../../api/home-api'
import Loader from '../../components/loader'
import { JobSearch } from '../../api/search-api'

const HomeContext = createContext(null)

const HomeProvider = ({ children }) => {

    const [state, setState] = useState({
        pageData: [],
        loading: true,
    })

    const [pageLoader, setPageLoader] = useState(false)

    useEffect(() => {
        fetchInitialData()

    }, []) //eslint-disable-line

    // Initial Data Fetch 
    const fetchInitialData = () => {
        setPageLoader(true)
        fetchHomeData()
            .then((res) => {
                setState({ ...state, pageData: res?.data, loading: false, })
            })
            .catch((err) => {
                alert('Unable To Fetch Data...')
                setState({ ...state, loading: false })
            })
            .finally(() => setPageLoader(false))
    }

    // Search Method
    const search = (query) => {
        setPageLoader(true)
        JobSearch(query)
            .then((res) => setState({ ...state, pageData: res?.data }))
            .catch(err => console.warn('Error while searching...', err))
            .finally(() => setPageLoader(false))
    }

    return (
        <HomeContext.Provider value={{
            pageData: state?.pageData,
            searchAPI: search,
            fetchAPI: fetchInitialData,
            pageLoader: pageLoader
        }}>
            {state?.loading ? <Loader /> : children}
        </HomeContext.Provider>
    )
}

export default HomeProvider
export { HomeContext }