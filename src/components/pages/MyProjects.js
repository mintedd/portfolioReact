

import React from 'react'

function Project({ data }) {
  return (
    <div>

      <img src={data.image} alt="project" />
      <div className="overlay">
        <h3>{data.name}</h3>
        <a href={data.url} target="_blank" rel="noopener noreferrer"><button>Live Link</button></a>
        <a href={data.github} target="_blank" rel="noopener noreferrer"><button>Repo</button></a>
        <p>{data.skills}</p>
      </div>
    </div>
  )
}

export default Project