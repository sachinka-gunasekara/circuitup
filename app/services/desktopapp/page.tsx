import React from 'react'
import Image from 'next/image'

const Desktop = () => {
  return (
    <>
    <title className=''>CircuitUp - Desktop Application</title>
    <div className="relative sm:h-[65vh] h-[50vh]">
        <div className="flex flex-col justify-between items-center gap-20 sm:flex-row">
          <div className="absolute inset-0 -z-10">
             <img src="/assets/background.jpg" alt="Hero" className="absolute top-0 left-0 w-full h-full object-cover"/>
             <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
          </div>

          <div className='flex justify-center w-full font-extrabold text-5xl pt-40 pb-20 text-slate-200 sm:text-7xl sm:pt-56 sm:pb-36 tracking-widest'  data-aos="zoom-in">Desktop Application</div>   
          
        </div>
    </div>

    <div className=''>

        <div className='container flex py-20 flex-col lg:flex-row'>
          <div className='flex flex-col w-full lg:w-1/3'>
            <span className='text-[#000319] text-2xl font-bold'>Engineering Excellence</span>
            <span className='text-[#000319] text-base pt-3'>
            We are also specializes in creating user-friendly applications that support Windows OS. 
            Leveraging the power of C#, we design versatile configurator software for your electronic 
            devices, providing seamless control and customization options. Additionally, we excel in 
            developing tailored desktop applications to meet specific client use cases, ensuring your 
            unique requirements are met with precision. Whether it&apos;s streamlining processes, enhancing user experiences, or driving productivity.
            </span>
          </div>

          <div className='flex w-full lg:w-2/3 justify-evenly flex-wrap items-center gap-3 lg:gap-0 pt-5 lg:pt-0'>
            <Image src="/assets/tech/csharp.png" alt="reactjs" width={80} height={80} className="h-16" />
          </div>
        </div>

    </div>
    </>
  )
}

export default Desktop