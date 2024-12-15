import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Nav2 from '../Navbar/Nav2'
import Footer from '../Footer/Footer'
import Foot2 from '../Footer/Foot2'

export default function MainLayout() {
  return (
    <>
    <Navbar/>
    <Nav2/>
    <Outlet/>
    <Footer/>
    {/* <Foot2/> */}
      
    </>
  )
}
