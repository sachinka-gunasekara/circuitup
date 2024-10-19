import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <>
    <title className=''>CircuitUp - Portfolio</title>
    <div className=''>
        <div className='font-extrabold text-5xl pt-40 pb-20 text-center bg-[#010638] flex flex-col justify-center sm:text-7xl md:flex-row sm:pt-56 sm:pb-36' data-aos="flip-left">
            <div className='text-slate-200 pb-5 sm:pr-8 sm:pb-0'>Portfolio</div>
        </div>

        <div className='container mx-auto pt-20 pb-5 flex flex-wrap justify-between gap-y-4'>
            <div className="flex gap-5 flex-col flex-wrap sm:flex-row">
                <div className='flex flex-1 flex-col hover:scale-90 duration-300 ...'>
                    <div className="flex flex-col items-center rounded-lg border-2 border-slate-700 text-slate-950" data-aos="fade-right">
                        <div className='px-5 h-56 w-full'>
                            <img
                                className="h-full w-full object-contain"
                                src="/assets/projects/proj1.png"
                                alt="project thumbnail" />
                        </div>
                        
                        <div className="flex flex-col justify-start p-6 pt-0">

                            <div className='flex items-center w-full pb-5'>
                                <h5 className="text-sm pr-2">Client : </h5>
                                <Image
                                    className="object-contain"
                                    src="/assets/new-zealand.png"
                                    alt="new zealand" 
                                    width={40}
                                    height={20}/>
                            </div>

                            <h5 className="mb-2 text-xl font-bold">REMOTE EV BATTERY DIAGNOSTIC TOOL</h5>
                            <p className="mb-4 text-sm line-clamp-6">
                            This project was designed as a remote EV battery health monitoring and diagnostic tool. 
                            CAN bus takes battery information and stores it in an SD card. Whenever the user requests, 
                            the logged file will be uploaded to the server using 4G.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-1 flex-col hover:scale-90 duration-300 ...'>
                    <div className="flex flex-col items-center rounded-lg border-2 border-slate-700 text-slate-950" data-aos="fade-right">
                        <div className='px-5 h-56 w-full'>
                            <img
                                className="h-full w-full object-contain"
                                src="/assets/projects/proj1.png"
                                alt="project thumbnail" />
                        </div>
                        
                        <div className="flex flex-col justify-start p-6 pt-0">

                            <div className='flex items-center w-full pb-5'>
                                <h5 className="text-sm pr-2">Client : </h5>
                                <Image
                                    className="object-contain"
                                    src="/assets/new-zealand.png"
                                    alt="new zealand" 
                                    width={40}
                                    height={20}/>
                            </div>

                            <h5 className="mb-2 text-xl font-bold">REMOTE EV BATTERY DIAGNOSTIC TOOL</h5>
                            <p className="mb-4 text-sm line-clamp-6">
                            This project was designed as a remote EV battery health monitoring and diagnostic tool. 
                            CAN bus takes battery information and stores it in an SD card. Whenever the user requests, 
                            the logged file will be uploaded to the server using 4G.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-1 flex-col hover:scale-90 duration-300 ...'>
                    <div className="flex flex-col items-center rounded-lg border-2 border-slate-700 text-slate-950" data-aos="fade-right">
                        <div className='px-5 h-56 w-full'>
                            <img
                                className="h-full w-full object-contain"
                                src="/assets/projects/proj1.png"
                                alt="project thumbnail" />
                        </div>
                        
                        <div className="flex flex-col justify-start p-6 pt-0">

                            <div className='flex items-center w-full pb-5'>
                                <h5 className="text-sm pr-2">Client : </h5>
                                <Image
                                    className="object-contain"
                                    src="/assets/new-zealand.png"
                                    alt="new zealand" 
                                    width={40}
                                    height={20}/>
                            </div>

                            <h5 className="mb-2 text-xl font-bold">REMOTE EV BATTERY DIAGNOSTIC TOOL</h5>
                            <p className="mb-4 text-sm line-clamp-6">
                            This project was designed as a remote EV battery health monitoring and diagnostic tool. 
                            CAN bus takes battery information and stores it in an SD card. Whenever the user requests, 
                            the logged file will be uploaded to the server using 4G.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-1 flex-col hover:scale-90 duration-300 ...'>
                    <div className="flex flex-col items-center rounded-lg border-2 border-slate-700 text-slate-950" data-aos="fade-right">
                        <div className='px-5 h-56 w-full'>
                            <img
                                className="h-full w-full object-contain"
                                src="/assets/projects/proj1.png"
                                alt="project thumbnail" />
                        </div>
                        
                        <div className="flex flex-col justify-start p-6 pt-0">

                            <div className='flex items-center w-full pb-5'>
                                <h5 className="text-sm pr-2">Client : </h5>
                                <Image
                                    className="object-contain"
                                    src="/assets/new-zealand.png"
                                    alt="new zealand" 
                                    width={40}
                                    height={20}/>
                            </div>

                            <h5 className="mb-2 text-xl font-bold">REMOTE EV BATTERY DIAGNOSTIC TOOL</h5>
                            <p className="mb-4 text-sm line-clamp-6">
                            This project was designed as a remote EV battery health monitoring and diagnostic tool. 
                            CAN bus takes battery information and stores it in an SD card. Whenever the user requests, 
                            the logged file will be uploaded to the server using 4G.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  </>
  )
}

export default Portfolio