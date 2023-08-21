import React, { useState } from 'react'
import './PopularProduct.css'
import img1 from '../../../assets/products/headphone-prod-2.webp'
import { faker } from '@faker-js/faker'
import { BsFillCartXFill,BsCartPlus } from 'react-icons/bs';


faker.seed(100);


export const Product = ({name,image,price}) =>{
  return(
    <div className="product-card">
          <div className="product-img">
            <img src={image} alt="" />
          </div>
          <div className="product-des">
            <span>{name}</span>
            <span>&#8377;{price}</span>
          </div>
          <BsCartPlus size={20} className='addtocartprod'/>
      
  
    </div>
  )
}

const PopularProduct = () => {


  const productsArray = [...Array(20)].map(()=>({
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    // image: faker.random.image(),
    avatar: faker.image.avatar(),
  }));

  const [products] = useState(productsArray)

  return (
    <div className='popular-product'>
      {/* <div className="popular-pro-title">
        <h3>POPULAR PRODUCTS</h3>
      </div> */}
      <div className="product-section">
        {products.map((prod)=>(<Product 
        key={prod.id} name={prod.name} image={prod.avatar} price={prod.price} />))}
        
      
      </div>
    </div>
  )
}

export default PopularProduct