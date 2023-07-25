import React from 'react'

const ProjectCard = ({ values }) => {
    const {
        thumbnail,
        title
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
                <p className='font-bold capitalize text-center text-xl px-3 truncate'>{title}</p>
            </div >

            {/* Button For Start Project */}
            < div className='text-center px-10' >
                <button className='bg-primary hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-500 text-white w-full p-2 font-bold rounded-md'>Start Building</button>
            </div >
        </div >
    )
}

export default ProjectCard