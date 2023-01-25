import React from 'react'
import Tab from '../Tab/Tab'
import JobCard from '../JobCard/JobCard'
import Filter from '../Filter/Filter'
import './container.css'
const Container = ({searchText}) => {
    return (
        <div className="container-fluid mt-3 parentContainer">
            <div className="row">
                <div className="col-2">
                    <Tab />
                </div>
                <div className="col-8">
                    <JobCard searchText={searchText} />
                </div>
                <div className="col-2">
                    <Filter />
                </div>
            </div>
        </div>
    )
}

export default Container