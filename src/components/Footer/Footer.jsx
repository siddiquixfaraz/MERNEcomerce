import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div>
            <span className='f-heading'>About</span>
            <span>About us</span>
            <span>Features</span>
            <span>News & Blog</span>
        </div>
        <div>
            <span className='f-heading'>Connect</span>
            <span>LinkedIn</span>
            <span>Twitter</span>
            <span>Instagram</span>
        </div>
        <div>
            <span className='f-heading'>Support</span>
            <span>FAQ's</span>
            <span>Support Center</span>
            <span>Contact Us</span>
        </div>
    </footer>
  )
}

export default Footer