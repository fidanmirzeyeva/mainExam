import React from 'react'
import Nav from './Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

function MainLayout() {
  return (
    <>
    <Nav></Nav>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default MainLayout
