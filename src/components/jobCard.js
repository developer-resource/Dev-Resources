import React, { useContext } from 'react'
import { BsPin } from 'react-icons/bs'
// import { AiFillCheckCircle } from 'react-icons/ai'
import { HomeContext } from '../pages/Home/home-provider'
import { Link } from 'react-router-dom'

const JobCard = ({ values }) => {
    const {
        organization,
        role,
        location,
        skills,
        amount,
        // logo,
        applyLink
    } = values

    return (
        <div className='text-black w-full md:w-full xl:w-1/4 rounded-lg dark:text-white px-6 py-6 bg-white shadow-md dark:bg-[rgba(255,255,255,.1)]'>
            {/* <p><AiFillCheckCircle color='green' size={40} /></p> */}
            <div className='flex gap-8 pb-3 mb-3 border-b-[.5px] border-gray-300 justify-between'>
                <div className='flex items-center gap-8'>
                    <img
                        alt='organizationIcon'
                        className='h-10 w-10 rounded-full object-contain'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png'
                    />

                    <div>
                        <p>{organization}</p>
                        <p className='my-3 text-xl text-ellipsis font-semibold'>{role}</p>
                        <p className='text-gray-600 dark:text-gray-300'>{location}</p>
                    </div>
                </div>
                <div className='text-end'>
                    <BsPin className='cursor-pointer' size={20} />
                </div>
            </div>

            <div className='flex justify-between'>
                <Link to={applyLink} target='_blank' className='text-white decoration-transparent flex items-center h-9 mt-2 hover:bg-indigo-700 bg-indigo-600 px-5 py-1 font-semibold  rounded-full text-sm'>Apply Now</Link>
                <div>
                    <p className='text-end text-sm font-bold'>Stipend</p>
                    <p className='text-end'>{amount}</p>
                </div>
            </div>

            <div className='flex gap-2 flex-wrap justify-center mt-5'>
                {skills?.map((val, index) => {
                    return (
                        <p key={index} className=' text-black dark:text-gray-300 px-4 py-1 font-semibold  rounded text-[10px]'>{val}</p>

                    )
                })}
            </div>

        </div>
    )
}

const JobCardWrapper = () => {
    const { pageData } = useContext(HomeContext)

    return (
        <div className='flex mb-12 flex-wrap gap-8 justify-center px-3 md:px-0'>
            {pageData?.map((val, index) => {
                return (
                    <JobCard
                        key={index}
                        values={{
                            organization: val?.companyName,
                            role: val?.jobTitle,
                            location: val?.location,
                            skills: val?.tags,
                            amount: '₹' + val?.expectedSalary,
                            logo: val?.profileImg,
                            applyLink: val?.portalLink
                        }}
                    />
                )
            })}

        </div>
    )
}

export default JobCardWrapper