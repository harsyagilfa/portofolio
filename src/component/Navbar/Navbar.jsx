import React, { useState,useRef } from "react"
import "../Navbar/Navbar.css"
import underline from "../../assets/merah_putih.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../../assets/hamburger-menu.png"
import menu_close from "../../assets/close.png"
const Navbar = () =>
{
    const [menu,setMenu] = useState ("home")
    const menuRef = useRef();

    const openMenu = () =>
    {
        menuRef.current.style.right="0";
    }
    const closeMenu= () =>
    {
        menuRef.current.style.right="-350px";
    }

    return(
        <div className="navbar" > 
            <a href="#" className="logo">Gilang Harsya Fadillah</a>
            <img className="menu-open" src={menu_open} onClick={openMenu} alt="" />
            <ul ref={menuRef} className="nav-menu" >
                <img className="menu-close" src={menu_close} onClick={closeMenu} alt="" />
                <li><AnchorLink className='anchor-link' href='#home' ><p onClick={()=>setMenu("home")} >Home</p></AnchorLink>{menu==='home'?<img src={underline} alt="" />:<></>}</li>   
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==='about'?<img src={underline} alt="" />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu==='skills'?<img src={underline} alt="" />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#certificate'><p onClick={()=>setMenu("certificate")}>Certificate</p></AnchorLink>{menu==='certificate'?<img src={underline} alt="" />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={()=>setMenu("project")}>Project</p></AnchorLink>{menu==='project'?<img src={underline} alt="" />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==='contact'?<img src={underline} alt="" />:<></>}</li>
            </ul>
            <div className="nav-connect"><a href="https://www.linkedin.com/in/gilangharsya/">CONNECT ME</a></div>
        </div>
    )
}
export default Navbar