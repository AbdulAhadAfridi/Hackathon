"use client"
import React from 'react'
import HeroSection from './components/hero'
import TopPicksSection from './components/toppicsection'
import ProductCard from './components/prodcard'
import Newarrival from './components/newarrivalsofa'
import InstagramSection from './components/instagramsection'
import BlogSection from './components/blogsection'


const Home = () => {
  

  return (
    <div>
      <HeroSection />
      <ProductCard/>
      <TopPicksSection/>
      <Newarrival/>
      <BlogSection/>
      <InstagramSection/>
      
    </div>
  )
}

export default Home
