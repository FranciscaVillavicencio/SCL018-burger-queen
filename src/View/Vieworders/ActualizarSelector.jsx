import React, { useState } from 'react';
import db from "../../firebase/firebaseConfig";
import {doc, deleteDoc, updateDoc} from "firebase/firestore";
import recursos from "./../recursos/img";



const ActualizarSelector = ({ id, selectOption }) => {

      //estado del selector para cambiar estado.
  const [editSelec, setEditSelec] = useState(selectOption);


  const ActualizarSelect = async(e) =>{
   e.preventDefault();
    await updateDoc(doc(db, "pedidos", id), {

        selectOption:editSelec,
    });
  }



  const eliminarSelect = async(id) =>{
    
     await deleteDoc(doc(db, "pedidos", id), {
 
     });

   }


    return (
        <form onSubmit={ActualizarSelect}>
            <select value={editSelec} className="text-red-400" onChange={(e) => setEditSelec(e.target.value)}>   
              <option>{editSelec}</option>
               <option>Recibido de Taller</option>
                <option>Despachado</option>
            </select>

            <button type="submit" className="py-2 mt-4 mb-2 font-sans text-base text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 px-9 shadow-red-700/50" >Actualizar</button>
            <button onClick={()=>eliminarSelect(id)}><img src={recursos.img8} alt="borrar" className = "w-6 pt-2 ml-6"/></button>
        </form>
    );
}

export default ActualizarSelector;

