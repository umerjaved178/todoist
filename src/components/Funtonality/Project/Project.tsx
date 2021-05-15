import React from 'react'

interface Props {
    project: string
}

function Project(props: Props) {
    const {project} = props
    return (
        <div>
            <p>{project}</p>
        </div>
    )
}

export default Project
