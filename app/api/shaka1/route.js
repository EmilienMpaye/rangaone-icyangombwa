import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
 
// async function fetchIbya1() {
//    //API_HOME1_CACHEBUSTER_URL=http://localhost:3000/api/home1?cacheBuster= 
//     const cacheBuster = Date.now(); 
//     const urlWithCacheBuster = `${apishaka1}?cacheBuster=${cacheBuster}`;
   
//     const response = await fetch( urlWithCacheBuster ,{
//         'method':"GET",
        
//     });
//     const ibyangombwa1 = await response.json();
//     return ibyangombwa1;
// }


// export async function GET(req) {

//     const ibyangombwa1 = await fetchIbya1();
//     return NextResponse.json(ibyangombwa1);
// }


export async function GET() {
  const apishaka1 =process.env.API_HOME1_CACHEBUSTER_URL;
    //const cacheBuster = Date.now();
    //const urlWithCacheBuster = `${apishaka1}${cacheBuster}`;
    const response = await fetch(apishaka1, {
        cache: 'no-store' ,
      method: 'GET',
       headers: {
         'Content-Type': 'application/json',
      //          "Access-Control-Allow-Credentials": "true" ,
      //          "Access-Control-Allow-Origin": "http://localhost:3000/", // Replace with your allowed origins
      //          "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT" ,
      //         "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" ,    
       }
    });
    console.log("shaka1  route",response);
    const {todos1} = await response.json();
    console.log("rour",todos1);
  
    return NextResponse .json({
            todos1,
            revalidate:5
    });
  }
