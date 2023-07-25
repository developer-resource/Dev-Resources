import React from 'react'
import { Link } from 'react-router-dom'

const RoadMapCard = ({ title, image, link }) => {
    return (
        <div className='dark:text-gray-100  xl:w-1/4 flex flex-col gap-3 '>
            <div className="container mx-auto mt-8">
                <div className="relative max-w-md mx-auto bg-white flex flex-col gap-4 shadow-lg rounded-lg overflow-hidden">
                    <img
                        src={image}
                        alt="Roadmap Image"
                        className="h-40 w-full object-cover"
                    />
                    <div className='p-3 text-center'>
                        <h2 className='text-black text-xl font-bold'>{title}</h2>
                    </div>

                    <div className='text-center  '>
                        <Link to={link}><button className='font-semibold w-1/2 2xl:w-1/3 text-white bg-indigo-700  p-1 rounded mb-2'>Start Learning</button></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RoadMapCard