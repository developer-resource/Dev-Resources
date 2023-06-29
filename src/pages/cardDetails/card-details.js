import React, { useContext } from 'react'
import CardDetailsComponent from '../../components/cardDetails'
import { CardDetailsContext } from './card-details-provider'

const CardDetails = () => {

    const { pageData } = useContext(CardDetailsContext)

    return (
        <CardDetailsComponent values={pageData} />
    )
}

export default CardDetails