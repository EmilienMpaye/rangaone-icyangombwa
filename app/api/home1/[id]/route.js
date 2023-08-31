import { NextResponse } from "next/server";
import { deleteTodo1 } from "@lib/mongo/todos1";

export const dynamic = 'force-dynamic';
export const DELETE = async (request, { params }) => {
    const { id } = params;
  
    try {
      const result = await deleteTodo1(id);
  
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