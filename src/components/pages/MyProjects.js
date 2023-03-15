

import React from 'react'

function Project({ data }) {
  return (

    <div class="card text-center" >
      <img src={data.image} alt="project" />
      <div class="card-body">
        <div>
          <h3>{data.title}</h3>
          <a href={data.deployedUrl} target="_blank" rel="noopener noreferrer"><button class="btn btn-primary">Live Link</button></a>
          <a href={data.githubUrl} target="_blank" rel="noopener noreferrer"><button class="btn btn-primary">Repo</button></a>
          <p>{data.skills}</p>
        </div>
      </div>

    </div>

  )
}

export default Project