import React from 'react'
import "../Skills/Skills.css"
import Skills_Data from "../../assets/Skills_data"

const Skills = () => {
  return (
    <div id='skills' className='skills' >
        <div className="skills-title">
            <h1>My Skills</h1>
        </div>
        <div className="skills-container">
            {Skills_Data.map((skills,index)=>{
                return <div key={index} className='skills-format' >
                    <h2>{skills.s_name}</h2>
                    <p>{skills.s_deskripsi}</p>
                </div> 
            })}
        </div>
    </div>
  )
}

export default Skills