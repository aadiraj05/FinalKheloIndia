import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'


const Header = () => {
  return (
    <div className='min-h-screen w-screen'>
        <Navbar/>
        <HeroSection />
       
    </div>
  )
}

export default Header