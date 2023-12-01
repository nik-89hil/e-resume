import React from 'react'
import './style/style1.css'

const Certifi = () => {
  return (
    <>
    <div className="cert-box">
        <button className='certi-head'>Achievements and Certification</button>
        <table>
            <tr>
                <td><i className="fa-regular fa-circle-dot"></i> Certification in Full Stack Development.</td>
                <td><button><a href="">Certificate</a></button></td>
            </tr>
            <tr>
                <td><i className="fa-regular fa-circle-dot"></i> Achieved Certificate in Digital Marketing.</td>
                <td><button><a href="">Certificate</a></button></td>
            </tr>
            <tr>
                <td><i className="fa-regular fa-circle-dot"></i> Participation in "Spitting Kills" campaign.</td>
                <td><button><a href="">Certificate</a></button></td>
            </tr>
        </table>
    </div>
      
    </>
  )
}

export default Certifi
