import React from 'react'
import Image from 'next/image'

const Clients = () => {
  return (
    <div className='container mx-auto flex flex-col justify-between items-center pb-10'>
        <div className='font-bold text-4xl text-[#000319]'>Featured Clients</div>
        <div className='flex flex-wrap justify-center gap-8'>
        <Image
                src="/assets/waterman.png"
                alt="expertise"
                width={136}
                height={100}
                className="object-contain grayscale hover:grayscale-0"
            />
            <Image
                src="/assets/windforce.png"
                alt="expertise"
                width={110}
                height={100}
                className="object-contain grayscale hover:grayscale-0"
            />
            <Image
                src="/assets/elzian.png"
                alt="expertise"
                width={140}
                height={100}
                className="object-contain grayscale hover:grayscale-0"
            />
            <Image
                src="/assets/AWB.png"
                alt="expertise"
                width={140}
                height={100}
                className="object-contain grayscale hover:grayscale-0"
            />
            <Image
                src="/assets/gtool.png"
                alt="expertise"
                width={100}
                height={100}
                className="object-contain grayscale hover:grayscale-0"
            />
            <Image
                src="/assets/protoking.png"
                alt="expertise"
                width={100}
                height={100}
                className="object-contain grayscale hover:grayscale-0"
            />
            <Image
                src="/assets/vibra.png"
                alt="expertise"
                width={160}
                height={100}
                className="object-contain grayscale hover:grayscale-0"
            />
            <Image
                src="/assets/loutronics.png"
                alt="expertise"
                width={140}
                height={100}
                className="object-contain grayscale hover:grayscale-0"
            />
            <Image
                src="/assets/trackme.png"
                alt="expertise"
                width={140}
                height={100}
                className="object-contain grayscale hover:grayscale-0"
            />
            <Image
                src="/assets/VEEPower.png"
                alt="expertise"
                width={130}
                height={100}
                className="object-contain grayscale hover:grayscale-0"
            />
        </div>
    </div>
  )
}

export default Clients