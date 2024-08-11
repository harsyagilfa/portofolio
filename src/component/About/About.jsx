import React from 'react'
import "../About/About.css"
import foto_profil from "../../assets/foto.jpeg"

const About = () => {
  return (
    <div id='about' className='about' >
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-section">
            <div className="about-left">
            <img src={foto_profil} alt="" />
            </div>
            <div className="about-right">
                <p>I am a Bachelor of Information Systems graduate from Singaperbangsa University Karawang with a GPA of 
                3.64/4.00. I have a deep interest as a Fullstack Developer, focusing on website development. I have experience 
                as a website developer and administrator where I was tasked with developing the becdex.com website. I also have 
                experience in creating 2 projects, namely creating a company profile website for CV Radja Studio Indragiri, and 
                creating a website-based online ordering system using the waterfall method. I am a motivated individual with good 
                communication, teamwork, and problem-solving skills. I am also adaptable to various environments and tasks, 
                always ready to learn and face new challenges.
                </p>
            <div className="about-social-media">
            <a href="https://www.facebook.com/gilang.harsya.92"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/harsyagilfa/"><i className="bx bxl-instagram"></i></a>
            <a href="http://www.linkedin.com/in/gilangharsya"><i className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/harsyagilfa"><i className="bx bxl-github"></i></a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About