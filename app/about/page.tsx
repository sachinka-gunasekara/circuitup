import React from 'react'
import Image from 'next/image'
import Clients from '../components/Clients'

const AboutUs = () => {
  return (
    <>
    <title className=''>CircuitUp - About Us</title>
    <div className=''>
        <div className='bg-slate-900 flex flex-col items-center pt-40 pb-20 sm:pt-56 sm:h-[65vh] h-[50vh]'>
            <div className='font-extrabold text-5xl text-center flex flex-col justify-center sm:text-7xl md:flex-row' data-aos="flip-left">
              <span className='text-slate-200 pb-5 sm:pr-8 sm:pb-0 tracking-widest'>About</span>
              <span className='text-[#797fa2] tracking-widest'>CircuitUp</span>
            </div>

            <div className='text-lg py-10'>
                Learn More About Us In Numbers
            </div>
        </div>
        <div className='container mx-auto flex flex-col justify-between items-center p-10 sm:p-20 pb-10 text-justify text-[#bcbcbc]' data-aos="fade-up">
            <div className='text-base pb-5'>
            CircuitUp Technologies, a dynamic startup based in the vibrant landscape of Sri Lanka, established in 2019. 
            At CircuitUp, we take immense pride in offering top-notch turnkey electronic R&D services tailored to meet your specific needs. 
            Our comprehensive range of services includes cutting-edge PCB designs, innovative Schematic designs, proficient firmware development, 
            PC software development, Web Dashboard solutions, and OEM services.
            </div>

            <div className='text-base pb-5'>
            With a team of skilled professionals, CircuitUp possesses an array of PCB design capabilities, such as expertise in designing up to 8-layer
             boards, handling high-speed designs, mastering power electronics, crafting ultra-low power devices, spearheading IoT device design, excelling 
             in wireless communication systems, and industrial applications.

            </div>

            <div className='text-base	pb-5'>
            Our dedication to excellence has earned us a diverse client base, and we have had the pleasure of collaborating with esteemed customers 
            from Australia, New Zealand, Singapore, USA, and our home country, Sri Lanka.
            </div>

            <div className='text-base	pb-5'>
            At CircuitUp, we envision success by seamlessly bringing your ideas to life through our expertise and commitment to innovation. 
            We are eager to explore possibilities and embark on transformative journeys together. We look forward to the opportunity of 
            partnering with you to achieve your electronic development goals and make a positive impact on the world.
            </div>
        </div>

        {/* <div className='container mx-auto flex flex-col justify-between items-center pb-10 text-[#000319]'>
            <div className='font-bold text-4xl'>Project Stats</div>

            <div className='flex flex-wrap justify-center items-center gap-6'>
            To revolutionize software by seamlessly integrating hardware with IoT platforms, 
            delivering innovative and customized solutions that empower our clients. 
            We are committed to excellence and shaping the future of connected experiences in Sri Lanka and beyond.
            </div>
        </div> */}

        <div className='flex sm:flex-row flex-col justify-around items-center mb-20 py-10 px-5 sm:gap-0 gap-16'>
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
    </div>

    <Clients />

    </>
  )
}

export default AboutUs