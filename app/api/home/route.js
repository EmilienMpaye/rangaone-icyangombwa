import {  NextResponse } from "next/server";
import { getAllTodos} from "@lib/mongo/todos";

export async function GET(context){
   const todos = await getAllTodos();

   const response = NextResponse.json(todos,{
      next: {
        cache: 'no-cache'
      }
    });
    
  response.headers.set('Access-Control-Allow-Origin', 'https://rangaone-icyangombwa.vercel.app','Cashe-Control','s-maxage=5');
 
  return response;
   
   
}
    
