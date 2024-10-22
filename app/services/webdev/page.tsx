import React from 'react'
import Image from 'next/image'

const Webdev = () => {
  return (
    <>
    <title className=''>CircuitUp - Web Development</title>
    <div className="relative h-[65vh]">
        <div className="flex flex-col justify-between items-center gap-20 sm:flex-row">
          <div className="absolute inset-0 -z-10">
             <img src="/assets/background.jpg" alt="Hero" className="absolute top-0 left-0 w-full h-full object-cover"/>
             <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
          </div>

          <div className='flex justify-center w-full font-extrabold text-5xl pt-40 pb-20 text-slate-200 sm:text-7xl sm:pt-56 sm:pb-36 tracking-widest'  data-aos="zoom-in">Web Development</div>   
          
        </div>
    </div>

    <div className=''>

        <div className='container flex py-20 flex-col lg:flex-row'>
          <div className='flex flex-col w-full lg:w-1/3'>
            <span className='text-[#000319] text-2xl font-bold'>Engineering Excellence</span>
            <span className='text-[#000319] text-base pt-3'>
            CircuitUp’s Web team is proficient in a range of languages, including PHP, JavaScript, and Python, 
            allowing us to adapt to your specific project requirements. Leveraging the power of popular frameworks 
            like Laravel and Node.js, we design and develop web dashboards that deliver seamless functionality and 
            exceptional performance. Our expertise extends to integrating AWS services, implementing API functionalities.
            </span>
          </div>

          <div className='flex w-full lg:w-2/3 justify-evenly flex-wrap items-center gap-3 lg:gap-0 pt-5 lg:pt-0'>
            <Image src="/assets/tech/js.png" alt="reactjs" width={80} height={80} className="h-16" />
            <Image src="/assets/tech/php.png" alt="reactjs" width={80} height={80} className="h-16" />
            <Image src="/assets/tech/python.png" alt="reactjs" width={80} height={80} className="h-16" />
            <Image src="/assets/tech/aws.png" alt="reactjs" width={80} height={80} className="h-16" />
          </div>
        </div>

    </div>
    </>
  )
}

export default Webdev