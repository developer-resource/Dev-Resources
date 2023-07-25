import React, { useContext } from 'react'
import JobCardWrapper from '../../components/jobCard'
import Search from '../../components/Search'
import { HomeContext } from './home-provider'

const Home = () => {
    const { searchAPI, fetchAPI } = useContext(HomeContext)
    return (
        <div className='flex flex-1 flex-col gap-3'>
            <Search searchAPI={searchAPI} fetchAPI={fetchAPI} />
            <JobCardWrapper />
        </div>
    )
}

export default Home