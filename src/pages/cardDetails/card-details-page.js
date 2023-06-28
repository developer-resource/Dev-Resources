import React from 'react'
import CardDetailsProvider from './card-details-provider'
import CardDetails from './card-details'

const CardDetailsPage = () => {
    return (
        <CardDetailsProvider>
            <CardDetails />
        </CardDetailsProvider>
    )
}

export default CardDetailsPage