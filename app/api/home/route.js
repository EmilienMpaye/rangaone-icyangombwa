import {  NextResponse } from "next/server";
import { getAllTodos} from "@lib/mongo/todos";

export async function GET(context){
   const todos = await getAllTodos();

   const response = NextResponse.json(todos,{
      
        cache: 'no-cache',
        revalidate: 0
    });
    
  response.headers.set('Access-Control-Allow-Origin', 'https://rangaone-icyangombwa.vercel.app');
 
  return response;
   
   
}
    
