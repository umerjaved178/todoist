import React from 'react'

interface Props {
    project: string
}

function Project(props: Props) {
    const {project} = props
    return (
        
            <span>{project}</span>
        
    )
}

export default Project
