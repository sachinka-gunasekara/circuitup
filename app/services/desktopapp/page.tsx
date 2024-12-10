"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'

const Desktop = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  

  return (
    <>
    <title className=''>ConnectSphere - Desktop Application</title>
    <div className="relative sm:h-[65vh] h-[50vh]">
        <div className="flex flex-col justify-between items-center gap-20 sm:flex-row">
          <div className="absolute inset-0 -z-10">
              <Image
                src="/assets/background.png"
                alt="Hero"
                layout="fill"
                objectFit="cover"
                priority={true}
                quality={75}    // Adjusts image quality to balance performance and clarity
              />
             <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
          </div>

          <div 
              className='flex justify-center text-center w-full font-extrabold text-5xl px-5 pt-40 pb-20 text-slate-200 sm:text-7xl sm:pt-56 sm:pb-36 tracking-widest'  
              data-aos="zoom-in"
          >
            Desktop Application</div>   
          
        </div>
    </div>

    <div className=''>

        <div className='container flex py-20 flex-col lg:flex-row'>
          <div className='flex flex-col w-full lg:w-1/2'>
            <span className='text-slate-300 text-2xl font-bold'>Engineering Excellence</span>
            <span className='text-[#bcbcbc] font-light text-base pt-3'>
            We are also specializes in creating user-friendly applications that support Windows OS. 
            Leveraging the power of C#, we design versatile configurator software for your electronic 
            devices, providing seamless control and customization options. Additionally, we excel in 
            developing tailored desktop applications to meet specific client use cases, ensuring your 
            unique requirements are met with precision. Whether it&apos;s streamlining processes, enhancing user experiences, or driving productivity.
            </span>
          </div>

          <div className='flex w-full lg:w-1/2 justify-evenly flex-wrap items-center gap-3 lg:gap-0 pt-5 lg:pt-0'>
            <Image src="/assets/tech/csharp.png" alt="reactjs" width={80} height={80} className="" />
          </div>
        </div>

    </div>
    </>
  )
}

export default Desktop