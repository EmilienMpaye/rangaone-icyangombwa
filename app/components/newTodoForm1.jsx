'use client'

import { useRef, useState } from 'react';
import { create } from './_actions1';
import Button from './Button';
import CTA1 from './CTA1';
import {toast} from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchLoading from './searchLoading';



const NewTodoForm1 = () => {

    const formRef =useRef();
    const [akarereValue , setAkarereValue] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = async(e)=> {
        e.preventDefault();

        // Prevent multiple submissions while the form is being processed
    if (isSubmitting) {
      return;
    }

      const formData1 = new FormData(formRef.current);
      if (!validateForm(formData1)) {
        return;
      }
  
      setIsSubmitting(true);
      try {
        await create(formData1);
        console.log('Form Data:', formData1);
        toast.success("form Yoherejwe!");
        formRef.current.reset();     
      } catch (error) {
        console.log('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
      };
      const validateForm = (formData) => {
        // Perform your form validation logic here
        // Check if required fields are not empty
        const title = formData.get('title');
        const izina = formData.get('izina');
        const nimero = formData.get('nimero');
        const akarere = formData.get('akarere');
        const yourname = formData.get('yourname');
        const telephone = formData.get('telephone');
    
        if (!title || !izina || !nimero || !akarere || !yourname || !telephone) {
          console.log('Please fill in all required fields.');
         
          if (!showToast) {
            setShowToast(true);
            toast.error('Uzuza form yose!', {
              hideProgressBar: false,
              autoClose: 2000,
              position: 'top-right',
              pauseOnHover: true,
              theme: 'light',
              draggable: true,
              onClose: () => {
                setShowToast(false); // Reset the state to allow showing toast again
              },
            });
          }
          return false;
        }
       
       
        return true;
        
      };

      const handleAkarereChange = (e) => {
        setAkarereValue(e.target.value);
      };
  return (
    <div className='flex  form-container '>
      
  <section className="md:w-1/2 md:ml-1 md:mt-0 md:order-last md:rounded-sm md:mr-2">
    <form onSubmit={handleSubmit} ref={formRef}  >
    
    <div className="flex flex-col md:flex-col ">
    
      <div className="flex items-center mb-4 mt-4 md:mr-2">
        <label htmlFor="nameInput2" className="mr-2 font-bold text-white">
          Izina:
        </label>
        <input
          id="nameInput1"
          type="text"
          name='title'
          placeholder="izina riri Kucyangombwa"
          className="px-2 py-1 rounded-md border-2  bg-gray-500 border-slate-900 text-black "
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="fullNameInput2" className="mr-2 font-bold text-white">
          Ubwoko:
        </label>
        <input
          id="fullNameInpu"
          type="text"
          name='izina'
          placeholder="Ubwoko bw&apos;icyangombwa"
          className="px-2 py-1 rounded-md border-2  bg-gray-500 border-slate-900 text-black"
        />
      </div>
      <div className="flex items-center mb-4 md:mr-4">
        <label
          htmlFor="numberInput2"
          className="mr-2 font-bold text-white"
        >
          Nimero <br className="break-words" /> y&apos;Icyango<br className="break-words" />mbwa:
        </label>
        <input
          id="numberInput2"
          type="number"
          name='nimero'
          placeholder="nimero y&apos;icyangombwa"
          className="px-2 py-1 rounded-md border-2  bg-gray-500 border-slate-900 text-black mr-7"
        />
      </div>
      <div className="flex items-center mb-4 md:mr-4">
        <label htmlFor="cityInput2" className="mr-2 font-bold text-white">
          Akarere:
        </label>
        <select
          id="cityInput2"
          name='akarere'
          onChange={handleAkarereChange}
          className="px-2 py-1 rounded-md border-2  bg-blue-gradient border-slate-900 text-black"
        >
           <option value="Bugesera">Bugesera</option>
            <option value="Burera">Burera</option>
            <option value="Gakenke">Gakenke</option>
            <option value="Gasabo">Gasabo</option>
            <option value="Gatsibo">Gatsibo</option>
            <option value="Gicumbi">Gicumbi</option>
            <option value="Gisagara">Gisagara</option>
            <option value="Huye">Huye</option>
            <option value="Kamonyi">Kamonyi</option>
            <option value="Karongi">Karongi</option>
            <option value="Kayonza">kayonza</option>
            <option value="Kicukiro">Kicukiro</option>
            <option value="kigali">Kigali</option>
            <option value="Kirehe">Kirehe</option>
            <option value="Muhanga">Muhanga</option>
            <option value="Musanze">Musanze</option>
            <option value="Ngoma">Ngoma</option>
            <option value="Ngororero">Ngororero</option>
            <option value="Nyabihu">Nyabihu</option>
            <option value="Nyagatare">Nyagatare</option>
            <option value="Nyamagabe">Nyamagabe</option>
            <option value="Nyamasheke">Nyamasheke</option>
            <option value="Nyanza">Nyanza</option>
            <option value="Nyarugenge">Nyarugenge</option>
            <option value="Nyaruguru">Nyaruguru</option>
            <option value="Rubavu">Rubavu</option>
            <option value="Ruhango">Ruhango</option>
            <option value="Rulindo">Rulindo</option>
            <option value="Rusizi">Rusizi</option>
            <option value="Rutsiro">Rutsiro</option>
            <option value="Rwamagana">Rwamagana</option>
            
        </select>
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="fullNameInput2" className="mr-2 font-bold text-white">
          Izina ryawe:
        </label>
        <input
          id="fullNameInput1"
          type="text"
          name='yourname'
          placeholder="IZINA RYAWE"
          className="px-1 py-1 rounded-md border-2  bg-gray-500 border-slate-900 text-black"
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="fullNameInput2" className="mr-2 font-bold text-white">
          Telephone:
        </label>
        <input
          id="fullNameInput2"
          type="number"
          name='telephone'
          placeholder="Telephone y&apos;uranga"
          className=" py-1 rounded-md border-2  bg-gray-500 border-slate-900 text-black"
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="fullNameInput2" className="mr-2 font-bold text-white">
         Icyo wavuga 
        </label>
        <textarea
          id="fullNameInput"
          type="text"
          name='comment'
          placeholder="icyo wabwira uwatoye"
          className="px-2 py-1 rounded-md border-2   bg-gray-500 border-slate-900 text-black"
        />
      </div>
      <button 
        type="submit"
        disabled={isSubmitting} // Disable the button while submitting
        className="'text-white bg-gradient-to-b  
        from-cyan-500   to-blue-500 px-6 py-3 my-8 
       mx-auto flex items-center rounded-md hover:scale-110 duration-300'"
      >
        {isSubmitting ? <SearchLoading/> : 'Ohereza'}
      
      </button>
    </div>
    </form>
    <ToastContainer/>
    </section>
    </div>

    
  )
}

export default NewTodoForm1