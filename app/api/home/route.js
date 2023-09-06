import {  NextResponse } from "next/server";
import { getAllTodos} from "@lib/mongo/todos";

export const dynamic = "force-dynamic";
export async function GET(context){
   //await clientPromise();
   const todos = await getAllTodos();

   const response = NextResponse.json(todos,{
      next: {
        cache: 'no-cache'
      }
    });
    
    response.headers.set('Access-Control-Allow-Origin', 'https://rangaone-icyangombwa.vercel.app');
    response.headers.set('Cashe-Control','s-maxage=5, must-revalidate');
    response.headers.set('X-Content-Type-Options', 'text/plain');
  return response;
   
   
}
    
