import {  NextResponse } from "next/server";
import { getAllTodos} from "@lib/mongo/todos";

export async function GET(context){
   //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
   const todos = await getAllTodos();

   const response = NextResponse.json(todos);
    //console.log("home data",response)
  // Add headers to the response.
  response.headers.set('Access-Control-Allow-Origin', 'https://rangaone-icyangombwa.vercel.app');
 
  return response;
   //return NextResponse.json(todos1);
   
}
    
