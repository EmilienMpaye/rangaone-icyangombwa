"use client"

import { FaEnvelope, FaPhone } from 'react-icons/fa';

import Footer from './footer';

export default function Icyangombwa1({icyangombwa1}) {

    if (icyangombwa1.length === 0) {
      
        
        return <p className=" flex text-2xl  items-center justify-center text-slate-700 text-bold">No data available</p>;
      }
  return (
    < div className=' w-full flex flex-col min-h-screen'>
    {icyangombwa1.length > 0 ? (
     
      <div className="marquee  hover:w-full overflow-x-auto flex-grow" >
      <div className="flex flex-wrap flex-row gap-2  p-4 rounded-lg max-h-100 maylike1  " style={{ width: '100%',overflowX: 'auto', maxHeight: '100%' }}>
        {icyangombwa1.map((todo) => (
          <div
            key={todo._id}
            className="flex flex-row mb-4 border-2 border-black-500 rounded-xl mr-2 w-full sm:w-auto flex-shrink-0"
            style={{ minWidth: '400px', maxWidth: '100%', flexShrink: 1 }}>
            {/* Remove the image rendering */}
            <div className="flex flex-col flex-1 ml-3 pr-4 overflow-hidden overflow-ellipsis">
              {/* <div className="flex items-end justify-end mt-1">
                <Delete todo={todo} /> 
              </div> */} 
              <h3 className='text-black font-serif text-xl'>Izina:{todo.title} </h3>
              <p className='text-black font-serif font-semibold '>Ubwoko:{todo.izina}</p>
              <p className='text-black font-semibold '>Nimero:{todo.nimero}</p>
              <p className='text-black font-serif font-semibold '>Akarere:{todo.akarere}</p>
              <p className='text-black font-serif font-semibold '>Uranga:{todo.yourname}</p>
              <div style={{ position: 'relative' }}>
      <p className=" text-black font-serif font-bold ">{todo.comment}</p>
              </div>
              {/* <p>Uranga:{todo.telephone}</p> */}
              <div className="flex items-center">
                <a href={`tel:${todo.telephone}`} className="flex items-center">
                  <p className='text-red-300 font-bold'>HAMAGARA</p>
                  <FaPhone className=" ml-2 text-green-900" />
                </a>
                <a href={`sms:${todo.telephone}`} className="flex items-center ml-2">
                <p className='text-white font-bold'>SMS:</p>
                  <FaEnvelope className=" text-white" />
                  
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    ) : (
      
    <p className="flex text-2xl justify-center items-center text-slate-700 text-bold"> 
      IBYO USHATSE NTIBISHOBOYE KUBONEKA !
      </p>
      
    )}
 
 <div className='w-full footer '>
        <Footer/> 
        </div> 
  </div>

);
};
