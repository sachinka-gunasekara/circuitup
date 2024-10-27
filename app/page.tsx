"use client"

// import Link from 'next/link'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ServicesSection from './components/ServicesSection';
import HeroServices from './components/HeroServices';
import Link from 'next/link';
// import Misson from './components/Misson';

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
             <Image
                src="/assets/background.png"
                alt="Hero"
                layout="fill"
                objectFit="cover"
                priority={true}
                quality={75}    // Adjusts image quality to balance performance and clarity
              />
             {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div> */}
             <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="container flex flex-col absolute top-0 bottom-0 left-0 right-0 w-full h-full justify-center items-center sm:pt-0 sm:mt-20 sm:p-20 p-10">
            <div className="font-bold text-5xl pb-5 text-center lg:text-8xl" data-aos="fade-right">
              <span className='text-[#33b4f4]'>CircuitUp</span>, Where Innovation Knows No Boundaries</div>
            <div className="text-xl leading-[2.5rem] text-center font-light" data-aos="flip-down">
              Circuit Up takes the lead in software development by specializing in the seamless integration of hardware with IoT platforms.
            </div>

            <div data-aos="zoom-in">
              <Link href="/contact">
                <div className="relative flex items-center justify-center mt-10">
                  <button className="py-4 px-9 text-base bg-[#33b4f4] rounded-full text-white font-bold shadow-lg animate-glow">
                    Contact Us
                  </button>
                </div>
              </Link>
            </div>


          </div>
          
        </div>
      </div>
      
      <HeroServices />
      {/* <Misson /> */}
      <ServicesSection />

      <div className='flex sm:flex-row flex-col justify-around items-center bg-slate-900 my-14 py-10 px-5 sm:gap-0 gap-16'>
            <div className="card w-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 ...">
                <div className="card-body items-center text-center" data-aos="flip-right">
                    <h2 className="text-7xl text-slate-300 font-bold card-title">100+</h2>
                    <p className='text-2xl text-slate-300 font-bold'>Projects Completed</p>
                </div>
            </div>

            <div className="card w-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 ...">
                <div className="card-body items-center text-center" data-aos="flip-right">
                    <h2 className="text-7xl text-slate-300 font-bold card-title">50+</h2>
                    <p className='text-2xl text-slate-300 font-bold'>Customers</p>
                </div>
            </div>

            <div className="card w-64">
            <div className="card-body items-center text-center" data-aos="flip-right">
              <div className="flex gap-2 h-[72px]">
                {[
                  { src: "/assets/new-zealand.png", alt: "New Zealand" },
                  { src: "/assets/australia.png", alt: "Australia" },
                  { src: "/assets/singapore.png", alt: "Singapore" },
                  { src: "/assets/united-states.png", alt: "United States" },
                ].map((flag, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={flag.src}
                      alt={flag.alt}
                      width={60}
                      height={40}
                      className="object-contain"
                    />
                    {/* Tooltip */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden group-hover:flex px-2 py-1 text-xs bg-gray-800 text-white rounded-md shadow-lg whitespace-nowrap">
                      {flag.alt}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-2xl text-slate-300 font-bold">Overseas Projects</p>
            </div>

            </div>
        </div>
     
    </>
  )
}
