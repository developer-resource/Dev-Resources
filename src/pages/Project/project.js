import React, { useContext } from 'react'
import ProjectCard from '../../components/projectCard'
import { ProjectContext } from './project-provider'

const Project = () => {
    const { pageData } = useContext(ProjectContext)

    return (
        <div className='flex flex-col gap-10'>
            {/* Tag Div */}

            {/* Card Div */}
            <div className='flex mt-4 flex-wrap gap-8 justify-center  items-center'>
                {pageData?.map((val, index) => {
                    const { thumbnail, title, keywords, description } = val
                    return (
                        <ProjectCard
                            key={index}
                            values={{
                                thumbnail: thumbnail,
                                title: title,
                                keywords: keywords,
                                description: description
                            }}
                        />
                    )
                })}
            </div>
        </div>

    )
}

export default Project