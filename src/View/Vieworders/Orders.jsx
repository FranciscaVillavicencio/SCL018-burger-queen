import React, { useState, useEffect, } from "react";
import { Link } from "react-router-dom";
import { NavRosado } from "../Nav";
import db from "../../firebase/firebaseConfig";
import { collection, onSnapshot, } from "firebase/firestore";
import ActualizarSelector from "./ActualizarSelector";
import Modal from "./Modal";
import recursos from "../recursos/img"





const Orders = () => {

  //estado del modal

  const [modal, setModal] = useState(false);



  //estado con los detalles de los pedidos, se debe traer esta data desde firebase. 
  const [orderClient, setOrderClient] = useState([]);


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
        const arregloOrderClient = snapshot.docs.map((documento) => {
          return { ...documento.data(), id: documento.id }
        })
        //console.log(arregloOrderClient);
        setOrderClient(arregloOrderClient);

      }
    );
  }, []);


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


      <section className="items-center bg-red-50 justify-items-center" >

        <div className="flex">
          <table className="w-5/6 m-5 mx-auto font-sans text-gray-100 bg-orange-400 ">
            <tr className="text-left border-b-2">
              <th className="px-4 py-3 ">Cliente</th>
              <th className="px-4 py-3">Fecha</th>
              <th class="px-4 py-3">Detalle del Pedido</th>
              <th class="px-4 py-3">Estado</th>
            </tr>



            {orderClient.map((order) => (

              <tr key={order.id} className="text-black bg-orange-300 border-b ">
                <td className="px-4 py-3">{order.cliente}</td>
                <td className="px-4 py-3">{order.date}</td>

                <td className="flex justify-center justify-items-center">
                <button onClick={()=> setModal(!modal)}><img src={recursos.img7} alt="imagen de foto" className="flex justify-center w-8 pt-2 ml-6 justify-items-center"/></button>
                  {[order.cartItem].map((item, id) => (
                    <div key={id}>
                      {item.map((l, x) => (   
                        <div key = {x}>
                            <Modal
                              estado = {modal}
                              cambiarEstadoModal={setModal}
                              id = {l.id}
                              img = {l.img}
                              name = {l.name} 
                              count = {l.count}/>
                          </div>
                        
                      ))}
                    </div>
                  ))}
                  
                </td>



                <td className="px-4 py-3">
                  <ActualizarSelector
                    id={order.id}
                    selectOption={order.selectOption}
                  />
                </td>



              </tr>
            ))}


          </table>
        </div>

      </section>

    </section>
  );
};

export default Orders;
