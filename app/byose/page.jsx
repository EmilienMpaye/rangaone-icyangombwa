"use client"

import { useEffect, useState } from "react";
import Icyangombwa1 from "@app/components/Icyangombwa1";
import SearchIbya1 from "@app/components/searchIbya1";
import Loadingl from "@app/components/loading";

const shaka1ApiUrl = process.env.NEXT_PUBLIC_API_SHAKA1_URL ;
//NEXT_PUBLIC_API_SHAKA1_URL=http://localhost:3000/api/shaka1

export const dynamic="force-dynamic";
const Popup =  () => {
 const [icyangombwa1, setIcyangombwa1] = useState([]);
 const [isLoading , SetIsLoading] = useState(true);


useEffect(() => {
  const getIbyangombwa = async () => {
    try {
      
      const response = await fetch('/api/shaka1?cacheBuster=${Date.now()}');   
      console.log("icyangombwa1",response)
      const icyangombwa1 = await response.json();
      
      setIcyangombwa1(icyangombwa1.todos1);
      SetIsLoading(false);
      console.log("todos", icyangombwa1.todos1); // Move the console.log here
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error appropriately
    }
  };
  getIbyangombwa();
}, []);

useEffect(() => {
  console.log("todos after update", icyangombwa1); // This will log the updated todos
}, [icyangombwa1]);



  return (

      

      <div className="flex  min-h-screen   bg-gradient-to-b from-slate-600 to-green-300   flex-col  overflow-x-auto">
   
  
    <div className='flex justify-center items-center '>
    <SearchIbya1 getSearchResults={(results)=>setIcyangombwa1(results)}/>
   
  
    </div>
    
    {isLoading ? <Loadingl/> : <Icyangombwa1 icyangombwa1={icyangombwa1} />}
       
  </div>
         
  );
}

export default Popup;
