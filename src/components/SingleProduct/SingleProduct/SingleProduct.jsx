import React from 'react'
import './SingleProduct.css'
import { Product } from '../../Home/PopularProduct/PopularProduct'
import banner from '../../../assets/banner-img.png'
import { CiSearch, CiUser } from "react-icons/ci";
import { FaFacebookF,FaInstagram,FaLinkedin,FaPinterest, FaTwitter } from "react-icons/fa";
import SecMovingBanner from '../../layouts/SecMovingBanner';


const SingleProduct = () => {
  return (
    <>
    <div className="single-pro-container">
      <div className="single-pro-left">
        <img src={banner} alt="" />
      </div>
      <div className="single-pro-right">
        <span className='pro-name'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, consectetur?</span>
        <span className='price'>Product Price</span>
        <span className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor pariatur, voluptate molestias, ab quo amet impedit dolorem nemo ad aliquam quae eveniet minima veniam perspiciatis accusantium eos officia nisi repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta veritatis et neque enim assumenda rem placeat ut maxime, sint quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus ipsam accusantium pariatur perspiciatis fugiat rem ratione similique odit blanditiis.</span>
        <div className="cart-btn">
            <div className="quantity-btn">
              <span>-</span>
              <span>8</span>
              <span>+</span>
            </div>
            <button className="add-to-cart-btn">
              ADD TO CART
            </button>
        </div>

        <span className='divider'></span>

        <div className="item-info">
          <span className='text-bold'>Category:
            <span>Headphones</span>
          </span>
          <span className='text-bold'>Share:
            <span className='social-icons'>
              <FaFacebookF size={16}/>
              <FaInstagram size={16}/>
              <FaLinkedin size={16}/>
              <FaTwitter size={16}/>
              <FaPinterest size={16}/>
            </span>
          </span>
        </div>
      </div>
    </div>
<SecMovingBanner title="YOU MAY ALSO LOVE" emotes="😍"/>
    <div className='related-product'>
      
      <div className="product-section">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
    </>
  )
}

export default SingleProduct