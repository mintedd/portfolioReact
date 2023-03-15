
import React from 'react'
import Project from '../pages/MyProjects'
import { Projects } from '../../utils/Projects'

export default function Portfolio() {
    return (
        <div>

            {
                Projects.map((project) => {
                    return <Project data={project} />

                })
            }
        </div>
    )
}
