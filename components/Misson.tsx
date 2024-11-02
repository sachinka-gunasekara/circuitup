import React from 'react'
// import Image from 'next/image'

const Mission = () => {
  return (
    <div className='container flex flex-col justify-between items-center p-8 pt-16'>
        <div className='font-extrabold text-5xl pb-3 text-slate-200' data-aos="fade-up">Our Mission</div>

        <div className='flex flex-col'>
        <h2 className="sm:text-3xl text-2xl font-light text-[#33b4f4] mt-4 text-center">
            We are committed to providing our clients the best strategic guidance available
        </h2>

        <div className="flex lg:flex-row flex-col justify-center items-center mt-10 gap-5">
            <div className="w-72 h-72 max-w-md flex-1 rounded-full">
                {/* <Image
                src="/assets/goal.jpg"
                alt="goal"
                className="w-full h-full object-cover"
                width={50}
                height={50}
                /> */}
                <img src='/assets/goal.jpg' className='w-full h-full object-cover rounded-full'></img>
            </div>

            <div className="flex-1 text-[#bcbcbc] text-base leading-[2rem]">
                CircuitUp Technologies, a dynamic startup based in the vibrant landscape of Sri Lanka, was established in 2019. 
                At CircuitUp, we take immense pride in offering top-notch turnkey electronic R&D services tailored to meet your specific needs. 
                Our comprehensive range of services includes cutting-edge PCB designs, innovative Schematic designs, proficient firmware development, 
                PC software development, Web Dashboard solutions, and OEM services.
            </div>
        </div>

        
        </div>
  </div>
  )
}

export default Mission