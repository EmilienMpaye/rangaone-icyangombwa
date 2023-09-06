 import { NextResponse } from "next/server";
 export const dynamic = "force-dynamic";
const apisearch = process.env.API_HOME_CACHEBUSTER_URL;



export async function GET(request) {
    //const origin =request.headers.get('origin');
    try {
        //const cacheBuster = Date.now();
        //const urlWithCacheBuster = `${apisearch}${cacheBuster}`;

        const response = await fetch(apisearch);
    
        const ibyangombwa = await response.json();

        const { searchParams } = new URL(request.url);
        const query = searchParams.get('query');

        const filteredIbyangombwa = ibyangombwa.todos.filter((ibyango) => {
            return ibyango.title.toLowerCase().includes(query.toLowerCase()) || ibyango.izina.toLowerCase().includes(query.toLowerCase());
        });
  console.log("filteredtodo",filteredIbyangombwa);
        return NextResponse.json(
            filteredIbyangombwa   ,{
                headers:{
                    'Content-Type': 'application/json',
                     "Access-Control-Allow-Credentials": "true",
                     "Access-Control-Allow-Origin": "https://rangaone-icyangombwa.vercel.app" ,   
                }
               
            }
        );
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.error("An error occurred while fetching data.", 500);
    }
}
