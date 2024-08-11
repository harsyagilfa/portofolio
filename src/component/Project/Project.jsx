import React from 'react'
import "../Project/Project.css"
import Project_data from "../../assets/Project_data"

const Project = () => {
  return (
    <div id='project' className='project'>
        <div className="project-title">
            <h1>Project</h1>
        </div>
        <div className="project-container">
            {Project_data.map((Project,index)=>{
                return  <a href={Project.p_link}> <img key={index} src={Project.p_foto} alt=""/> </a> 
            })}
        </div>
    </div>
  )
}

export default Project