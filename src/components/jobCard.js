import React, { useContext } from 'react'
import { BsPin } from 'react-icons/bs'
// import { AiFillCheckCircle } from 'react-icons/ai'
import { HomeContext } from '../pages/Home/home-provider'
import { useNavigate } from 'react-router-dom'
import BlankPage from './blankPage'
import Loader from './loader'

const JobCard = ({ values }) => {
    const {
        organization,
        role,
        location,
        skills,
        amount,
        logo,
        applyLink,
        id
    } = values

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/details/${id}`)} className='text-black w-[93%] md:w-[70%] xl:w-[35%] 2xl:w-[30%] cursor-pointer hover:scale-105 transition-all duration-500 rounded-lg dark:text-white p-5 bg-white shadow-md dark:bg-[rgba(255,255,255,.1)]'>
            {/* <p><AiFillCheckCircle color='green' size={40} /></p> */}
            <div className='flex gap-8 pb-6 border-b-[.5px] border-gray-300 justify-between'>
                <div className='flex items-center gap-8'>
                    <img
                        alt='organizationIcon'
                        className='h-10 w-10 rounded object-contain'
                        src={logo ? logo : 'https://www.freeiconspng.com/thumbs/office-icon/office-icon--insharepics-11.png'}
                    />

                    <div className='flex flex-col gap-2'>
                        <p>{organization}</p>
                        <p className='text-xl text-ellipsis font-semibold'>{role}</p>
                        <p className='text-gray-600 dark:text-gray-300'>{location}</p>
                    </div>
                </div>
                <div className='text-end'>
                    <BsPin className='cursor-pointer hover:scale-110 transition-all duration-300' size={20} />
                </div>
            </div>

            <div className='flex my-9 flex-wrap justify-between'>
                <button onClick={() => window.open(applyLink, '_blank')} className='text-white decoration-transparent h-9 mt-2 hover:bg-indigo-700 bg-indigo-600  px-5 py-1 font-semibold  rounded-full text-sm'>Apply Now</button>
                <div>
                    <p className='text-end text-sm font-bold'>Stipend</p>
                    <p className='text-end'>{amount}</p>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex gap-2 flex-wrap justify-between'>
                    {skills.length === 0 ? <p style={{ visibility: 'hidden' }}>Hidden</p>
                        :
                        skills?.map((val, index) => {
                            return (
                                index < 4 && <p key={index} className='text-gray-600 rounded-md bg-slate-200 dark:border-none dark:bg-gray-600 dark:text-gray-300 px-4 py-1 font-semibold  text-[11px]'>{val}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const JobCardWrapper = () => {
    const { pageData, pageLoader } = useContext(HomeContext)

    return (
        pageLoader ? <Loader /> : pageData?.length === 0
            ?
            <div className='flex flex-1 justify-center items-center'>
                <BlankPage />
            </div>
            :
            <div className='flex ms-1 items-center flex-wrap gap-8 md:mt-3 xl:mt-8 justify-center'>
                {pageData?.map((val, index) => {
                    return (
                        <>
                            <JobCard
                                key={index}
                                values={{
                                    organization: val?.companyName,
                                    role: val?.jobTitle,
                                    location: val?.location,
                                    skills: val?.tags,
                                    amount: val?.expectedSalary,
                                    logo: val?.profileImg,
                                    applyLink: val?.portalLink,
                                    id: val?._id
                                }}
                            />
                        </>
                    )
                })}

            </div>

    )
}

export default JobCardWrapper