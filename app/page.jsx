 
import NewTodoForm from "./components/newTodoForm";
import NewTodoForm1 from "./components/newTodoForm1";
import {FaPhone, FaEnvelope} from "react-icons/fa";
import {FaSearch} from "react-icons/fa"
import Link from "next/link";
import { getAllTodos1, wait } from "@lib/mongo/todos1";
import Rangisha from "./components/ranisha";
import Delete from "./components/deteteOne";
import CTA from "./components/CTA";
import CTA1 from "./components/CTA1";

import Footer from "./components/footer";
import Delete1 from "./components/deleteTwo";
import { getAllTodos } from "@lib/mongo/todos";





export const dynamic = 'force-dynamic';

const Home = async () => {
 //const { todos} = await getData();
 const {todos} = await getAllTodos();
 const {todos1} = await getAllTodos1();
  console.log("page todoss",todos);
  return (
    
    <div className="max-w-full  bg-gradient-to-b from-slate-600 to-green-400 ml-0 " style={{ width: '100%',overflowX: 'hidden' }}>
      
      <Rangisha />
  
     
      {/* <CustomScrollbar/> */}
<section className="w-full ">
  <div className="flex flex-col md:flex-row">
    <div className=" flex flex-col sm:flex-col md:flex-col lg:flex-row   w-full md:w-1/2">
      <CTA />
      <NewTodoForm />
    </div>

    <div className=" flex flex-col sm:flex-col md:flex-col lg:flex-row  w-full md:w-1/2">
      <CTA1 />
      <NewTodoForm1 />
    </div>
  </div>
</section>



 <section className="w-full  my-2  rounded-lg">
  <span style={{ display: 'flex', alignItems: 'center' }} className="bg-gradient-to-b from-yellow-600 to-green-400 justify-center items-center font-bold">
      Ibyangombwa  bitoraguwe vuba aha 
    <Link href={`/todoss`} passHref className="ml-2 flex-row">
      <FaSearch size={25} className="text-yellow-900 mt-1" />
    </Link>
  </span>
  <div className="marquee hover:w-full overflow-x-auto ">
  <div className="flex flex-nowrap flex-row gap-3 p-2 rounded-lg max-h-80  maylike " style={{ width: '100%',overflowX: 'auto', maxHeight: '500px' }}>
    {todos.map((todo) => (
      <div key={todo._id} className="flex flex-row mb-4 border-2 border-white rounded-xl mr-2 w-full sm:w-auto flex-shrink-0 " style={{ minWidth: '400px', maxWidth: '100%', flexShrink: 1 }}>
        {todo.file && (
          <div className="flex flex-col">
            <img src={todo.file} alt="Todo Image" className="h-20 w-40 rounded-sm ml-4 mt-3" />
            <div className="flex items-center mt-4">
              <a href={`tel:${todo.telephone}`} className="flex items-center"><p className=" ml-2 font-bold text-red-500">HAMAGARA</p>
                <FaPhone className="mr-1 ml-2 text-green-700" />
              </a>
              <a href={`sms:${todo.telephone}`} className="flex items-center ml-2 text-white"><p>SMS:</p>
                <FaEnvelope className=" text-white" />
              </a>
            </div>
          </div>
        )}
        <div className="flex flex-col ml-3 flex-1 pr-2 overflow-hidden">
          <div className="flex items-end justify-end mt-1 ">
          
                <Delete todo={todo} /> 
        
          </div>
          <div style={{ overflow: 'hidden' }}>
            <h3>{todo.title}</h3>
            <p>{todo.izina}</p>
            <p>{todo.nimero}</p>
            <p>Cyatangiwe:{todo.akarere}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

</section>



<section className="w-full  my-2  rounded-lg ">
  {/* Render the section with todos1 */}
 
  <span
    style={{ display: "flex", alignItems: "center" }}
    className="justify-center items-center bg-gradient-to-b from-yellow-600 to-green-400 font-bold"
  >
    Ibyangombwa birangwa
    <Link
      href={`/byose`}
      passHref
      className="ml-2 flex-row"
    >
      <FaSearch size={25} className="text-yellow-900 mt-1" />
    </Link>
  </span>
  <div className="marquee hover:w-full overflow-x-auto">
    <div className="flex flex-nowrap flex-row gap-3  p-4 rounded-lg max-h-80 maylike1  " style={{ width: '100%',overflowX: 'auto', maxHeight: '350px' }}>
      {todos1.map((todo) => (
        <div
          key={todo._id}
          className="flex flex-row mb-4 border-2 border-white rounded-xl mr-2 w-full sm:w-auto flex-shrink-0"
          style={{ minWidth: '400px', maxWidth: '100%', flexShrink: 1 }}>
          {/* Remove the image rendering */}
          <div className="flex flex-col flex-1 ml-3 pr-4 overflow-hidden overflow-ellipsis">
            <div className="flex items-end justify-end mt-1">
              <Delete1 todo={todo} /> 
            </div>
            <div className="ml-7">
            <h3 className='text-black   font-semibold'>Izina:<span className="ml-4">{todo.title}</span> </h3>
            <p className='text-black  font-semibold '>Ubwoko: <span className="  ml-1">{todo.izina}</span></p>
            <p className='text-black  font-semibold '>Nimero: <span className="  ml-1">{todo.nimero}</span>   </p>
            <p className='text-black  font-semibold '>Akarere:  <span className="  ml-1">{todo.akarere}</span></p>
            <p className='text-black  font-semibold '>Uranga:   <span className="  ml-1">{todo.yourname}</span></p>
            <div style={{ position: 'relative' }}>
    <p className="text-bold text-black">{todo.comment}</p>
            </div>
            </div>
            {/*  */}
            <div className="flex items-center justify-center mr-7">
              <a href={`tel:${todo.telephone}`} className="flex items-center ">
                <p className="text-red-500 font-bold  mr-2">HAMAGARA</p>
                <FaPhone className="mr-1 text-green-900 ml-2" />
              </a>
              <a href={`sms:${todo.telephone}`} className="flex items-center ml-2">
              <p className="text-white">SMS:</p>
                <FaEnvelope className="  text-white" />
                
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<div className='footer footer-container bg-blue-gradient'>
        <Footer/> 
        </div>
</div>
 
  );
};

export default Home;
