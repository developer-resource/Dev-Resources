import React, { useState } from 'react'
import { Save } from '../../assets/tabIcons/'
import './jobDetails.css'

const JobDetails = (props) => {

  // console.log(props)

  const [more, setMore] = useState(false);

  return (
    <div className="container mb-5 ">

      <div className="row mx-auto jobDiv pt-3">

        {/* Save Icon */}
        <div className="row text-end saveDiv ms-3">
          <div className="col-12">
            <img className='saveIcon' src={Save} alt="Save" />
          </div>
        </div>

        {/* Top */}
        <div className="col-10 left">

          {/* Company Logo */}
          <img className='img-fluid companyLogo' src={props.logo} alt="Logo" />

          {/* Job Info */}
          <div className="row d-flex ms-2 flex-column w-100">



            <div className="col-4">
              <div className="companyName">{props.companyName}</div>
            </div>
            <div className="col-4 my-2">
              <div className="jobRole h5">{props.jobRole}</div>
            </div>
            <div className="col-4">
              <div className="companyLocation">{props.location}</div>
            </div>
          </div>

        </div>


        {/* Right (Stipend) */}
        <div className="col-2 text-center mt-5">
          <div className="typeTxt h6 mb-3">{props.type}</div>
          <div className="moneyTxt h6">₹ {props.amount}</div>
        </div>


        {/* Tech Tags */}
        <div className="row ps-5 mt-4">
          <div className="col-12">
            <div className="col-1 text-center d-flex">
              {props.tags.map((val, index) => {
                return <div key={index} className="techTags px-4 py-1 ms-3 d-flex flex-column justify-content-center">{val}</div>
              })}
            </div>
          </div>
        </div>


        {/* Bottom */}
        <div className="row text-center px-4 mt-4 py-3 ms-0 moreDiv ">
          <div className="col-4 text-start">
            <button className='status'>Applied</button>
          </div>
          <div className="col-4 my-auto">
            <button className='showMore' onClick={()=>setMore(!more)}>Show {more ? 'Less' : 'More'}{more ? <i className="ms-1 fa-solid fa-angle-up"></i> : <i className="ms-1 fa-solid fa-angle-down"></i>} </button>
          </div>
          <div className="col-4 text-end">
            <button className='applyNow' onClick={() => window.open(props.portalLink, '_blank')}>Apply Now</button>
          </div>
        </div>

        {/* Show More Div */}
        <div className="row mt-5 showDiv" style={{display: more ? 'block' : 'none'}}>
          <div className='col-12'>
            <div className="h6 mb-4 fw-bold">Type : <span className='fw-light'>{props.type}</span></div>
            <div className="h6 mb-4 fw-bold">Start Date : <span className='fw-light'>{props.startDate}</span></div>
            <div className="h6 mb-4 fw-bold">Duration : <span className='fw-light'>{props.duration}</span></div>
            <div className="h6 mb-4 fw-bold">Batch : <span className='fw-light'>{props.batch}</span></div>
            <div className="h6 mb-4 fw-bold">Experience : <span className='fw-light'>{props.experience}</span></div>
            {/* <div className="h6 mb-4 fw-bold">Application Close Date : <span className='fw-light'>{props.jobRole}</span></div>   (! IMPORTANT)  */}
            <div className="h6 mb-4 fw-bold text-center">Description</div>
            <p>{props.desc}</p>
          </div>
        </div>

      </div>




    </div>
  )
}

export default JobDetails