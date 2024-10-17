import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/assets/logo.png';
import Linkedin from '../../public/assets/linkedin.png';
import Facebook from '../../public/assets/fb.png';
import Srilanka from '../../public/assets/srilanka.png';
import React from 'react';

export function Footer() {

  return (

    <div className=" bg-slate-900 mt-20">
        <div className='container flex flex-wrap sm:flex-row flex-col justify-between mx-auto p-10 pb-5 '>
        <div className="flex flex-col">
            <Link href="/" className="flex items-center mb-8">
            <Image src={Logo} alt="Logo" width={200} height={50} />
            </Link>
            <h3>Follow us on</h3>
            <div className='flex gap-3 mt-3'>
            <Image src={Linkedin} alt="linkedin" width={25} height={25} />
            <Image src={Facebook} alt="facebook" width={25} height={25} />
            </div>
        </div>

        <div className="flex flex-col sm:mt-0 mt-10">
            <div className='flex gap-2 sm:mb-8 mb-4'>
                <h3 className='text-xl font-bold'>Sri Lanka</h3>
                <Image src={Srilanka} alt="srilanka" width={20} height={10} />
            </div>

            <div className='flex flex-col gap-1'>
                <h5 className='text-base'>CircuitUp Technology,</h5>
                <h5 className='text-base'>12/4/D, Allubogahawatta,</h5>
                <h5 className='text-base'>Wanduramulla,</h5>
                <h5 className='text-base'>Panadura,</h5>
                <h5 className='text-base'>12500,</h5>
                <h5 className='text-base'>Sri Lanka</h5>
            </div>
        </div>

        <div className="flex flex-col sm:mt-0 mt-10">
            <div className='flex gap-2 sm:mb-8 mb-4'>
                <h3 className='text-xl font-bold'>Services</h3>
            </div>

            <div className='flex flex-col gap-1'>
                <Link href="/services/fleetManagement">
                    <h5 className='text-base cursor-pointer hover:text-blue-500'>PCB Design</h5>
                </Link>
                <Link href="/services/iot">
                    <h5 className='text-base cursor-pointer hover:text-blue-500'>Firmware Development</h5>
                </Link>
                <Link href="/services/hardware">
                    <h5 className='text-base cursor-pointer hover:text-blue-500'>Web Development</h5>
                </Link>
                <Link href="/services/telemetry">
                    <h5 className='text-base cursor-pointer hover:text-blue-500'>Desktop Application</h5>
                </Link>
                <Link href="/services/softwareDevelopment">
                    <h5 className='text-base cursor-pointer hover:text-blue-500'>Manufacturing</h5>
                </Link>
            </div>
        </div>  

        <div className="flex flex-col sm:mt-0 mt-10">
            <div className='flex gap-2 sm:mb-8 mb-4'>
                <h3 className='text-xl font-bold'>Learn more</h3>
            </div>

            <div className='flex flex-col gap-1'>
                <Link href="/">
                    <h5 className='text-base cursor-pointer hover:text-blue-500'>Home</h5>
                </Link>
                <Link href="/about">
                    <h5 className='text-base cursor-pointer hover:text-blue-500'>About Us</h5>
                </Link>
                <Link href="/portfolio">
                    <h5 className='text-base cursor-pointer hover:text-blue-500'>Portfolio</h5>
                </Link>
                <Link href="/contact">
                    <h5 className='text-base cursor-pointer hover:text-blue-500'>Contact Us</h5>
                </Link>
            </div>
        </div>    

        <div className='bg-slate-600 w-full h-[1px] mt-8'></div>
        <div className='flex w-full justify-center mt-3'>          
            <h3 className='text-slate-400 text-sm'>© 2024 All rights reserved.</h3>
        </div>
    </div>
    </div>
  );
}
