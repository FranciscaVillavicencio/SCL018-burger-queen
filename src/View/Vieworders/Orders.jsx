import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { NavRosado } from "../Nav";
import db from "../../firebase/firebaseConfig";
import {doc, deleteDoc, updateDoc} from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import recursos from "./../recursos/img";
import { ContextGlobal } from "../../App";



const Orders = ({id}) => {
  const context = useContext(ContextGlobal);
  

  //estado con los detalles de los pedidos, se debe traer esta data desde firebase. 
  const [orderClient, setOrderClient] = useState([]);

  //estado del selector de estado IMPORTANTE.
  const [editSelec, setEditSelec] = useState(context.selectOption);


  //cuando cargamos por primera vez parte useEffect, y conectamos con la base de datos de firestore con onSnapshot
  useEffect(() => {
    //onSnapshot se mantiene conectado a firebase y se mantiene escuchando cambios dentro de la colección de "pedidos"
    onSnapshot(
      collection(db, "pedidos"),
      //le pasamos un parametro snapshot, este contiene toda la vista de la base de datos. 
      (snapshot) => {
        //console.log("se ejecuto snapshot");
        //console.log(snapshot.docs[0].data());
        //para acceder a la información de todos los pedidos y guardarlos dentro de un arreglo (orderClient)
        const arregloOrderClient = snapshot.docs.map((documento)=>{
          return {...documento.data(), id: documento.id}
        })
        
        setOrderClient(arregloOrderClient);

      }
    );
  }, []);


  const actualizarEstado = (e) => {
   e.preventDefault();

   updateDoc( doc(db, "pedidos", id), {
       
    selectOption:editSelec
    
   });
  
  }

  return (

    
    <section>

      <div>
        <>
          <NavRosado />
        </>


        <div className="flex flex-col items-center bg-red-50 justify-items-center ">

          <div>
            <button className="px-4 py-2 mt-10 font-sans text-4xl text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 shadow-red-700/50 mb-7">
              <Link to="/Products">Agregar Pedido</Link></button>
          </div>

        </div>

      </div>


      <section className= "items-center bg-red-50 justify-items-center" >

        <div className="flex">
          <table className="w-5/6 m-5 mx-auto font-sans text-gray-100 bg-orange-400 ">
            <tr className="text-left border-b-2">
              <th className="px-4 py-3">Cliente</th>
              <th className="px-4 py-3">Fecha</th>
              <th class="px-4 py-3">Estado</th>
            </tr>


            {orderClient.map((order) => (
              
              <tr key={order.id} className="text-black bg-orange-300 border-b">
                
                <td className="px-4 py-3">{order.cliente}</td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3">

                  <select onSubmit={actualizarEstado} className="text-red-400">
                    <option>{order.selectOption}</option>
                    <option>Enviado a Taller</option>
                    <option>Recibido de Taller</option>
                    <option>Despachado</option>
                  </select>
                </td>

          
                <button><img src={recursos.img7} alt="imagen de foto" className = "w-8 pt-2 ml-6"/></button>
                <button><img src={recursos.img8} alt="borrar" className = "w-6 pt-2 ml-6"/></button>

              </tr>
            ))}
            

          </table>
        </div>

      </section>

    </section>
  );
};

export default Orders;
