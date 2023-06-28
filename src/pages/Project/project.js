import React, { useContext } from 'react'
import ProjectCard from '../../components/projectCard'
import { ProjectContext } from './project-provider'

const Project = () => {

    const { pageData } = useContext(ProjectContext)

    return (
        <div className='flex flex-wrap flex-1 px-5 overflow-scroll justify-center pt-3 items-center gap-10'>
            {pageData?.map((val, index) => {
                return (
                    <ProjectCard
                        key={index}
                        values={{
                            thumbnail: val?.thumbnail,
                            title: val?.title,
                            keywords: val?.keywords,
                            description: val?.description
                        }}
                    />
                )
            })}

        </div>
    )
}

export default Project