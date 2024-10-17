import React from 'react'

const AboutUs = () => {
  return (
    <div className=''>
        <div className='font-extrabold text-5xl pt-40 pb-20 text-center bg-[#010638] flex flex-col justify-center sm:text-7xl md:flex-row sm:pt-56 sm:pb-36' data-aos="flip-left">
            <span className='text-slate-200 pb-5 sm:pr-8 sm:pb-0'>About</span>
            <span className='text-[#797fa2]'>Circuit Up</span>
        </div>
        <div className='container mx-auto flex flex-col justify-between items-center p-20 text-justify text-slate-200' data-aos="fade-up">
            <div className='text-base pb-5'>
            CircuitUp Technologies, a dynamic startup based in the vibrant landscape of Sri Lanka, established in 2019. At CircuitUp, 
            we take immense pride in offering top-notch turnkey electronic R&D services tailored to meet your specific needs. 
            Our comprehensive range of services includes cutting-edge PCB designs, innovative Schematic designs, proficient firmware development, 
            PC software development, Web Dashboard solutions, and OEM services.
            </div>

            <div className='text-base pb-5'>
            With a team of skilled professionals, CircuitUp possesses an array of PCB design capabilities, such as expertise in designing up to 8-layer boards, 
            handling high-speed designs, mastering power electronics, crafting ultra-low power devices, spearheading IoT device design, 
            excelling in wireless communication systems, and industrial applications.
            </div>

            <div className='text-base	pb-5'>
            Our dedication to excellence has earned us a diverse client base, and we have had the pleasure of collaborating 
            with esteemed customers from Australia, New Zealand, Singapore, USA, and our home country, Sri Lanka.
            </div>

            <div className='text-base	pb-5'>
            At CircuitUp, we envision success by seamlessly bringing your ideas to life through our expertise and commitment to innovation. 
            We are eager to explore possibilities and embark on transformative journeys together. We look forward to the 
            opportunity of partnering with you to achieve your electronic development goals and make a positive impact on the world.
            </div>
        </div>

        <div className='container mx-auto flex flex-col justify-between items-center pb-20 text-slate-200'>
            <div className='font-bold text-4xl pb-10'>Our Mission</div>

            <div className='flex flex-wrap justify-center items-center gap-6'>
            To revolutionize software by seamlessly integrating hardware with IoT platforms, 
            delivering innovative and customized solutions that empower our clients. 
            We are committed to excellence and shaping the future of connected experiences in Sri Lanka and beyond.
            </div>
        </div>

        <div className='flex sm:flex-row flex-col justify-around items-center bg-slate-300 mb-20 p-10'>
            <div className="card w-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 ...">
                <div className="card-body items-center text-center" data-aos="flip-right">
                    <h2 className="text-7xl text-slate-800 font-bold card-title">10+</h2>
                    <p className='text-2xl text-slate-800 font-bold'>Clients</p>
                </div>
            </div>

            <div className="card w-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 ...">
                <div className="card-body items-center text-center" data-aos="flip-right">
                    <h2 className="text-7xl text-slate-800 font-bold card-title">3+</h2>
                    <p className='text-2xl text-slate-800 font-bold'>Industries</p>
                </div>
            </div>

            <div className="card w-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 ...">
                <div className="card-body items-center text-center" data-aos="flip-right">
                    <h2 className="text-7xl text-slate-800 font-bold card-title">1000+</h2>
                    <p className='text-2xl text-slate-800 font-bold'>Users</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs