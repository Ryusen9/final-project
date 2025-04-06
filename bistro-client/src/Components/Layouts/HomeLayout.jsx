import React from 'react'
import Hero from '../Hero/Hero'
import CategorySlide from '../Category Slide/CategorySlide'
import Extra1 from '../Extras/Extra1'
import PopularMenu from '../Extras/PopularMenu'
import Contact from '../Extras/Contact'
import Featured from '../Featured/Featured'

const HomeLayout = () => {
  return (
    <>
    <Hero/>
    <div className='max-w-7xl mx-auto'>
      <CategorySlide/>
      <Extra1/>
      <PopularMenu/>
      <Contact/>
      <Featured/>
      <p>Rest of the section goes here....</p>
    </div>
    </>
  )
}

export default HomeLayout