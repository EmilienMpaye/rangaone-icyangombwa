import {  NextResponse } from "next/server";
import { getAllTodos1} from "@lib/mongo/todos1";

export async function GET(context){
   //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
   const todos1 = await getAllTodos1();

   const response = NextResponse.json(todos1);
  
  // Add headers to the response.
  response.headers.set('Access-Control-Allow-Origin', 'https://rangaone-icyangombwa.vercel.app');
  
  return response;
   //return NextResponse.json(todos1);
   
}
    
