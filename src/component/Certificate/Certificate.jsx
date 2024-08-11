import React from 'react'
import "../Certificate/Certificate.css"
import Certificate_data from "../../assets/Certificate_data"

const Certificate = () => {
  return (
    <div id='certificate' className='certificate' >
        <div className="certificate-title">
            <h1>Certificate</h1>
        </div>
        <div className="certificate-container">
            {Certificate_data.map((Certificate,index)=>{
                return  <a href={Certificate.c_link}> <img key={index} src={Certificate.c_foto} alt=""/> </a> 
            })}
        </div>
    </div>
  )
}

export default Certificate