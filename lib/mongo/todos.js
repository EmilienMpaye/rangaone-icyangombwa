// lib/mongo/todos.js
import { ObjectId } from 'mongodb';
import clientPromise from './client';

let client;
let db;
let todos;

export async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    console.log('Connected to MongoDB');
    db = await client.db();
    todos = await db.collection('ibyangombwa');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw new Error('Failed to connect to the database.');
  }
}


export async function getAllTodos() {
  try {
    if (!todos) await init();

    const result = await todos
      .find({})
      .map((todo) => ({
        ...todo,
        _id: todo._id.toString(),
      }))
      .toArray();

    return { todos: result };
  } catch (error) {
    return { error: 'Failed to fetch todos' };
  }
}


export async function getTodoById(id) {
  try {
    if (!todos) await init();

    const todo = await todos.findOne({ _id: new ObjectId(id) });
    if (!todo) throw new Error();
    return { todo: { ...todo, _id: todo._id.toString() } };
  } catch (error) {
    return { error: 'Failed to get todo' };
  }
}


export async function createTodo(todoData) {
  try {
    if (!todos) await init();
    const result = await todos.insertOne({ ...todoData, isCompleted: false });
    return result.insertedId;
  } catch (error) {
    console.error('Failed to create todo:', error);
    return { error: 'Failed to create todo!' };
  }
}

export async function deleteTodo(id) {
  try {
    if (!todos) await init();

    const result = await todos.deleteOne({ _id: new ObjectId(id) });

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
  // Implement completeTodo logic here
}
