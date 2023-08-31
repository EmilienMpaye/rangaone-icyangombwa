"use client"

import { useState } from "react"
import SearchLoading from "./searchLoading";

export const dynamic = "force-dynamic"

export default function SearchIbya1({getSearchResults}) {
const [query,setQuery]=useState('');
const [isLoading, setIsLoading] = useState(false);

const handleSubmit=async(e)=>{
  e.preventDefault();
  setIsLoading(true);
//const response = await fetch(`http://localhost:3000/api/shaka1/search1?query=${query}`);${process.env.NEXT_PUBLIC_API_SHAKA1_SEARCH_URL}?query=${query}
const response = await fetch(`${process.env.NEXT_PUBLIC_API_SHAKA1_SEARCH_URL}?query=${query}`)
console.log("queryUrl",response);
const ibyangombwa1 = await response.json();
console.log("esponse",ibyangombwa1);
 getSearchResults(ibyangombwa1);
 setIsLoading(false);
}



  return (
    <div className="mt-0">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="andika izina.." className="text-black border-2 border-black rounded-full
            px-3 py-2" value={query} onChange={(e)=>setQuery(e.target.value)}/> 
        <button  type="submit" className="bg-black text-white rounded-full px-3 py-2  hover:bg-black/60">
        {isLoading ? <SearchLoading /> : "Search"}
        </button>
        </form>
        <div className="text-3xl">
          Ibyangombwa byose Byabuze wabisanga hano!
        </div>
        </div>
  )
}
