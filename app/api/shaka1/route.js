// import { NextResponse } from "next/server";
// export const dynamic = "force-dynamic";
 



// export async function GET(request) {
//   const origin =request.headers.get('origin');
//   console.log("origin",origin);
//   const apishaka1 =process.env.API_HOME1_CACHEBUSTER_URL;
//     //const cacheBuster = Date.now();//API_HOME1_CACHEBUSTER_URL=https://rangaone-icyangombwa.vercel.app/api/home1?cacheBuster=
//     //const urlWithCacheBuster = `${apishaka1}${cacheBuster}`;
//     console.log("shaka1  api",apishaka1);
//     const response = await fetch(apishaka1, {
//         cache: 'no-store' ,
      
//       method: 'GET',
//       headers: {
//       //   'Content-Type': 'application/json',
//       //          "Access-Control-Allow-Credentials": "true" ,
//                "Access-Control-Allow-Origin": origin|| "*", // Replace with your allowed origins
//       //          "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT" ,
              
//         }
//     });
//     console.log("shaka1  route",response);
//     const {todos1} = await response.json();
//     console.log("rour",todos1);
  
    
//       return NextResponse .json({
//         todos1,
//         revalidate:5
// }
//         ,{
//           headers: {
//             'Access-Control-Allow-Origin': origin || "*",
//             'Content-Type': 'application/json'
//           }
//         }
//       );
//       }
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
 


export async function GET( request) {
  const origin =request.headers.get('origin');
  const apishaka1 =process.env.API_HOME1_CACHEBUSTER_URL;
    const cacheBuster = Date.now();
    const urlWithCacheBuster = `${apishaka1}${cacheBuster}`;
    const response = await fetch(urlWithCacheBuster, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "https://rangaone-icyangombwa.vercel.app",
      }
    });
    console.log("shaka1  route",response);
    const {todos1} = await response.json();
    console.log("rour",todos1);
  
    return NextResponse .json({
            todos1,
            revalidate:5
    },
    {
      headers:{
          'Content-Type': 'application/json',
           "Access-Control-Allow-Credentials": "true",
           "Access-Control-Allow-Origin":  "https://rangaone-icyangombwa.vercel.app",   
      }
  });
  }
