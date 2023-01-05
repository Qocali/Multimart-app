import React from 'react'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import Router from '../../routers/Router'
function Layout() {
  return (
    <div>
        <Header/>
        <div>
            <Router/>
        </div>
        <Footer/>
        
    </div>
  )
}

export default Layout