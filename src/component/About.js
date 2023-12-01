import React from 'react'
import "./style/style1.css"

const About = () => {
  return (
    <>
    <div className="about-cont">
       <div className="aboutext">
        <p>Nikhil Kumar</p>
        <p>Certified Full Stack Developer</p>
        <p>Content Writer at :</p>
        <p>visit <a href="" target='_blank'>widepost.com</a></p>
       </div>
       <div className="links">
        <p><a href=""><span><i className="fa-brands fa-linkedin-in"></i></span> Linkedin</a></p>
        <p><a href=""><span><i className="fa-brands fa-github"></i></span> Github</a></p>
        <p><a href=""><span><i className="fa-solid fa-at"></i></span> email</a></p>
        <p><a href="tel:+919625696396"><span><i className="fa-brands fa-whatsapp"></i></span> whatsapp</a></p>
       </div>
    </div>
      
    </>
  )
}

export default About
