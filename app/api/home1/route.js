import {  NextResponse } from "next/server";
import { getAllTodos1} from "@lib/mongo/todos1";

export async function GET(){
   const todos1 = await getAllTodos1();
   return NextResponse.json(todos1);
   
}
    
