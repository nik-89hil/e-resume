import React from 'react'
import {motion} from 'framer-motion'
import './style/style1.css'


const Contact = () => {
  return (
    <>
    <div className="contact">
        <motion.button
        className="box-contact"
        whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            contact
        </motion.button>
        <motion.button
        className="box-contact"
        whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <a href=""><i className="fa-brands fa-whatsapp"></i> whatsapp</a>
        </motion.button>
        <motion.button
        className="box-contact"
        whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <a href=""><i class="fa-solid fa-at"></i> email</a>
        </motion.button>
        <motion.button
        className="box-contact"
        whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <a href=""><i class="fa-solid fa-print"></i> Print</a>
        </motion.button>
        
        
            

    </div>
    </>
  )
}

export default Contact
