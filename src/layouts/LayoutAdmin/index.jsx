import React from 'react'
import Header from '../LayoutAdmin/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../LayoutAdmin/Footer'

const LayoutAdmin = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default LayoutAdmin
