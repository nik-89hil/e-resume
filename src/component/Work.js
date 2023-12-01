import React from 'react'
import './style/style1.css'


const Work = () => {
  return (
    <div className='work-box'>
        <button className='head-work'>Work Experience</button>
        <ul>
            <li>
                <b>Content Writing :</b> I write articles about web tools and technologies (approx: 3-4 Months) on <span className='links'><a href="http://" target="_blank" rel="noopener noreferrer">widepost.com</a></span>.
            </li>
            <li>
                <b>Freelancing :</b> I completed many projects which are related to website development (approx: 6-7 Months), check out my projects on 
                <span className='links'><a href="http://" target="_blank" rel="noopener noreferrer"> nikfolio.com</a></span>.
            </li>
        </ul>
        
      
    </div>
  )
}

export default Work
