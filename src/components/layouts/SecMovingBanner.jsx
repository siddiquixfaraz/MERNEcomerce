import './SecMovingBanner.css'

import React from 'react'

const SecMovingBanner = ({ title, emotes }) => {
    return (
        <div className="sec-moving-banner">
            <div className="sec-content">
                <span>{emotes}</span>
                <span>{title}</span>
                <span>{emotes}</span>
            </div>
            <div className="sec-content">
                <span>{emotes}</span>
                <span>{title}</span>
                <span>{emotes}</span>
            </div>
            <div className="sec-content">
                <span>{emotes}</span>
                <span>{title}</span>
                <span>{emotes}</span>
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