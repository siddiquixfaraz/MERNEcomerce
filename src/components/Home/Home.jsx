import React from 'react'
import UncontrolledExample from '../layouts/Caurosel'
// import Header from '../layouts/Header.jsx/Header'
import SecMovingBanner from '../layouts/SecMovingBanner'
import TopMovingBanner from '../layouts/TopMovingBanner'
import './Home.css'
import PopularProduct from './PopularProduct/PopularProduct'

const Home = () => {
  return (
    <>
    <TopMovingBanner/>
    <UncontrolledExample/>
    <SecMovingBanner title="TRENDING" emotes="🔥"/>
    <PopularProduct/>
    </>
  )
}

export default Home