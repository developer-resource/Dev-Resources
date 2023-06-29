import React, { createContext, useEffect, useState } from 'react'
import Loader from '../../components/loader'
import BlankPage from '../../components/blankPage'
import { getCardDetails } from '../../api/card-details.api'
import { useNavigate } from 'react-router-dom'

const CardDetailsContext = createContext(null)

const CardDetailsProvider = ({ children }) => {

    const [state, setState] = useState({ //eslint-disable-line
        pageData: [],
        loading: true
    })

    const navigate = useNavigate()


    useEffect(() => {
        const cardId = window.location.pathname.split('/')[2]

        getCardDetails(cardId)
            .then((res) => {
                setState({ ...state, pageData: res?.data, loading: false })
            })
            .catch((err) => {
                console.error('Unable To Fetch Card Details...', err)
                navigate('/')
                setState({ ...state, loading: false })
            })
    }, []) //eslint-disable-line

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