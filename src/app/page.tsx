import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'



export default function app() {
  return (
    <div className='bg-gray-800 min-h-screen'>
<Navbar/>
<Banner/>
<Footer/>
    </div>
  )
}
