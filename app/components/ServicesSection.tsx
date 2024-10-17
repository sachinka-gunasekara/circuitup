import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <div className='container flex flex-col justify-between items-center pt-16'>
    <div className='font-extrabold text-5xl pb-10 text-slate-200' data-aos="fade-up">Why Us?</div>

    <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 w-full'>

      <div className="" data-aos="fade-right"  data-aos-delay="0">
        <div className='w-auto h-auto shadow-xl flex flex-col items-start'>
          <div className="h-28 w-28 mt-5">
            <Image
              src="/assets/fleet.png"
              alt="fleet"
              width={112}
              height={112}/>
          </div>
          <div className="items-start pb-5">
            <h2 className="text-3xl font-bold py-5">Expertise</h2>
            <div className='text-xl'>
            Though we are a startup, our team consists of skilled engineers and industry experts with a deep understanding of PCB design, hardware development, and firmware integration.
            We take pride in staying up-to-date with the latest industry trends and design practices, ensuring you receive solutions that meet current market demands.
            </div>
          </div>
        </div>
      </div>

      <div className="" data-aos="fade-right"  data-aos-delay="400">
        <div className='w-auto h-auto shadow-xl flex flex-col items-start'>
          <div className="h-28 w-28 mt-5">
            <Image
              src="/assets/iot.png"
              alt="iot"
              width={112}
              height={112} />
          </div>
          <div className="items-start pb-5">
            <h2 className="text-3xl font-bold py-5">End-to-End Solutions</h2>
            <div className='text-xl'>
            We specialize in delivering all-in-one solutions—from initial concept and design, to prototyping, testing, and final manufacturing.
            This comprehensive approach saves you the hassle of managing multiple vendors and ensures seamless project execution, with faster iterations and quicker time-to-market.
            </div>
          </div>
        </div>
      </div>

      <div className="" data-aos="fade-right"  data-aos-delay="800">
        <div className='w-auto h-auto shadow-xl flex flex-col items-start'>
          <div className="h-28 w-28 mt-5">
            <Image
              src="/assets/hardware.png"
              alt="hardware"
              width={112}
              height={112}/>
          </div>
          <div className="items-start pb-5">
            <h2 className="text-3xl font-bold py-5">Innovative Technology</h2>
            <div className='text-xl'>
            We embrace the latest technologies to create future-ready products—from IoT systems to smart hardware solutions.
            With a startup mindset, we are always ready to experiment, innovate, and pivot, ensuring our clients get creative, scalable solutions aligned with future industry needs.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ServicesSection