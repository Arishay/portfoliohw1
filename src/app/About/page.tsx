import React from 'react'
import Image from 'next/image'
import heroimg from '../components/public/Group 62.png'
import doodle from '../components/public/doodles mixed round.png'
import Navbar from '../components/Navbar'
export default function page() {
  return (
 
   <div className='bg-gray-800 min-h-screen'>
    <Navbar/>
      <h1 className='text-sky-400 text-6xl text-center p-9 font-semibold'>About <span className='text-white'>Me</span> </h1>

      <div className='flex justify-around pl-20 bg-gray-800'>
        <div className='w-1/2 pt-28 '>
        <h1 className='text-sky-400 text-3xl font-mono'>I'm Arisha <span className='text-white'>Ghaffar</span></h1>
        <p className='text-white text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quas vel laboriosam commodi tempora, molestiae tenetur dolore dolor sit quos provident ea laudantium, ipsum sequi culpa illo dicta? Iste, praesentium.</p>
        </div>
        <div className='w-1/2 bg-gray-800 h-96'>
      <Image
        src={doodle}
        alt={"700"}
        className='w-96'
        />
        <Image
        src={heroimg}
        alt={"700"}
        className='-mt-72 w-72'
        />
      </div>
      </div>
    </div>

  )
}
