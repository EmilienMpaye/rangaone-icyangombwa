 import { NextResponse } from "next/server";
 import { getAllTodos } from "@/lib/mongo/todos";

  export async function GET() {
   const todos = await getAllTodos();
   return NextResponse.json(todos);
  }

