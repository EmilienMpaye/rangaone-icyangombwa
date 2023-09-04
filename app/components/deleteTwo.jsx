
"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
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


console.log("deleteUrl",res);

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
  console.log(todo);
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const handleDelete = () => {
 
    const password = prompt('INJIZA IJAMBO BANGA');
    if (password !== DELETE_PASS) {
     
      console.log(password);
      if (!showToast) {
        setShowToast(true);

        toast.error("Ntiwemerewe Gusiba Icyangombwa, reba kuri page IBITURANGA", {
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
      }
      return;
    }
    setShowToast(true);

    toast.success('Byakunze. Siba icyangombwa...', {
      hideProgressBar: false,
      autoClose: 2000,
      position: 'bottom-right',
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
    <div>
      <span>{todo.id}</span>
      <button className="text-red-700 text-lg font-bold" onClick={handleDelete}>
        <FaTrash size={15}/>
      </button>
    </div>
  );
}
