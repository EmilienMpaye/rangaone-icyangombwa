
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
const apishaka1 =process.env.API_HOME1_CACHEBUSTER_URL;
export async function GET(request) {
    const origin =request.headers.get('origin');
    try {
        const cacheBuster = Date.now();
         const urlWithCacheBuster = `${apishaka1}${cacheBuster}`;
    
        const response = await fetch(urlWithCacheBuster ,{
            cache: 'no-store' ,
            method:"GET",
            headers:{
                'Content-Type': 'application/json',
                
            }
        })

    
        console.log("shaka1 search1 route",response);
        const ibyangombwa1 = await response.json();

        const { searchParams } = new URL(request.url);
        const query = searchParams.get('query');

        const filteredIbyangombwa1 = ibyangombwa1.todos1.filter((todo) => {
            return todo.title.toLowerCase().includes(query.toLowerCase()) || todo.izina.toLowerCase().includes(query.toLowerCase());
        });
  console.log("filteredtodo1",filteredIbyangombwa1);
        return NextResponse.json(
            filteredIbyangombwa1 ,{
                headers:{
                    'Content-Type': 'application/json',
                     "Access-Control-Allow-Credentials": "true",
                     "Access-Control-Allow-Origin": origin || "*",   
                }
            }
        );
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.error("An error occurred while fetching data.", 500);
    }
}




// export async function GET(request) {
//    // const origin =request.headers.get('origin');
//     //console.log("origin",origin);
//     try {
//         const cacheBuster = Date.now();
//          const urlWithCacheBuster = `${apishaka1}${cacheBuster}`;
    
//         const response = await fetch(urlWithCacheBuster , {
     
//       method: 'GET',
//       headers: {
//       //  'Content-Type': 'application/json',
//     //     "Access-Control-Allow-Credentials": "true",
//          // "Access-Control-Allow-Origin": origin || "*", // Replace with your allowed origins
//     //     "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
//     //     "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
//               }
    
//         });
        
//         const ibyangombwa1 = await response.json();
//         console.log("shaka1 search1 route",ibyangombwa1);
//         const { searchParams } = new URL(request.url);
//         const query = searchParams.get('query');

//         const {filteredIbyangombwa1} = ibyangombwa1.todos1.filter((todo) => {
//             return todo.title.toLowerCase().includes(query.toLowerCase()) || todo.izina.toLowerCase().includes(query.toLowerCase());
//         });
//         console.log("filteredtodo1",filteredIbyangombwa1);

//         //const responseJSON = JSON.stringify(filteredIbyangombwa1);

//         return new NextResponse.json(filteredIbyangombwa1)
//         //     , {
//         //     headers: {
//         //         'Content-Type': 'application/json',
//         //         "Access-Control-Allow-Origin": origin || "*"
//         //     },
//         // });
//        // return NextResponse.json( filteredIbyangombwa1 );
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         return NextResponse.error("An error occurred while fetching data.", 500);
//     }
// }

