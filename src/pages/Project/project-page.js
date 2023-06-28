import React from 'react'
import ProjectProvider from './project-provider'
import Project from './project'

const ProjectPage = () => {
    return (
        <ProjectProvider>
            <Project />
        </ProjectProvider>
    )
}

export default ProjectPage