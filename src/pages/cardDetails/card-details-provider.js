import React, { createContext, useEffect, useState } from 'react'
import Loader from '../../components/loader'
import BlankPage from '../../components/blankPage'

const CardDetailsContext = createContext(null)

const CardDetailsProvider = ({ children }) => {

    const [state, setState] = useState({
        pageData: ['Hello'],
        loading: false
    })

    // useEffect(() => {
    //     fetchHomeData()
    //         .then((res) => {
    //             setState({ ...state, pageData: res?.data, loading: false })
    //         })
    //         .catch((err) => {
    //             alert('Unable To Fetch Data...')
    //             setState({ ...state, loading: false })
    //         })
    // }, []) //eslint-disable-line

    return (
        <CardDetailsContext.Provider value={{
            pageData: state?.pageData
        }}>
            {state?.loading ? <Loader /> : (state?.pageData.length === 0 ? <BlankPage /> : children)}
        </CardDetailsContext.Provider>
    )
}

export default CardDetailsProvider
export { CardDetailsContext }