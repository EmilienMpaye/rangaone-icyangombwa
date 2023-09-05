"use client"
import SearchIbya from '@app/components/SearchIbya';
import ICYANGOMBWA from '@app/components/ICYANGOMBWA';
import Loadingl from '@app/components/loading';
import { useEffect, useState } from 'react';

const shakaApiUrl = process.env.NEXT_PUBLIC_API_SHAKA_URL;
//NEXT_PUBLIC_API_SHAKA_URL=http://localhost:3000/api/shaka

export const dynamic = 'force-dynamic';
const About =  () => {
 
const [icyangombwa, setIcyangombwa] =useState([]);
const [isLoading, setIsLoading] = useState(true);


  

    useEffect(() => {
      const getIbyangombwa = async () => {
       
        try {
          const response = await fetch('/api/shaka');
          console.log("shakaApiUrl",response);
          const icyangombwa = await response.json();
          setIcyangombwa(icyangombwa.todos);
          setIsLoading(false);
          console.log("todos", icyangombwa.todos); // Move the console.log here
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle the error appropriately
        }
      };
      getIbyangombwa();
    }, []);
    

  return (   
  
    <div className="flex  min-h-screen  bg-gradient-to-b from-slate-600 to-green-300  flex-col  overflow-x-auto  ">
    {/* <h1 className='font-bold text-6xl mt-14'>IBYANGOMBWA</h1> */}
    <div className="max-h-full overflow-y-auto"> 
    <div className='flex justify-center items-center mr-14  '>
    <SearchIbya getSearchResults={(results)=>setIcyangombwa(results)}/>
    </div>
     
      {isLoading ? <Loadingl/> : <ICYANGOMBWA icyangombwa={icyangombwa} />}
     
  </div>
 
  </div>
  )
}

export default About