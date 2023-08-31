"use client"
import Link from "next/link"
import { useState } from "react";
import { navLinks } from "@app/constants/constant";
import close from "@public/images/close.svg";
import  menu from '@/public/images/menu.svg';
import emia from '@/public/images/emia.jpg'
import Image from 'next/image';



const Header = () => {
  const [toggle ,setToogle]=useState(false);

  return (
    
    <header className="w-full   bg-slate-600  ">
  
      <nav className="w-full  flex  justify-between items-center  bg-gradient-to-b from-slate-600 to-orange-10" >
      
      <Image width={30}
       src={emia} alt='hoobank' className='w-[32px] h-[32px] ml-7 border-2 border-black mt-1 rounded-full '/>
       <span className='pt-2 font-bold text-lg  '>
        <span className="text-bold text-yellow-600 text-2xl">RA</span>
        <span className="text-bold text-green-700">N</span>
        <span className="text-bold text-blue-700 text-2xl">GA</span> </span>
     
     <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
      
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-bold cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-3' : 'mr-10'
            } text-gray-500 acq`}
          >
            <Link href={nav.href} passHref>
              <span>{nav.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* small device */}
      <div className='sm:hidden flex-1 flex justify-end items-center '>
        <Image
          src={toggle ? close : menu}
          alt='menu'
          className='w-[30px] h-[30px]  object-contain'
          onClick={() => setToogle((prev) => !prev)}
        />
    
        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6  absolute top-20 
         right-0 mx-4 my-2 min-w-[140] bg-black-gradient rounded-xl sidebar`}
        >
         <ul className='list-none flex flex-col justify-end items-center flex-1 '>
          {navLinks.map((nav,index)=>(
            <li key={nav.id}
              className={`font-poppins font-normal cursor-pointer
              text-[16px] ${index===navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white acq `}
            >
              <Link href={nav.href} passHref>
              <span>{nav.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

      </nav>

    </header>
  
  );
};

export default Header