import './SecMovingBanner.css'

import React from 'react'

const SecMovingBanner = ({title}) => {
  return (
    <div className="sec-moving-banner">
        <div className="sec-content">
            <span>🔥</span>
            <span>{title}</span>
            <span>🔥</span>
        </div>
        <div className="sec-content">
            <span>🔥</span>
            <span>{title}</span>
            <span>🔥</span>
        </div>
        <div className="sec-content">
            <span>🔥</span>
            <span>{title}</span>
            <span>🔥</span>
        </div>
        <div className="sec-content">
            <span>🔥</span>
            <span>TRENDING</span>
            <span>🔥</span>
        </div>
      
    
       
    </div>
  )
}

export default SecMovingBanner