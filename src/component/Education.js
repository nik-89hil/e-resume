import React from 'react'
import "./style/style1.css"

const Education = () => {
  return (
    <div className='edu-box'>
        <div className="head-course">
        Education
        </div>
        <p className="complete"> Completed Year</p>
        <div className="course-box">
            <p className="course">Full Stack Development Course</p>
            <p className='from'>Skill Academy <span className='links'>( <a href="">testbook.com</a> )</span></p>
        </div>
        <p><button>July 2023</button></p>
        <div className="course-box">
            <p className="course">Graduation || B.A Political Science (Hons.)</p>
            <p className='from'>University of Delhi</p>
        </div>
        <p><button>2020 - 2023</button></p>
    </div>
  )
}

export default Education
