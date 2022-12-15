import React, { useState, useEffect } from 'react'
import JobDetails from './JobDetails'
import './jobCard.css'
const JobCard = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getData();
  }, []);

  // Get Data
  const getData = async () => {
    let result = await fetch(
      "https://admin-panel-backend-production.up.railway.app/api/jobs"
    );

    result = await result.json();

    setData(result);
  };

  console.log(data)
  



  return (
    <div className="container jobContainer">
      {data.map((val, index) => {
       return  <JobDetails duration={val.duration} experience={val.experience} desc={val.jobDescription} startDate={val.startDate}  portalLink={val.portalLink} key={val._id} tags={val.tags} type={val.type} logo={val.profileImg} amount={val.expectedSalary} jobRole={val.jobTitle} companyName={val.companyName} location={val.location} />
      })}


    </div>
  )
}

export default JobCard