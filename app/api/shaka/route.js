 import {NextResponse} from "next/server";
 export const dynamic = "force-dynamic";
// //API_HOME_CACHEBUSTER_URL=http://localhost:3000/api/home?cacheBuster=


// async function fetchIbya(){
    
//     const cacheBuster = Date.now(); // Generate a `http://localhost:3000/api/home?cacheBuster=${cacheBuster}` cache-busting parameter
//     //const urlWithCacheBuster = `${apisearch}${cacheBuster}`;
   

        

export async function GET() {
  const apisearch = process.env.API_HOME_CACHEBUSTER_URL;
  const cacheBuster = Date.now();
    const urlWithCacheBuster = `${apisearch}${cacheBuster}`;
    const response = await fetch(urlWithCacheBuster)
      
    const {todos} = await response.json();
    console.log("rour",todos);
    const data = NextResponse.json({todos,revalidate:5})
    data.headers.set('Access-Control-Allow-Origin', 'https://rangaone-icyangombwa.vercel.app')
    
     return data 
  }
