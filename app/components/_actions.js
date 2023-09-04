'use server'

import { v2 as cloudinary } from 'cloudinary';
import { createTodo } from '@/lib/mongo/todos';
import { revalidatePath } from 'next/cache';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'my-uploads'); // Replace 'your_upload_preset' with your actual upload preset
  
    const response = await fetch(process.env.CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: formData,
    });
  
    const data = await response.json();
    //console.log('Cloudinary response:', data);
    if (data.secure_url) {
        return data.secure_url;
      } else {
        throw new Error('Image upload to Cloudinary failed.');
      }
   // return data.secure_url;
  };

export const  create = async (formData)  => {

    const  title= formData.get('title')
    const  izina= formData.get('izina')
    const  nimero= formData.get('nimero')
    const  akarere= formData.get('akarere')
    const  telephone= formData.get('telephone')
    const file = formData.get('file');
         
 
    try {
        console.log('Starting image upload to Cloudinary...');
        const imageUrl = await uploadImageToCloudinary(file);
        //const { secure_url: imageUrl } = await uploadImageToCloudinary(file);
        console.log('Image upload to Cloudinary successful.',imageUrl);
        
        const todo = {
          title,
          izina,
          nimero,
          akarere,
          telephone,
          file: imageUrl,
          isCompleted: false
        };
        //console.log('Saving todo to MongoDB...');
        // Save the todo in MongoDB
        await createTodo(todo);
        console.log('Todo saved to MongoDB.',todo);
        // Revalidate the todos path
        revalidatePath('/todos');
    
        return todo;
      } catch (error) {
        console.log('Error uploading image and saving to database:', error);
        throw error;
      }
    };


   
  



  