import { ObjectId } from "mongodb";
import clientPromise from "./client";

let client ;
let db ;
let todos1 ;


async function init () {
    if(db) return;
    try{
        client =await clientPromise ;
        console.log('connected to Mongo db');

        db =await client.db();
        todos1 =await db.collection('ribyangombwa');
    }catch(error) {
    console.error('Failed to connect to tMongoDb',error);
    throw new Error ('failed to connect to Database.');
    }
}

export async function getAllTodos1() {
    try {
        if(!todos1) await init();

        const result = await todos1 
        .find({})
        .map((todo)=>({
            ...todo,
            _id:todo._id.toString(),
        }))
        .toArray();
        return {todos1: result};
    }catch(error) {
        return {error: "Failed to fetch todos1"}
    }
}

export async function wait(ms) {
    return new Promise(resolve =>setTimeout(resolve,ms))

}

export async function getTodoById1(id) {
    try{
    if (!todos1) await init();

    const todo = await todos1.findOne({_id:new ObjectId(id)});
    if(!todo) throw new Error();
    return {todo:{...todo, _id:todo._id.toString() }} ;
    
    } catch(error){
        return {error: 'Failed to get todos1'}
    }
  
}


export async function createTodo1(todoData1) {

    try{
        if(!todos1) await init();
        const result =await todos1.insertOne({...todoData1 ,isCompleted:false });
       return result.insertedId;
    
    }catch(error){
        console.error('Failed to create todo',error);
        return {error : 'Failed to create todos1'}
    }
}


export async function deleteTodo1(id) {
    try {
        if (!todos1) await init();
    
        const result = await todos1.deleteOne({ _id: new ObjectId(id) });
    
        if (result.deletedCount === 0) {
          return { error: 'Todo not found' };
        }
    
        return { success: true };
      } catch (error) {
        console.error('Failed to delete todo:', error);
        return { error: 'Failed to delete todo' };
      }
}

export async function completeTodo(id) {
    
}