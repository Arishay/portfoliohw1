import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between p-5 px-24'>

    <div>
    <h1 className='text-white font-bold '>Portfolio</h1>
    </div>

    <div className='text-white font-semibold flex gap-8'>
      <a href="/Home" className=''>Home</a>
      <a href="/About">About</a>
      <a href="/Contact">Contact</a>
    </div>

    </div>
  )
}
