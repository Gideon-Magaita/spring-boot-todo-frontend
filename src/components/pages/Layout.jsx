import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <div className="container">
       <Header/>
       <div className="container">
        <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
          <Outlet/>
        </div>
      </div>
        {/* <Footer/> */}
    </div>
  )
}
