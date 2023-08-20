import React from 'react'
import './PopularProduct.css'
import img1 from '../../../assets/products/headphone-prod-2.webp'


export const Product = () =>{
  return(
    <div className="product-card">
          <div className="product-img">
            <img src={img1} alt="" />
          </div>
          <div className="product-des">
            <span>product deatil</span>
            <span>&#8377;499</span>
          </div>
    </div>
  )
}

const PopularProduct = () => {
  return (
    <div className='popular-product'>
      {/* <div className="popular-pro-title">
        <h3>POPULAR PRODUCTS</h3>
      </div> */}
      <div className="product-section">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
}

export default PopularProduct