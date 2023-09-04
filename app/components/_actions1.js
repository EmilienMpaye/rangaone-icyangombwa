'use server'
import { createTodo1 } from "@lib/mongo/todos1";
import { revalidatePath } from "next/cache";

export const create = async (formData1) =>{

    const title =formData1.get('title');
    const izina = formData1.get('izina');
    const nimero = formData1.get('nimero');
    const akarere = formData1.get('akarere');
    const telephone = formData1.get('telephone');
    const yourname = formData1.get('yourname');
    const comment = formData1.get('comment');
 
    try {
        const todo ={
            title,
            izina,
            nimero,
            akarere,
            telephone,
            yourname,
            comment,
            isCompleted:false,
        };
        await createTodo1(todo);
        console.log('Todo saved to Mongo DB ',todo);

        revalidatePath('/todos1');
        return todo;
    }catch(error) {
        console.log("Error saving todos to database ",error)
      throw error;
    }
};