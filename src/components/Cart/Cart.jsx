import React from 'react'
import './Cart.css'
import { BsCartX } from 'react-icons/bs';
import CartItem from './CartItem/CartItem';

const Cart = ({setCart}) => {
  return (
    <>
        <div className="overlay">

        </div>
        <div className="cart-content">
            <div className="cart-header">
                <span className='cart-title'>SHOPPING CART</span>
                <button onClick={()=>setCart(false)}>X</button>
            </div>

            {/* <div className="empty-cart">
              <BsCartX size={300}  />
              <span>Your Cart is Empty</span>
            </div> */}

            <>
            <CartItem/>
            <div className="cart-footer">
                <div className="subtotal">
                  <span className='text'>Subtotal</span>
                  <span className='text total'>Price</span>
                </div>
                <div className="checkout-cont">
                  <button className='checkout-btn'>
                  CHECKOUT
                  </button>
                </div>
            </div>
            </>

        </div>
    </>
  )
}

export default Cart