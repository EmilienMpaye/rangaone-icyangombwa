 import {NextResponse} from "next/server";
export const dynamic = "force-dynamic";
// //API_HOME_CACHEBUSTER_URL=http://localhost:3000/api/home
      
export async function GET() {
  const homeapi =process.env.API_HOME_URL 
  //const apisearch = process.env.API_HOME_CACHEBUSTER_URL;
 
    const response = await fetch(homeapi,{
      next: {
        cache: 'no-cache',
        revalidate: 0
      }
    })
      
    if (response.ok) {
      const { todos } = await response.json();
      const data = NextResponse.json({ todos });
      data.headers.set('Access-Control-Allow-Origin', 'https://rangaone-icyangombwa.vercel.app','Cashe-Control','s-maxage=5, must-revalidate','X-Content-Type-Options', 'nosniff');
      return data;
    } else {
      // Handle error here
      console.error('Failed to fetch data from API');
      return new Response(null, { status: 500 }); // Return an appropriate response for the error
    }
  }
