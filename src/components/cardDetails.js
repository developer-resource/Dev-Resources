import React from 'react'
import { VscLocation } from 'react-icons/vsc'
import { LiaLaptopCodeSolid } from 'react-icons/lia'
import { AiOutlineBulb, AiOutlineCalendar } from 'react-icons/ai'
import { MdAttachMoney, MdAutoGraph, MdOutlineWorkOutline } from 'react-icons/md'
import { BsInfoCircle } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { LuSchool2 } from 'react-icons/lu'
const CardDetailsComponent = ({ values }) => {

    const {
        batch, companyName, duration, expectedSalary, experience,
        jobDescription, jobTitle, location, portalLink,
        startDate, tags, type, logo
    } = values

    return (
        <div className='dark:text-colorTextDark p-4 w-screen text-colorText '>
            {/* Heading */}
            <section className='text-center flex justify-center items-center md:mt-5'>
                <div className='flex gap-10 items-center flex-col justify-center'>
                    <img
                        className='h-32 rounded w-3h-32 overflow-hidden item object-contain'
                        src={logo ? logo : 'https://www.freeiconspng.com/thumbs/office-icon/office-icon--insharepics-11.png'} alt='organizationLogo' />
                    {/* <p className='text-2xl'>Spenza Pvt Ltd.</p> */}
                    <h1 className='text-7xl font-extrabold text-gray-600 dark:text-gray-200'>{companyName}</h1>
                </div>
            </section>

            {/* Card Content */}
            <section className='text-md justify-evenly lg:text-2xl shadow-xl p-3 lg:p-10 rounded flex flex-col gap-10 mt-16 '>

                <div className='flex justify-between'>
                    <div className='flex flex-col gap-12 w-[60%]'>
                        <div className='flex justify-start items-center'>
                            <span className='font-bold flex items-center'><MdOutlineWorkOutline size={30} className='me-2' /> Job Title -</span>
                            <span className='ms-2'>{jobTitle}</span>
                        </div>

                        <div className='flex justify-start items-center'>
                            <span className='font-bold flex items-center'><LiaLaptopCodeSolid size={30} className='me-2' /> Type -</span>
                            <span className='ms-2'>{type}</span>
                        </div>

                        <div className='flex justify-start items-center'>
                            <span className='font-bold flex items-center'><VscLocation size={30} className='me-2' /> Location -</span>
                            <span className='ms-2'>{location}</span>
                        </div>

                        <div className='flex'>
                            <div className='flex gap-2 flex-wrap items-start w-[80%]'>

                                {/* Skills */}
                                <span className='font-bold flex items-center'><AiOutlineBulb size={30} className='me-2' /> Skills -</span>
                                <div className='flex w-[80%] gap-8 flex-wrap'>
                                    {
                                        tags?.map((val, index) => {
                                            return (
                                                <span key={index} className='text-gray-600 rounded-md bg-slate-200 dark:border-none dark:bg-gray-600 dark:text-gray-300 px-4 py-1 font-semibold  text-[1rem]'>{val}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-start items-center'>
                            <span className='font-bold flex items-center'><MdAttachMoney size={30} className='me-2' /> Stipend -</span>
                            <span className='ms-2'>{expectedSalary}</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-12 w-[40%] text-start'>
                        {duration &&
                            <div className='flex justify-start items-center'>
                                <span className='font-bold flex items-center'><BiTimeFive size={30} className='me-2' /> Duration -</span>
                                <span className='ms-2'>{duration}</span>
                            </div>
                        }

                        {startDate &&
                            <div className='flex justify-start items-center'>
                                <span className='font-bold flex items-center'><AiOutlineCalendar size={30} className='me-2' /> Start Date -</span>
                                <span className='ms-2'>{duration}</span>
                            </div>
                        }

                        {batch &&
                            <div className='flex justify-start items-center'>
                                <span className='font-bold flex items-center'><LuSchool2 size={30} className='me-2' /> Batch -</span>
                                <span className='ms-2'>{batch}</span>
                            </div>
                        }

                        {experience &&
                            <div className='flex justify-start items-center'>
                                <span className='font-bold flex items-center'><MdAutoGraph size={30} className='me-2' /> Experience -</span>
                                <span className='ms-2'>{experience}</span>
                            </div>
                        }
                    </div>
                </div>

                <div>
                    <div>
                        <span className='font-bold flex mb-3 cursor-pointer'><BsInfoCircle size={30} className='me-2' /> About Job</span>
                    </div>
                    <div>
                        <p className='text-start'>{jobDescription}</p>
                    </div>

                </div>


                <div className='text-center'>
                    <button onClick={() => window.open(portalLink, '_blank')} className='px-10 py-1 rounded-full font-bold  bg-indigo-600 dark:bg-white dark:hover:bg-gray-100 dark:text-black hover:bg-indigo-700 text-white text-md '>Apply</button>
                </div>
            </section>
        </div>
    )
}

export default CardDetailsComponent