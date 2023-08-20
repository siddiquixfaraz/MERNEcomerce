import React from 'react'
import './Header.css'
import { CiSearch, CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <div className="header">
        <div className="header-left">
            <div className="brand-logo">
                <a href="">
                    <img src="https://mrbeast.store/cdn/shop/files/MrBeast-Logo.png?v=1691676134&width=160" alt="" />
                </a>
            </div>
            <a href="/" className='active-link'>HOME</a>
            <a href="/">ALL</a>
            <a href="/">NEW</a>

        </div>
        <div className="header-right">
            <span>$ | INDIA</span>
            <div className="search-box">
                <span><CiSearch/></span>
                <input type="text" placeholder='SEARCH' />
            </div>
            <span><CiUser/></span>
            <a href="/" className='cart'>CART</a>
        </div>
    </div>
  )
}

export default Header