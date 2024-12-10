"use client";

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/logo.png';
import Menu from '../public/assets/menu.png';
import React, { useEffect, useState } from 'react';
import './style.css';

const services = [
  { internalName: "services", displayName: "Services" },
  { internalName: "services/pcb", displayName: "PCB Design" },
  { internalName: "services/firmware", displayName: "Firmware Development" },
  { internalName: "services/webdev", displayName: "Web Development" },
  { internalName: "services/desktopapp", displayName: "Desktop Application" },
  { internalName: "services/manufacturing", displayName: "Manufacturing" },
];

const navLinks = [
  { internalName: "/", displayName: "Home" },
  { internalName: "about", displayName: "About Us" },
  services,
  { internalName: "portfolio", displayName: "Portfolio" },
  { internalName: "contact", displayName: "Contact Us" },
];

export function Navbar() {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleSubpageClick = () => {
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="lg:container flex flex-wrap items-center justify-between mx-auto p-4 lg:bg-transparent bg-slate-950">
        <Link href="/" className="flex items-center">
          {/* <Image src={Logo} alt="Logo" width={200} height={50} className='company_logo'/> */}
          <Image src={Logo} alt="Logo" width={100} height={50} className='h-12'/>
        </Link>
        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Image src={Menu} alt="Menu" width={20} height={20} />
        </button>
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } w-full lg:block lg:w-auto`}
        >
          <ul className="font-normal flex flex-col lg:flex-row lg:space-x-8 mt-4 md:mt-0">
            {navLinks.map((item, index) => {
              if (Array.isArray(item)) {
                return (
                  <li key={index} className="relative group">
                    <button
                      className="text-lg block py-3 px-3 text-slate-200 rounded md:hover:text-[#33b4f4]"
                      onClick={toggleServicesDropdown}
                    >
                      {item[0].displayName}
                      <svg
                        className="inline ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    <ul
                      className={`absolute left-0 mt-2 rounded-md shadow-lg bg-white text-[#000319] z-50 w-max ${
                        isServicesDropdownOpen ? 'block' : 'hidden'
                      } md:group-hover:block`}
                    >
                      {item.slice(1).map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="dropdown-item hover:bg-[#e9ebff]"
                        >
                          <Link
                            href={`/${subItem.internalName}`}
                            onClick={handleSubpageClick}
                            className='p-3 w-full inline-block'
                          >
                            {subItem.displayName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li key={index} className="list-none flex items-center">
                    <Link
                      href={`/${item.internalName}`}
                      className="text-lg block py-2 px-3 text-slate-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#33b4f4]"
                      onClick={handleSubpageClick}
                    >
                      {item.displayName}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
