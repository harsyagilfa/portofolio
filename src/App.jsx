import React  from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero   from './component/Hero/Hero'
import About  from './component/About/About'
import Skills from './component/Skills/Skills'
import Certificate from './component/Certificate/Certificate'
import Project from './component/Project/Project'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'

const App = () =>
{
  return(
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Certificate/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
  )
}
export default App
