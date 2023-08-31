"use client"


import Footer from '@app/components/footer';
import React, { useState } from 'react';
export const dynamic ="force-dynamic";
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const validateEmail = (email) => {
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  
  };
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
     if (!name || !email || !message) {
     console.log('Please fill in all fields');
      return;
    }
    // Perform email validation
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    console.log('Email:', email);
   
    console.log(handleSubmit);
    console.log('Form submitted successfully');
    // Submit the form
    // You can add your form submission logic here

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  

  return (
    <div className=' w-full flex flex-col min-h-screen '>
    <div className='w-full min-h-screen bg-gradient-to-b from-slate-600 to-green-400 text-white'>
       
      <div className="flex items-center justify-center flex-col">
      <h1 className='text-bold text-2xl text-black'>Watwandikira kuri:</h1>
        <p>Taka inyunganizi cyangwa igitekerezo hano</p>
      </div>
      <div className='flex flex-col p-4 justify-center max-w-screen mx-auto h-full'>
        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/a3fbf87f-54e7-48f7-a285-840767918d6a' 
          method='POST'
          onSubmit={()=>(handleSubmit)}
            className='flex flex-col w-full md:w-1/2'
          >
            <input
              type='text'
              name='name'
              placeholder='Izina '
              className='p2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='text'
              name='email'
              placeholder='andika  email yawe'
              className='p2 bg-transparent border-2 rounded-md text-white my-4 focus:outline-none'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name='message'
              placeholder='andika ubutumwa'
              rows='3'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Send
            </button>
          </form>
          
        </div>
        <div className='flex items-center justify-center flex-col  container'>
          <h1 className='text-bold text-2xl text-black'>Telephone:</h1>
          <span className='text-white text-2xl'>+250786221343</span>
          <span className='text-white text-2xl mt-2'>+250725124017</span>
          </div>
      </div>
    </div>
    <div className='footer'>
        <Footer/> 
        </div> 
    </div>
  );
};

export default ContactForm;
