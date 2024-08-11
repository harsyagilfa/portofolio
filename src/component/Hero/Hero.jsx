import React from "react"
import "../Hero/Hero.css"
import Animasi from "./Animasi.jsx"
import foto_profil from "../../assets/foto2.png"
import download from "../../assets/CV_GILANG_HARSYA.pdf"
const Hero = () =>
{
    return(
        <div className="hero" id="home" >
            <img src={foto_profil} alt="" />
            <h1>Gilang Harsya Fadillah <span> <br /> <Animasi /></span></h1>
            <div className="hero-action">

                <div className="resume">
                    <a href={download}>Download CV</a>
                </div>
            </div>
        </div>

    )
}
export default Hero