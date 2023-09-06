// import { NextResponse } from "next/server";
// export const dynamic = "force-dynamic";
 



//       }
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
 


export async function GET( request) {
  //const origin =request.headers.get('origin');
  const apishaka1 =process.env.API_HOME1_CACHEBUSTER_URL;
    const cacheBuster = Date.now();
   const urlWithCacheBuster = `${apishaka1}${cacheBuster}`;
    const response = await fetch(urlWithCacheBuster, {
      method:"GET",
      next: {
        cache: 'no-cache',
        revalidate: 1
      }
    });
    console.log("shaka1  route",response);
    const {todos1} = await response.json();
    console.log("rour",todos1);
  
  const data = NextResponse.json({todos1,  cache: 'no-cache',})
   data.headers.set('Access-Control-Allow-Origin', 'https://rangaone-icyangombwa.vercel.app')
   
    return data 
   
  }
