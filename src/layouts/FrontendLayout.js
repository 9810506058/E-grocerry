// src/layouts/FrontendLayout.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import{Outlet} from 'react-router-dom'// Make sure the path is correct
import Hero from '../components/Hero';
 function FrontendLayout({children}){
  return(
    <>
    <Navbar/>
    {/* <Outlet/> */}
    {children}
  



    </>
  )
 }

export default FrontendLayout;
