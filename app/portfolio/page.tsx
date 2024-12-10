"use client"

import React, { useEffect } from 'react';

const projects = [
  // {
  //   id: 1,
  //   country: "For NZ",
  //   title: "REMOTE EV BATTERY DIAGNOSTIC TOOL",
  //   description: `This project was designed as a remote EV battery health 
  //     monitoring and diagnostic tool. CAN bus takes battery information and stores 
  //     it in an SD card. Whenever the user requests, the logged file will be uploaded 
  //     to the server using 4G.`,
  //   image: "/assets/projects/proj1.png",
  // },
  // {
  //   id: 2,
  //   country: "For AUS",
  //   title: "REMOTE EV DIAGNOSTIC TOOL",
  //   description: `Similar scope as remote EV battery diagnostic tool. 
  //     This was created to Monitor a truck's health using the 4 x CAN bus.`,
  //   image: "/assets/projects/proj2.png",
  // },
  // {
  //   id: 3,
  //   country: "For USA",
  //   title: "INDUSTRIAL IRRIGATION CONTROLLER",
  //   description: `Designed to control multiple irrigation gates based on time schedule. 
  //     The device contains TFT LCD and MPPT solar charger controller. Also, support control over WiFi.`,
  //   image: "/assets/projects/proj3.png",
  // },
  // {
  //   id: 4,
  //   country: "For NZ",
  //   title: "ETHERNET SENSOR CONTROLLER",
  //   description: `Designed to control specific sensors over the Ethernet. 
  //     Also, multiple DC/DC convertors and power switches included.`,
  //   image: "/assets/projects/proj4.png",
  // },
  // {
  //   id: 5,
  //   country: "For AUS",
  //   title: "ULP-NBIOT GPS TRACKER",
  //   description: `A specific type of GPS tracker. 
  //     Designed to perform ultra low power consumption and transmit data over NBIOT`,
  //   image: "/assets/projects/proj5.png",
  // },
  // {
  //   id: 6,
  //   country: "For USA",
  //   title: "LORA IRRIGATION SYSTEM",
  //   description: `Another irrigation project based on LoRa Communication`,
  //   image: "/assets/projects/proj6.png",
  // },
  // {
  //   id: 7,
  //   country: "",
  //   title: "LoRa WAN Environmental Monitoring",
  //   description: `Designed to monitoring multiple environmental parameters over the LoRa WAN network and consider low power operation.`,
  //   image: "/assets/projects/proj7.png",
  // },
  // {
  //   id: 8,
  //   country: " ",
  //   title: "Aluminum PCB Design",
  //   description: `A single layer Aluminum PCB design to drive a specific LED. 
  //     The PCB contains a LED driver and USB battery charger controller.`,
  //   image: "/assets/projects/proj8.png",
  // },
  // {
  //   id: 9,
  //   country: " ",
  //   title: "Flexible PCB Design",
  //   description: `A dual layer flexible PCB designed for a wearable device. Device consists of BLE chip and a PCB antenna.`,
  //   image: "/assets/projects/proj9.png",
  // },
  // {
  //   id: 10,
  //   country: " ",
  //   title: " Injector Testing Tool",
  //   description: `An industrial controller designed for actuate severa solenoids valves with motor controller.`,
  //   image: "/assets/projects/proj10.png",
  // },
  // {
  //   id: 11,
  //   country: " ",
  //   title: "Motor Controlling With RF Remote",
  //   description: ` A electronic door controller design with RF remote capability. 
  //      Also added, flexible power option lole AC, DC and Battery.`,
  //   image: "/assets/projects/proj11.png",
  // },
  {
    id: 1,
    country: " ",
    title: "University RnD Project For Health Monitoring",
    description: `A tiny size hear rate sensor integrated PCB for a university research project. 
       Dual heart rate sensor and BLE technology were used.`,
    image: "/assets/projects/proj12.png",
  },
  {
    id: 2,
    country: " ",
    title: "University RnD Project For Health Monitoring",
    description: `A tiny size hear rate sensor integrated PCB for a university research project. 
       Dual heart rate sensor and BLE technology were used.`,
    image: "/assets/projects/proj12.png",
  },
  {
    id: 3,
    country: " ",
    title: "University RnD Project For Health Monitoring",
    description: `A tiny size hear rate sensor integrated PCB for a university research project. 
       Dual heart rate sensor and BLE technology were used.`,
    image: "/assets/projects/proj12.png",
  },
  {
    id: 4,
    country: " ",
    title: "University RnD Project For Health Monitoring",
    description: `A tiny size hear rate sensor integrated PCB for a university research project. 
       Dual heart rate sensor and BLE technology were used.`,
    image: "/assets/projects/proj12.png",
  },
  {
    id: 5,
    country: " ",
    title: "University RnD Project For Health Monitoring",
    description: `A tiny size hear rate sensor integrated PCB for a university research project. 
       Dual heart rate sensor and BLE technology were used.`,
    image: "/assets/projects/proj12.png",
  },
  {
    id: 6,
    country: " ",
    title: "University RnD Project For Health Monitoring",
    description: `A tiny size hear rate sensor integrated PCB for a university research project. 
       Dual heart rate sensor and BLE technology were used.`,
    image: "/assets/projects/proj12.png",
  },
];

const Portfolio = () => {
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <>
      <title>ConnectSphere - Portfolio</title>
      <div className="min-h-screen">
        {/* Header Section */}
        <div className="text-center bg-slate-900 sm:h-[65vh] h-[50vh]">
          <div
            className="font-extrabold text-5xl pt-40 pb-20 text-slate-200 sm:text-7xl sm:pt-56 sm:pb-36 tracking-widest"
            data-aos="flip-left"
          >
            Portfolio
          </div>
        </div>

        {/* Portfolio Cards Section */}
        <div className="container mx-auto pt-20 pb-5">
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col basis-[300px] max-w-[400px] grow self-stretch hover:scale-95 duration-300"
              >
                <div
                  className="flex flex-col items-center rounded-lg border-2 border-slate-700 text-slate-300 h-full"
                  data-aos="fade-right"
                >
                  <div className="px-5 h-52 w-full">
                    <img
                      className="h-full w-full object-contain"
                      src={project.image}
                      alt="project thumbnail"
                    />
                  </div>
                  <div className="flex flex-col justify-start p-6 pt-0">
                    <div className="flex items-center w-full pb-1">
                      <h5 className="text-sm pr-2 font-bold text-[#969696]">
                        {project.country}
                      </h5>
                    </div>
                    <h5 className="mb-2 text-xl font-bold">{project.title}</h5>
                    <p className="mb-4 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
