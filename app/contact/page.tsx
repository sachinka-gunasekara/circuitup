import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <>
    <title className=''>CircuitUp - About Us</title>
    <div className=''>
        <div className='bg-slate-900 flex flex-col items-center pt-40 pb-20 sm:pt-56 h-[65vh]'>
            <div className='font-extrabold text-5xl text-center flex flex-col justify-center sm:text-7xl md:flex-row' data-aos="flip-left">
              <span className='text-slate-200 pb-5 sm:pr-8 sm:pb-0 tracking-widest'>Thank you for contacting us</span>
            </div>
        </div>

        <div className='container mx-auto flex justify-between items-center p-20 pb-10 text-justify text-[#5f5f5f]' data-aos="fade-up">
         
            <div className='flex flex-col gap-5'>
                <div className='flex gap-3'> 
                    <div className=''>
                        <Image src="/assets/tech/csharp.png" alt="reactjs" width={80} height={80} className="h-16" />
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-xl font-extrabold'>Address</div>
                        <div className='text-base'>12/4/D,</div>
                        <div className='text-base'>Allubogahawatta,</div>
                        <div className='text-base'>Panadura,</div>
                        <div className='text-base'>Sri Lanka</div>
                    </div>
                </div>

                <div className='flex gap-3'> 
                    <div className=''>
                        <Image src="/assets/tech/csharp.png" alt="reactjs" width={80} height={80} className="h-16" />
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-xl font-extrabold'>Phone Number</div>
                        <div className='text-base'>+94 77 836 8435</div>
                    </div>
                </div>

                <div className='flex gap-3'> 
                    <div className=''>
                        <Image src="/assets/tech/csharp.png" alt="reactjs" width={80} height={80} className="h-16" />
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-xl font-extrabold'>Email</div>
                        <div className='text-base'>yashodha@circuitup.lk</div>
                    </div>
                </div>
            </div>

            <div className=''>
                <span className='text-xl'>Send a message</span>
            </div>
        </div>

    </div>

    </>
  )
}

export default Contact