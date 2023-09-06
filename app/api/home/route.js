import {  NextResponse } from "next/server";
import { getAllTodos} from "@lib/mongo/todos";
import clientPromise from "@lib/mongo/client";
export const dynamic = "force-dynamic";
export async function GET(context){
   await clientPromise();
   const todos = await getAllTodos();

   const response = NextResponse.json(todos,{
      next: {
        cache: 'no-cache'
      }
    });
    
    response.setHeader('Access-Control-Allow-Origin', 'https://rangaone-icyangombwa.vercel.app');
    response.setHeader('Cashe-Control','s-maxage=5, must-revalidate');
    response.setHeader('X-Content-Type-Options', 'text/plain');
  return response;
   
   
}
    
