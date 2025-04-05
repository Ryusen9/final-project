import React from 'react'
import Hero from '../Hero/Hero'
import CategorySlide from '../Category Slide/CategorySlide'

const HomeLayout = () => {
  return (
    <>
    <Hero/>
    <div className='max-w-7xl mx-auto'>
      <CategorySlide/>
      <p>Rest of the section goes here....</p>
    </div>
    </>
  )
}

export default HomeLayout