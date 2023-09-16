"use client"
import { useState } from "react";
import SearchLoading from "../components/searchLoading";

export const dynamic = 'force-dynamic';

export default  function SearchIbya({getSearchResults}) {
const [query, setQuery] = useState('');
const [isLoading, SetIsLoading] = useState(false);


const handleSubmit =async(e)=>{
    e.preventDefault();
    SetIsLoading(true);
    
    
      const response = await fetch(`/api/shaka/search?query=${query}`);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status} `);
        }
      const icyangombwa = await response.json();
    
      getSearchResults(icyangombwa);
  
SetIsLoading(false);
};
  return (
    <div className="mt-0">
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="andika izina..." className="text-black border-2 border-black rounded-full
            px-3 py-2" value={query} onChange={(e)=>setQuery(e.target.value)}/> 
        <button  type="submit" className="bg-black text-white rounded-full px-3 py-2 hover:bg-black/60">
        {isLoading ? <SearchLoading /> : "Search"}
        </button>
        </form>
        <div className="text-3xl">
           Abaranga Ibyangombwa byabo wabasanga  hano 
        </div>
        </div>
  )
}
