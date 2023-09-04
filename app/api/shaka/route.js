 import {NextResponse} from "next/server";
 export const dynamic = "force-dynamic";
// //API_HOME_CACHEBUSTER_URL=http://localhost:3000/api/home?cacheBuster=


// async function fetchIbya(){
    
//     const cacheBuster = Date.now(); // Generate a `http://localhost:3000/api/home?cacheBuster=${cacheBuster}` cache-busting parameter
//     //const urlWithCacheBuster = `${apisearch}${cacheBuster}`;
   
//     const response = await fetch( `http://localhost:3000/api/home?cacheBuster=${cacheBuster}`,{
//         'method':"GET",
//         headers: {
//             'Content-Type': 'application/json'
//           },
        

export async function GET() {
  const apisearch = process.env.API_HOME_CACHEBUSTER_URL;
    //const cacheBuster = Date.now();
    //const urlWithCacheBuster = `${apisearch}${cacheBuster}`;
    const response = await fetch(apisearch, {
      cache: 'no-store' ,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const {todos} = await response.json();
    console.log("rour",todos);
  
    return NextResponse .json({
            todos,
            revalidate:5
    });
  }
