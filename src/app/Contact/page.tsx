import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import groplaast from '../components/public/grouplast-removebg-preview.png'

export default function page() {
  return (
    <div className='bg-gray-800 min-h-screen'>
<Navbar/>

<div className='flex pt-16 justify-between'>
<div className='w-1/4 pl-5'>
<h1 className=' text-white text-5xl pl-9  font-semibold w-96'>Got a project in <span className=' text-sky-400'>mind?</span> </h1>
<Image
        src={groplaast}
        alt={"700"}
        className=''
        />
</div>
{/* Contact form  */}
<div className='rounded-lg p-9 w-2/2'>
<form action="">
<div className='flex gap-5'>
  <input type="text" placeholder='Enter your name' className=' px-6 bg-gray-700 text-white rounded-md mx-7'/>

  <input type="text" placeholder='Enter your Email' className=' bg-gray-700 text-white p-4 px-6 rounded-md mx-7'/>
</div>
  <input type="text" placeholder='Type Your Message' className='bg-gray-700 text-white mt-11 p-4  px-44 py-28 rounded-md mx-7'/>


</form>
<button className='bg-sky-500 text-gray-800 font-semibold px-16 py-2 mt-4 ml-6 rounded-full hover:bg-gray-800 hover:text-sky-400 hover:border-sky-400 hover:border'>Send Now</button>
</div>

</div>
    </div>
  )
}
