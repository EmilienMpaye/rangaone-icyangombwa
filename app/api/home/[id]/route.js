import { NextResponse } from "next/server";
import { getAllTodos, getTodoById, deleteTodo } from "@/lib/mongo/todos";

export const dynamic = 'force-dynamic';
export const GET = async(request,{params}) =>{

    const {id} =params;


    try {
        const todos = await getTodoById(id);
        
        if(!todos){
            return NextResponse.json(
                {message:"todos not found",error},{status:404})
        }
                 
   return NextResponse.json(todos);
    } catch(error){
        return NextResponse.json({message :"Get an error",error},{status:500});
    }

}


export const DELETE = async (request, { params }) => {
    const { id } = params;
  
    try {
      const result = await deleteTodo(id);
  
      if (result.error) {
        return NextResponse.json(
          { message: result.error },
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        { message: `Todo with ID ${id} deleted successfully` },
        { status: 200 }
      );
    } catch (error) {
      console.error("Failed to delete todo:", error);
      return NextResponse.json(
        { message: "Failed to delete todo" },
        { status: 500 }
      );
    }
  };