import React, { useState, useEffect } from "react";
import JobDetails from "./JobDetails";
import "./jobCard.css";

const JobCard = ({ searchText }) => {
  const [data, setData] = useState([]);
  const [jobs,setJobs] = useState([])

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const jobItems = jobs;
    const filteredData = jobItems.filter((item) =>
      item.jobTitle.toLowerCase().includes(searchText.toLowerCase())
    );
    setData(filteredData);
  }, [searchText]);

  // Get Data
  const getData = async () => {
    let result = await fetch(
      "https://dev-resources-backend.onrender.com/api/jobs"
    );

    result = await result.json();
    setJobs(result)
    setData(result);
  };

  return (
    <div className="container jobContainer">
      {data.length > 0 ? (
        data.map((val, index) => {
          return (
            <JobDetails
              batch={val.batch}
              duration={val.duration}
              experience={val.experience}
              desc={val.jobDescription}
              startDate={val.startDate}
              portalLink={val.portalLink}
              key={index.toString()}
              tags={val.tags}
              type={val.type}
              logo={val.profileImg}
              amount={val.expectedSalary}
              jobRole={val.jobTitle}
              companyName={val.companyName}
              location={val.location}
            />
          );
        })
      ) : (
        <h2>No Jobs Found</h2>
      )}
    </div>
  );
};

export default JobCard;
