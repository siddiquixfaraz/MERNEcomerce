import React, { useState } from 'react'
import './Header.css'
import { CiSearch, CiUser } from "react-icons/ci";
import Cart from '../../Cart/Cart';

const Header = () => {

    const [cart, setCart] = useState(false);
    const handleCart = () =>{
        setCart(true)
    }

  return (
    <>
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
            <button className='cart' onClick={()=>setCart(true)} >CART</button>
        </div>
    </div>
    {cart && <Cart setCart={setCart}/>}
    </>
  )
}

export default Header