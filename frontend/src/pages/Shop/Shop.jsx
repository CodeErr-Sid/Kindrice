import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ShopBanner from '../../Components/ShopBanner/ShopBanner'
import ShopBowl from '../../Components/ShopBowl/ShopBowl'
import Product from '../../Components/Product/Product'
import { assets } from '../../assets/assets'

const Shop = () => {

  const productId = import.meta.env.VITE_LOWGIRICE_PRODUCT_ID;

  return (
    <>
      <Navbar />
      <ShopBanner title="Online Shop" address="Home/Shop" />
      <section className="relative">
        <img className='absolute z-[-1] right-0 top-40 flex' src={assets.bgcircle} alt="" />
        <ShopBowl />
        <Product productId={productId}/>
      </section>
      <Footer />
    </>
  )
}

export default Shop