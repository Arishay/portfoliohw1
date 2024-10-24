import React from 'react'
import Image from 'next/image'
import heroimg from '../components/public/Group 2346.png'
import doodle from '../components/public/doodles mixed round.png'
import heroimg2 from '../components/public/Group 62.png'
import doodle2 from '../components/public/doodles mixed round.png'
import groplaast from '../components/public/grouplast-removebg-preview.png'

function Banner() {
  return (

    <div>

    <div className='flex justify-around'>

      <div className='pt-32'>
        <h1 className='text-white font-bold text-6xl' >Creative UI <br /> <span className='text-sky-400 font-bold text-6xl'>Designer</span></h1>
        <div className='pt-8 flex gap-3'>

<button className='bg-sky-400 text-gray-800 font-semibold px-7 py-2 rounded-full hover:bg-gray-800 hover:text-sky-400 hover:border-sky-400 hover:border'>Hire Me</button>

<button className='border-sky-400 border text-white font-semibold px-7 py-2 rounded-full hover:bg-sky-400 hover:text-gray-800'>Resume</button>

</div>
      </div>

      <div className='w-96'>
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


    <div className='bg-gray-800 min-h-screen'>
     

      <div className='flex justify-around pl-20 bg-gray-800'>
        <div className='w-1/2 pt-28 '>
        <h1 className='text-sky-400 text-3xl font-mono'>I'm Arisha <span className='text-white'>Ghaffar</span></h1>
        <p className='text-white text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quas vel laboriosam commodi tempora, molestiae tenetur dolore dolor sit quos provident ea laudantium, ipsum sequi culpa illo dicta? Iste, praesentium.</p>
        </div>
        <div className='w-1/2 bg-gray-800 h-96'>
      <Image
        src={doodle2}
        alt={"700"}
        className='w-96'
        />
        <Image
        src={heroimg2}
        alt={"700"}
        className='-mt-72 w-72'
        />
      </div>
      </div>
    </div>



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

export default Banner