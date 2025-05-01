import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import DynamicTable from './DynamicTable'

const Header = () => {
  return (
    <div className='min-h-screen w-screen'>
        <Navbar/>
        <HeroSection />
        {/* <DynamicTable /> */}
    </div>
  )
}

export default Header