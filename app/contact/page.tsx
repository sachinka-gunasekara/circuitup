import React from 'react'
import Image from 'next/image'
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
    <title className=''>CircuitUp - About Us</title>
    <div className=''>
        <div className='bg-slate-900 flex flex-col items-center pt-40 sm:pb-20 px-10 sm:pt-56 sm:h-[65vh] h-[50vh]'>
            <div className='font-extrabold text-5xl text-center flex flex-col justify-center sm:text-7xl md:flex-row' data-aos="flip-left">
              <span className='text-slate-200 pb-5 sm:pr-8 sm:pb-0 tracking-widest'>Thank you for contacting us</span>
            </div>
        </div>

        <div className='lg:container mx-auto flex lg:flex-row flex-col lg:justify-between gap-5 sm:items-center sm:p-16 p-5 pb-10 text-justify text-[#5f5f5f]' data-aos="fade-up">

            <div className='flex flex-col flex-1 gap-5'>

                <div className='font-extrabold text-3xl text-start flex flex-col justify-center sm:text-6xl md:flex-row' data-aos="flip-left">
                    <span className='text-slate-900 pb-5 sm:pr-8 sm:pb-0'>Get in touch today</span>
                </div>

                <div className='flex items-center gap-6 min-h-[100px] bg-[#f8f8f8] p-4 rounded-md'> 
                    <div className='bg-slate-900 p-3 rounded-full h-fit'>
                        <Image src="/assets/home.png" alt="reactjs" width={25} height={25} />
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-lg font-extrabold'>Location</div>
                        <div className='text-sm'>12/4/D, Allubogahawatta, Panadura,</div>
                        <div className='text-sm'>Sri Lanka</div>
                    </div>
                </div>

                <div className='flex items-center gap-6 min-h-[100px] bg-[#f8f8f8] p-4 rounded-md'> 
                    <div className='bg-slate-900 p-3 rounded-full h-fit'>
                        <Image src="/assets/phone.png" alt="reactjs" width={25} height={25} />
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-lg font-extrabold'>Phone Number</div>
                        <div className='text-sm'>+94 77 836 8435</div>
                    </div>
                </div>

                <div className='flex items-center gap-6 min-h-[100px] bg-[#f8f8f8] p-4 rounded-md'> 
                    <div className='bg-slate-900 p-3 rounded-full h-fit'>
                        <Image src="/assets/email.png" alt="reactjs" width={25} height={25} />
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-lg font-extrabold'>Email</div>
                        <div className='text-sm'>yashodha@circuitup.lk</div>
                    </div>
                </div>

            </div>

            <div className='flex-1'>
                <ContactForm />
            </div>
        </div>

    </div>

    </>
  )
}

export default Contact