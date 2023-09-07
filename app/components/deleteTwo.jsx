
"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const dynamic = 'force-dynamic';

const DELETE_PASS = process.env.NEXT_PUBLIC_DELETE_PASSWORD;
async function deleteTodo1(id, refresh) {
  
  try {
//    const res = await fetch(`${process.env.API_URL}${id}`, {${process.env.NEXT_PUBLIC_DELETE_API_HOME1_URL}
//   method: 'DELETE',
// });
const res = await fetch(`${process.env.NEXT_PUBLIC_DELETE_API_HOME1_URL}${id} `, {
  method: 'DELETE',

});


//console.log("deleteUrl",res);

    if (res.ok) {
      console.log("Todo deleted successfully");
      // Refresh the page to reflect the updated list
      refresh();
    } else {
      console.log("Failed to delete todos");
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}

export default function Delete1({ todo }) {
  //console.log(todo);
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
 
  
  useEffect(() => {
    const savedCheckedStatus = localStorage.getItem(`todo-${todo._id}`);
    if (savedCheckedStatus) {
      setIsChecked(savedCheckedStatus === "true");
    }
  }, []);

  // Event handler for checkbox click
  const handleCheckboxClick = () => {
    // Toggle the checked state
    setIsChecked(!isChecked);


    // Save the checked state to local storage
    localStorage.setItem(`todo-${todo._id}`, !isChecked);
  
    if (!isChecked) {
      toast.success('Murakoze,Icyangombwa kirakurwaho vubwa', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
      });
    }
  
  };









   const handleDelete = () => {
    const password = prompt('INJIZA IJAMBO BANGA');
    if (password !== DELETE_PASS) {
      console.log(password);
      setShowToast(true);
      toast.error("Ntiwemerewe Gusiba Icyangombwa", {
        hideProgressBar: false,
        autoClose: 2000,
        position: 'top-right',
        pauseOnHover: true,
        theme: 'light',
        draggable: true,
        onClose: () => {
          setShowToast(false);
        },
      });
      return;
    }
    
    setShowToast(true);
    toast.success('Byakunze. Siba icyangombwa...', {
      hideProgressBar: false,
      autoClose: 2000,
      position: 'top-right',
      pauseOnHover: true,
      theme: 'light',
      draggable: true,
      onClose: () => {
        setShowToast(false);
      },
    });
  
    deleteTodo1(todo._id, router.refresh);
  };

  return (
    <div className={`flex font-bold items-center ${isChecked ? 'bg-transparent' : ''}`}>
    Cyarabonetse:
  <input
    type="checkbox"
    checked={isChecked}
    className={`border-slate-900 text-black mr-2 ${isChecked ? 'bg-green-500' : 'bg-gray-500'} custom-checkbox`}
    onChange={handleCheckboxClick}
  />
  <button className="text-red-700 text-lg font-bold" onClick={handleDelete}>
    <FaTrash size={17} />
  </button>
</div>
  );
}
