import React from 'react'

const ProjectCard = ({ values }) => {
    const {
        thumbnail,
        title,
        // keywords,
        // description
    } = values
    return (
        <div className='text-black w-screen md:w-8/12 lg:w-1/4 flex flex-col gap-8 pb-5 overflow-hidden duration-500 rounded-lg dark:text-white bg-white shadow-md dark:bg-[rgba(255,255,255,.1)]' >
            {/* Thumnail */}
            <div>
                <img
                    src={thumbnail}
                    className='h-80 w-[100%]'
                    alt='projectThumbnail' />
            </div >

            {/* Title */}
            <div>
                <p className='font-bold capitalize flex flex-wrap justify-center items-center text-center text-xl px-3'>{title}</p>
            </div >

            {/* Description */}
            {/* <div className='h-40 overflow-scroll px-10 flex  flex-wrap flex-col'>
                <p className='text-start'>
                    {description}
                </p>
            </div> */}

            {/* Keyword */}
            {/* < div className='flex gap-2 px-10 flex-wrap  text-gray-600 dark:text-gray-300 justify-start' >
                {keywords?.map((val, index) => {
                    return (
                        <p key={index} className='text-xs capitalize p-2 rounded-lg text-white bg-black dark:text-slate-900  dark:bg-gray-400'>{val}</p>
                    )
                })}
            </div > */}

            {/* Button For Start Project */}
            < div className='text-center px-10' >
                <button className='bg-primary hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-500 text-white w-full p-2 font-bold rounded-md'>Start Building</button>
            </div >
        </div >
    )
}

export default ProjectCard