import React from 'react'
import Hero from '../Hero/Hero'
import CategorySlide from '../Category Slide/CategorySlide'
import Extra1 from '../Extras/Extra1'
import PopularMenu from '../Extras/PopularMenu'
import Contact from '../Extras/Contact'
import Featured from '../Featured/Featured'
import Testimonials from '../Category Slide/Testimonials'
import { Helmet } from 'react-helmet'

const HomeLayout = () => {
  return (
    <>
    <Helmet>
      <title>Bistro Boss | Home</title>
    </Helmet>
    <Hero/>
    <div className='max-w-7xl mx-auto'>
      <CategorySlide/>
      <Extra1/>
      <PopularMenu/>
      <Contact/>
      <Featured/>
      <Testimonials/>
      <p>Rest of the section goes here....</p>
    </div>
    </>
  )
}

export default HomeLayout