"use client"

import { FaEnvelope, FaPhone } from "react-icons/fa";
import Footer from "./footer";
import Image from "next/image";
//import Delete from "./deteteOne";

const ICYANGOMBWA = ({icyangombwa}) => {
  
 
    if (icyangombwa.length === 0) {
      // Data has been fetched, but there is no data available
      
      return <p className=" flex text-2xl  items-center justify-center text-slate-700 text-bold"> No data available </p>;
    }
  
    
  return (
    <div className='w-full flex flex-col min-h-screen'>
    {icyangombwa.length > 0 ? (
      

      <div className="marquee hover:w-full overflow-x-auto flex-grow">
      <div className="flex  flex-wrap flex-row gap-3  rounded-lg maylike " style={{ width: '100%',overflowX: 'auto', maxHeight: '100%' }}>
        {icyangombwa.map((todo) => (
          <div key={todo._id} className="flex flex-row mb-4 border-2 border-green-500 rounded-xl mr-2 w-auto flex-shrink-0  " style={{ minWidth: '404px', maxWidth: '150%', flexShrink: 1 }}>
            {todo.file && (
              <div className="flex flex-col">
                <img src={todo.file} alt="Todo Image" className="h-20 w-40 rounded-sm ml-4 mt-3" />
                <div className="flex items-center mt-4">
                  <a href={`tel:${todo.telephone}`} className="flex items-center"><p className="font-bold text-red-400 ml-2">HAMAGARA</p>
                    <FaPhone className="ml-2 text-green-900" />
                  </a>
                  <a href={`sms:${todo.telephone}`} className="flex items-center ml-2"><p>SMS:</p>
                    <FaEnvelope className="mr-2 text-white" />
                  </a>
                </div>
              </div>
            )}
            <div className="flex flex-col  flex-1 pr-1 overflow-hidden">
              {/* <div className="flex items-end justify-end mt-1 ">
              
                    <Delete todo={todo} /> 
            
              </div> */}
              <div style={{ overflow: 'hidden' }}>
                <h3 className='text-black  font-semibold '>Izina:{todo.title}</h3>
                <p className='text-black font-semibold '>Ubwoko:{todo.izina}</p>
                <p className='text-black  font-semibold '>Nimero:{todo.nimero}</p>
                <p className='text-black  font-semibold '>Cyatangiwe:{todo.akarere}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    

    ) : (
      
    <p className="text-bold text-white"> 
      IBYO USHATSE NTIBISHOBOYE KUBONEKA !
      </p>
      
    )}
 <div className='w-full  footer-container'>
        <Footer/> 
        </div> 
  </div>

);

};

export default ICYANGOMBWA