"use client"

// import Link from 'next/link'
// import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ServicesSection from './components/ServicesSection';

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
  });
  }, []);

  return (
    <>

      <div className="relative min-h-screen">
        <div className="flex flex-col justify-between items-center gap-20 pt-40 pb-20 sm:flex-row">
          <div className="absolute inset-0 -z-10">
            {/* <video
              src="/assets/video8.mp4"
              autoPlay
              loop
              muted
              preload="none"
              playsInline
              className="w-full h-full object-cover"
            /> */}
             <img src="/assets/background.jpg" alt="Hero" className="absolute top-0 left-0 w-full h-full object-cover"/>
             <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
          </div>
          <div className="flex flex-col absolute top-0 bottom-0 left-0 right-0 w-full h-full justify-center items-start sm:p-20 lg:pr-60 p-10">
            <div className="font-bold text-5xl pb-5 text-start lg:text-7xl" data-aos="fade-right">
              <span className='text-blue-500'>CircuitUp</span>, Where Innovation Knows No Boundaries</div>
            <div className="text-2xl leading-[2.5rem] text-start" data-aos="flip-down">
              Circuit Up takes the lead in software development by specializing in the seamless integration of hardware with IoT platforms.
            </div>

            <div data-aos="zoom-in">
                <div className='py-5 px-10 text-xl mt-10 bg-blue-500 rounded-full'>Contact Us</div>
            </div>
          </div>
          
        </div>
      </div>
      
      <ServicesSection />
    </>
  )
}
