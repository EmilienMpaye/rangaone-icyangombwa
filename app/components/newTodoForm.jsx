'use client'

import { useRef, useState } from 'react';
import {create} from "./_actions"
import CTA from './CTA';
import { toast } from 'react-toastify';
import SearchLoading from './searchLoading';
import Image from 'next/image';

const NewTodoForm = ({todo}) => {
  const formRef = useRef();
  const [akarereValue, setAkarereValue] = useState('');
  const [imageUrl, setImageUrl] = useState( todo?.file?.data ||'');
  const [formData, setFormData] = useState(null); // Initialize the formData state
  const [isSubmitting, setIsSubmitting] = useState(false); // Track button's disabled state

 const handleSubmit = async(e)=> {
  e.preventDefault();
  //disable button
  setIsSubmitting(true);
  const formData = new FormData(formRef.current);
  if (!imageUrl || !akarereValue || !formData.get("title") || !formData.get("izina") || !formData.get("nimero") || !formData.get("telephone")) {
    toast.error('Banza wuzuze iyi form!');
    setIsSubmitting(false); // Enable the button
    return;
  }


try {
  await create(formData);
  //console.log('Form Data:', formData);
  formRef.current.reset();
  setImageUrl("");
  toast.success("Urakoze,Icyangombwa cyoherejwe neza !", {
    hideProgressBar: false,
    autoClose: 2000,
    position: 'bottom-right',
    pauseOnHover: true,
    theme: 'light',
    draggable: true,
    
  });
} catch (error) {
  console.log('Error submitting form:', error);

}
setIsSubmitting(false); // Enable the button
};

const handleImageChange = (e) => {
  const file = e.target.files[0]; // Get the selected file
  if (!file || !file.type.startsWith('image/')) {
    toast.error('Please select an image file!');
    setImageUrl('');
    return;
  }
  
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    setImageUrl(reader.result);
  };

  reader.onerror = (error) => {
    console.log('Error:', error);
  };

  if (file.size > 600 * 1024) {
    toast.error('Iphoto ntirenza 600 kb');
    setImageUrl('');
    return;
  }

  const updatedFormData = new FormData(formRef.current);
  updatedFormData.set('file', file);
  setFormData(updatedFormData);
};


  const handleAkarereChange = (e) => {
    setAkarereValue(e.target.value);
  };



  return (
    <div className=' ml-3 '>
     
  <section className='md:w-1/2 md:ml-2 md:mt-0 md:order-last md:rounded-sm md:mr-2 '>
    <form   onSubmit={handleSubmit} ref={formRef} >
      <div className="flex flex-col md:flex-col  ">
        <div className="flex items-center mb-4 mt-4 md:mr-2">
          <label htmlFor="nameInput2" className="mr-1 font-bold text-white">
            Izina:
          </label>
          <input
            id="nameInput1"
            type="text"
            name="title"
            placeholder="izina riri Kucyangombwa"
            className="px-1 py-1 ml-4 rounded-md border-2  bg-gray-500 border-slate-900 text-black"
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="fullNameInput2" className="mr-2 font-bold text-white">
            Ubwoko:
          </label>
          <input
            id="fullNameInput2"
            type="text"
            name="izina"
            placeholder="Ubwoko bw&apos;icyangombwa"
            className="px-2 py-1 rounded-md border-2 ml-3 bg-gray-500 border-slate-900 text-black"
          />
        </div>
        <div className="flex items-center mb-4 md:mr-1">
          <label htmlFor="numberInput2" className="mr-1 font-bold text-white">
            Nimero:<br className="break-words" />y&apos;Icyango<br className="break-words" />mbwa
          </label>
          <input
            id="numberInput2"
            type="number"
            name="nimero"
            placeholder="nimero y&apos;icyangombwa"
            className="px-2 py-1  rounded-md  border-2  bg-gray-500 border-slate-900 text-black"
          />
        </div>
        <div className="flex items-center mb-4 md:mr-4">
          <label htmlFor="cityInput2" className="mr-2 font-bold text-white">
            Akarere:
          </label>
          <select
            id="cityInput2"
            name="akarere"
            value={akarereValue}
            className="px-2 py-1 rounded-md ml-4 border-2 bg-gray-500 border-slate-900 text-black"
            onChange={handleAkarereChange}
          
          >
            <option value="Kayonza">kayonza</option>
            <option value="ruhango">Ruhango</option>
            <option value="Muhanga">Muhanga</option>
            <option value="Rusizi">Rusizi</option>
            <option value="Nyamagabe">Nyamagabe</option>
            <option value="Nyaruguru">Nyaruguru</option>
            <option value="Nyanza">Nyanza</option>
            <option value="kigali">Kigali</option>
            <option value="Kamonyi">Kamonyi</option>
          </select>
        </div>
        <div className="flex items-center mb-4 ">
          <label htmlFor="telephoneInput2" className="mr-1 font-bold text-white">
            Telephone:
          </label>
          <input 
            id="imagez"
            type="number"
            name="telephone"
            placeholder="Telephone y&apos;uranga"
            className=" py-1 rounded-md border-2  bg-gray-500 border-slate-900 text-black "
          />
        </div>
        <div className="flex items-center mb-4 ">
          <label htmlFor="telephoneInput2" className="mr-2 font-bold text-white ">
            Iphoto:
          </label>
          <input 
            id="telephoneInput2"
            type="file"
            name="file"
            onChange={handleImageChange}
            className=" rounded-md border-2  bg-gray-500 border-slate-900 text-black " 
          />
            {imageUrl && (
          <img src={imageUrl} alt="Todo Image"  className='h-40 w-40 rounded-sm' />
        )}
        </div>
      </div>
      <button 
        type="submit"
        className="'text-white bg-gradient-to-b  
        from-cyan-500   to-blue-500 px-6 py-3 my-8 
       mx-auto flex items-center rounded-md hover:scale-110 duration-300'"
      >
        {isSubmitting  ? <SearchLoading/> : 'Ohereza'}
      </button>
    </form>
    </section>
    </div>
  );
};

export default NewTodoForm;
