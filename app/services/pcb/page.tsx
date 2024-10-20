import React from 'react'
import Image from 'next/image'

const Pcb = () => {
  return (
    <>
    <title className=''>CircuitUp - PCB Designs</title>
    <div className="relative h-[65vh]">
        <div className="flex flex-col justify-between items-center gap-20 sm:flex-row">
          <div className="absolute inset-0 -z-10">
             <img src="/assets/background.jpg" alt="Hero" className="absolute top-0 left-0 w-full h-full object-cover"/>
             <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
          </div>

          <div className='flex justify-center w-full font-extrabold text-5xl pt-40 pb-20 text-slate-200 sm:text-7xl sm:pt-56 sm:pb-36 tracking-widest'  data-aos="flip-left">PCB Designs</div>   
          
        </div>
    </div>

    <div className=''>

        <div className='container flex py-20 flex-col lg:flex-row'>
          <div className='flex flex-col w-full lg:w-1/3'>
            <span className='text-[#000319] text-2xl font-bold'>Tech Stack</span>
            <span className='text-[#000319] text-base pt-3'>
              With a layer capability of 1 to 8 layers, we specialize in crafting Rigid PCBs, 
              Flexible PCBs, and Aluminum PCBs to suit your unique requirements. Our expertise 
              spans across a wide range of applications, including IoT, Power Electronics, Wireless devices, 
              PDAs, High-Speed electronics, and more. Utilizing industry-leading CAD software like Altium and KiCAD, 
              our experienced team ensures precise and reliable PCB designs that propel your innovations to new heights.
            </span>
          </div>

          <div className='flex w-full lg:w-2/3 justify-around flex-wrap items-center gap-3 lg:gap-0 pt-5 lg:pt-0'>
            <Image src="/assets/logo.png" alt="reactjs" width={64} height={64} className="h-16" />
            <Image src="/assets/logo.png" alt="nextjs" width={64} height={64} className="h-16" />
            <Image src="/assets/logo.png" alt="flutter" width={64} height={64} className="h-16" />
            <Image src="/assets/logo.png" alt="aws" width={64} height={64} className="h-16" />
            <Image src="/assets/logo.png" alt="socket" width={64} height={64} className="h-16" />
          </div>
        </div>

    </div>
    </>
  )
}

export default Pcb