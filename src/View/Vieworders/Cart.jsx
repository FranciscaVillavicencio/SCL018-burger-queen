
import React, { useState, useContext } from "react";
import { ContextGlobal } from "../../App";
import { NavNaranjo } from "../Nav";
import Select from "react-select";
//acceso a la base de datos de firebase.
import db from "../../firebase/firebaseConfig";
//funcion para acceder a la colección, donde se guarda la info.
import { collection, addDoc } from "firebase/firestore";



//constantes del selector

const options = [
  { value: 'enviado al taller', label: 'Enviado al Taller' },
  { value: 'recibido de taller', label: 'Recibido de Taller' },
  { value: 'despachado', label: 'Despachado' },
];
  


export const Cart = () => {
  const context = useContext(ContextGlobal);
  const cartItem = context.state.cart;


   //variable del select de estados.

   const [selectedOption, setSelectedOption] = useState(null);
   
   const onDropdownChange = (selectedOption) =>{
    setSelectedOption(selectedOption);
    console.log(selectedOption);

   }
   

  
    // constante para calcular el valor total de los items. 
  
  const totalPrice = cartItem.reduce((price, item) => price + item.count * item.price,
    0);


    


      //const para guardar la info de los pedidos
       const [cliente, setCliente] = useState ('');
       const [correo, setCorreo] = useState ('');

    //constante para enviar información a la base de datos
    const onSubmit = async (e) => {
      e.preventDefault();

      addDoc(collection(db, 'pedidos'), {
        cliente: 'cliente de ejemplo',
        correo: 'correo de ejemplo'
      });     
    }


  return (
    <div>
      <>
        <NavNaranjo />
      </>

      <div>

        {cartItem.length === 0 && (
          <div className="ml-10 text-lg font-medium text-gray-400">No hay productos en el Carro</div>
        )}

        <section >

          <div className="bg-red-50 ">
            <div className="py-10">

              <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg md:max-w-5xl">
                <div className="md:flex ">
                  <div className="w-full p-4 px-5 py-5">
                    <div className="gap-2 md:grid md:grid-cols-3 ">
                      <div className="col-span-2 p-5">


                        {cartItem.map((item) => (
                          <div key={item.id}>
                            <section className="flex items-center justify-between pt-6 mt-6 border-t">
                              <button className="px-4 py-2 font-bold text-white bg-red-400 rounded-full hover:bg-red-500" onClick={() => context.limpiar(item.id)}>X</button>
                              <div className="flex items-center w-32 "> <img src={item.img} alt="totebags"></img>
                                <div className="flex flex-col ml-3 "> <span className="font-medium text-md">{item.name}</span><span class="text-md font-medium"> $ {item.price}</span> </div>
                              </div>
                              <div className="flex items-center justify-center">
                                <div className="flex pr-8"> <button className="font-semibold" onClick={() => context.restar(item.id)}>-</button> <input className="w-8 h-6 px-2 mx-2 text-sm bg-gray-100 border rounded focus:outline-none" value={item.count} /> <button className="font-semibold" onClick={() => context.sumar(item.id)}>+</button> </div>
                                <div> <i className="text-xs font-medium fa fa-close"></i> </div>
                              </div>
                            </section>
                          </div>
                        ))}


                        <div className="flex items-center justify-between pt-6 mt-6 border-t">
                          <div className="flex items-end justify-center"> <span className="mr-1 text-sm font-medium text-gray-400">Subtotal:</span> <span className="text-lg font-bold text-gray-800 "> $ {totalPrice} </span> </div>
                        </div>
                      </div>


                      <div onSubmit={onSubmit} className="p-5 mt-10 border-8 border-orange-400 border-opacity-100 rounded h-96 after:overflow-visible "> <span className="block pb-2 text-xl font-medium text-gray-400">Detalle del Pedido</span>

                        <div className="flex flex-col justify-center pt-3"> <label className="text-lg text-gray-500 ">Nombre Cliente</label> <input type="text" name= "cliente" value={cliente} onChange={(e) => setCliente(e.target.value)} className="w-full h-6 py-4 text-sm text-black placeholder-gray-600 bg-white border-b border-red-100 focus:outline-none" placeholder="Giga Tamarashvili" /></div>
                        <div className="flex flex-col justify-center pt-3"> <label className="text-lg text-gray-500 ">correo</label> <input type="email" name= "mail" value={correo} onChange={(e) => setCorreo(e.target.value)} className="w-full h-6 py-4 text-sm text-black placeholder-gray-600 bg-white border-b border-red-100 focus:outline-none" placeholder="Giga Tamarashvili" /></div>

                        <div className="grid grid-cols-3 gap-2 pt-2 mb-3">



                         


                        </div> <button type= "submit" className="w-full h-12 mt-4 mb-6 text-white bg-red-400 rounded focus:outline-none hover:bg-red-100">Enviar</button>
                      
              
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Cart;
