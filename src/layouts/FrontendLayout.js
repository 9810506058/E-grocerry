import React from 'react'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import Footer from '../components/Footer'

import Hero from '../components/Hero'

const FrontendLayout = ({children}) => {
  return (
    <>
<Navbar/>
    <Hero/>
    <Footer/>
    {children}
    
    

    </>
  )
}

export default FrontendLayout