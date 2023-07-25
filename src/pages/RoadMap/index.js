import React from 'react'
import RoadMapCard from './RoadMap.card'
import { roadMapItems } from '../../constants/roadmap.constant'

const RoadMapPage = () => {
    return (
        <div>
            <h2 className='dark:text-white text-2xl  py-5 text-center font-semibold'>RoadMap</h2>
            <div className='flex justify-center flex-1 items-center flex-wrap gap-8'>
                {roadMapItems.map((val, index) => {
                    const { title, img, link } = val
                    return (
                        <RoadMapCard
                            title={title}
                            image={img}
                            link={link}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default RoadMapPage