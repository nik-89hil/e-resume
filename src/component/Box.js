import React from 'react'
import '../App.css'
import Imager from './Imager'
import About from './About'
import Education from './Education'
import Skill from './Skill'
import Work from './Work'
import Certifi from './Certifi'
import Contact from './Contact'


const Box = () => {
  return (
    <div className='container'>
      <Imager/>
      <About/>
      <Education/>
      <Skill/>
      <Work/>
      <Certifi/>
      <Contact/>
      
    </div>
  )
}

export default Box
