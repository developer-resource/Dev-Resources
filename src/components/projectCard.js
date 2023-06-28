import React from 'react'

const ProjectCard = () => {
    return (
        <div className='dark:text-colorTextDark transition-all duration-500 dark:bg-[rgba(255,255,255,.1)] text-colorText w-[93%] md:w-96 pb-3 flex flex-col gap-6  bg-white shadow-md  overflow-hidden rounded-md'>
            {/* Thumnail */}
            <div>
                <img
                    src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80'
                    className='h-60 w-[100%]'
                    alt='projectThumbnail' />
            </div>

            {/* Title */}
            <div>
                <p className='font-bold text-center text-xl'>Gym Project Using React.Js</p>
            </div>

            {/* Description */}
            <div className='flex gap-2 flex-wrap text-gray-600 dark:text-gray-300 justify-center'>
                <p className='text-sm'>React.js</p>
                <p className='text-sm'>Bootstrap</p>
            </div>

            {/* Button For Start Project */}
            <div className='text-center px-10'>
                <button className='bg-primary hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-500 text-white w-full p-2 font-bold rounded-md'>Start Building</button>
            </div>
        </div>
    )
}

export default ProjectCard