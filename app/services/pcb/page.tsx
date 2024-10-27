import React from 'react'
import Image from 'next/image'

const Pcb = () => {
  return (
    <>
    <title className=''>CircuitUp - PCB Designs</title>
    <div className="relative sm:h-[65vh] h-[50vh]">
        <div className="flex flex-col justify-between items-center gap-20 sm:flex-row">
          <div className="absolute inset-0 -z-10">
          <Image
                src="/assets/background.png"
                alt="Hero"
                layout="fill"
                objectFit="cover"
                priority={true}
                quality={75}    // Adjusts image quality to balance performance and clarity
              />
             <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
          </div>

          <div className='flex justify-center w-full font-extrabold text-5xl px-5 pt-40 pb-20 text-slate-200 sm:text-7xl sm:pt-56 sm:pb-36 tracking-widest'  data-aos="zoom-in">PCB Designs</div>   
          
        </div>
    </div>

    <div className=''>

        <div className='container flex py-20 flex-col lg:flex-row'>
          <div className='flex flex-col w-full lg:w-1/2'>
            <span className='text-slate-300 text-2xl font-bold'>Engineering Excellence</span>
            <span className='text-[#bcbcbc] font-light text-base pt-3'>
              With a layer capability of 1 to 8 layers, we specialize in crafting Rigid PCBs, 
              Flexible PCBs, and Aluminum PCBs to suit your unique requirements. Our expertise 
              spans across a wide range of applications, including IoT, Power Electronics, Wireless devices, 
              PDAs, High-Speed electronics, and more. Utilizing industry-leading CAD software like Altium and KiCAD, 
              our experienced team ensures precise and reliable PCB designs that propel your innovations to new heights.
            </span>
          </div>

          <div className='flex w-full lg:w-1/2 justify-evenly flex-wrap items-center gap-3 lg:gap-0 pt-5 lg:pt-0'>
            <Image src="/assets/tech/kicad.png" alt="reactjs" width={120} height={64} className=" " />
            <Image src="/assets/tech/altium.png" alt="nextjs" width={64} height={64} className=" " />
          </div>
        </div>

    </div>

      <div className="container mx-auto pt-20 pb-5">
        <h1 className='text-2xl font-semibold mb-10'>Top 3 Picks ...</h1>
        <div className="flex flex-wrap justify-center gap-8">
            {/* Card 1 */}
            <div className="flex flex-col basis-[300px] max-w-[400px] grow self-stretch hover:scale-95 duration-300">
              <div
                className="flex flex-col items-center rounded-lg border-2 border-slate-700 text-slate-950 h-full"
              >
                <div className="px-5 h-52 w-full">
                  <img
                    className="h-full w-full object-contain"
                    src="/assets/projects/proj1.png"
                    alt="project thumbnail"
                  />
                </div>
                <div className="flex flex-col justify-start p-6 pt-0">
                  <h5 className="mb-2 text-xl font-bold text-slate-300">
                    REMOTE EV BATTERY DIAGNOSTIC TOOL
                  </h5>

                  <h5 className="mb-2 text-base font-bold text-[#969696]">Key Features</h5>

                  <ul className="mb-4 text-sm list-disc list-inside text-slate-300">
                    <li>6-layer PCB design with low noise layout</li>
                    <li>Integrated LoRaWAN and WiFi modules</li>
                    <li>Battery management with power optimization</li>
                  </ul>

                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col basis-[300px] max-w-[400px] grow self-stretch hover:scale-95 duration-300">
              <div
                className="flex flex-col items-center rounded-lg border-2 border-slate-700 text-slate-950 h-full"
              >
                <div className="px-5 h-52 w-full">
                  <img
                    className="h-full w-full object-contain"
                    src="/assets/projects/proj1.png"
                    alt="project thumbnail"
                  />
                </div>
                <div className="flex flex-col justify-start p-6 pt-0">
                  <h5 className="mb-2 text-xl font-bold text-slate-300">
                    REMOTE EV BATTERY DIAGNOSTIC TOOL
                  </h5>

                  <h5 className="mb-2 text-base font-bold text-[#969696]">Key Features</h5>

                  <ul className="mb-4 text-sm list-disc list-inside text-slate-300">
                    <li>6-layer PCB design with low noise layout</li>
                    <li>Integrated LoRaWAN and WiFi modules</li>
                    <li>Battery management with power optimization</li>
                  </ul>

                </div>
              </div>
            </div>


            {/* Card 3 */}
            <div className="flex flex-col basis-[300px] max-w-[400px] grow self-stretch hover:scale-95 duration-300">
              <div
                className="flex flex-col items-center rounded-lg border-2 border-slate-700 text-slate-950 h-full"
              >
                <div className="px-5 h-52 w-full">
                  <img
                    className="h-full w-full object-contain"
                    src="/assets/projects/proj1.png"
                    alt="project thumbnail"
                  />
                </div>
                <div className="flex flex-col justify-start p-6 pt-0">
                  <h5 className="mb-2 text-xl font-bold text-slate-300">
                    REMOTE EV BATTERY DIAGNOSTIC TOOL
                  </h5>

                  <h5 className="mb-2 text-base font-bold text-[#969696]">Key Features</h5>

                  <ul className="mb-4 text-sm list-disc list-inside text-slate-300">
                    <li>6-layer PCB design with low noise layout</li>
                    <li>Integrated LoRaWAN and WiFi modules</li>
                    <li>Battery management with power optimization</li>
                  </ul>

                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Pcb