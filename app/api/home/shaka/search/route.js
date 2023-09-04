 import { NextResponse } from "next/server";
 export const dynamic = "force-dynamic";
const apisearch = process.env.API_HOME_CACHEBUSTER_URL;



export async function GET(request) {
    try {
        const cacheBuster = Date.now();
        const urlWithCacheBuster = `${apisearch}${cacheBuster}`;

        const response = await fetch(urlWithCacheBuster , {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
        });
    
        const ibyangombwa = await response.json();

        const { searchParams } = new URL(request.url);
        const query = searchParams.get('query');

        const filteredIbyangombwa = ibyangombwa.todos.filter((ibyango) => {
            return ibyango.title.toLowerCase().includes(query.toLowerCase()) || ibyango.izina.toLowerCase().includes(query.toLowerCase());
        });
  console.log("filteredtodo",filteredIbyangombwa);
        return NextResponse.json(
            filteredIbyangombwa
        );
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.error("An error occurred while fetching data.", 500);
    }
}
