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
            <video
              src="/assets/video8.mp4"
              autoPlay
              loop
              muted
              preload="none"
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col absolute top-0 bottom-0 left-0 right-0 w-full h-full justify-center items-center">
            <div className="font-bold text-5xl pb-5 text-start sm:text-center sm:text-7xl" data-aos="flip-left">CircuitUp, Where Innovation Knows No Boundaries</div>
            <div className="text-xl text-start sm:text-center" data-aos="flip-down">
              <span className="font-bold">Circuit Up</span> takes the lead in software development by specializing in the seamless integration of hardware with IoT platforms.
            </div>

            <div>
                <div className='py-5 px-10 text-xl mt-5 bg-slate-800 rounded-full'>Contact Us</div>
            </div>
          </div>
          
        </div>
      </div>
      
      <ServicesSection />
    </>
  )
}
