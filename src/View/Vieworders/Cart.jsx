import React, { useContext } from "react";
import { ContextGlobal } from "../../App";
import { NavNaranjo } from "../Nav";


export const Cart = () => {
 const context = useContext (ContextGlobal);
 const cartItem = context.state.cart;

 const totalPrice = cartItem.reduce ((price, item) => price + item.count * item.price, 
 0);
 

  return (
    <div>
      <>
        <NavNaranjo />
      </>

      <section className="container">
        <div>Productos del Carrito</div>

        {cartItem.length === 0 && (
          <div className="cart empty">No hay productos en el carro</div>
        )}

        <div>
          {cartItem.map((item) => (
            <div key={item.id}>
              <div className="container p-10">
                <div className="w-48 max-w-sm overflow-hidden rounded shadow-lg">
                  <img src={item.img} alt="totebags"></img>
                  <div className="px-6 py-4">
                    <h1 className="mb-2 text-xl font-bold text-center">
                      {item.name}
                    </h1>


                    <p className="text-xl text-center text-gray-700">
                      
                       {item.count}* $ {item.price}
                    </p>
                 
                    <button
                      className="py-2 mt-4 mb-2 font-sans text-base text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 px-9 shadow-red-700/50"
                     onClick={() => context.increase(item.id)}
                     >+</button>

                    <button
                      className="py-2 mt-4 mb-2 font-sans text-base text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 px-9 shadow-red-700/50"
                      onClick={() => context.decrease(item.id)}
                    >-</button>

            
                  </div>
                </div>
              </div>


              <div> Total $ {totalPrice}

              </div>          



            </div>
            

          ))}
        </div>
      </section>



 
  <div className="h-screen bg-gray-300">
    <div className="py-12">
        <div className="max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg md:max-w-5xl">
            <div className="md:flex ">
                <div className="w-full p-4 px-5 py-5">
                    <div className="gap-2 md:grid md:grid-cols-3 ">
                        <div className="col-span-2 p-5">
                           
                          
              
                            <div className="flex items-center justify-between pt-6 mt-6 border-t">
                                <div className="flex items-center"> <img src="https://i.imgur.com/xbTAITF.jpg" width="60" class="rounded-full "/>
                                    <div className="flex flex-col ml-3 "> <span class="text-md font-medium">Breakfast</span> <span class="text-xs font-light text-gray-400">#86577</span> </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="flex pr-8"> <span className="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1"/> <span className="font-semibold">+</span> </div>
                                    <div className="pr-8"> <span className="text-xs font-medium">$10.50</span> </div>
                                    <div> <i className="text-xs font-medium fa fa-close"></i> </div>
                                </div>
                            </div>

                            
                            <div className="flex items-center justify-between pt-6 mt-6 border-t">
                                <div className="flex items-end justify-center"> <span className="mr-1 text-sm font-medium text-gray-400">Subtotal:</span> <span className="text-lg font-bold text-gray-800 "> $24.90</span> </div>
                            </div>  
                        </div>


                        
                        <div className="p-5 overflow-visible bg-gray-800 rounded "> <span className="block pb-3 text-xl font-medium text-gray-100">Detalle del Pedido</span>
                          
                            <div className="flex flex-col justify-center pt-3"> <label className="text-xs text-gray-400 ">Nombre Cliente</label> <input type="text" className="w-full h-6 py-4 text-sm text-white placeholder-gray-300 bg-gray-800 border-b border-gray-600 focus:outline-none" placeholder="Giga Tamarashvili"/> </div>
                            <div className="flex flex-col justify-center pt-3"> <label className="text-xs text-gray-400 ">Card Number</label> <input type="text" className="w-full h-6 py-4 text-sm text-white placeholder-gray-300 bg-gray-800 border-b border-gray-600 focus:outline-none" placeholder="**** **** **** ****"/> </div>
                            <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
                                <div className="col-span-2 "> <label className="text-xs text-gray-400">Expiration Date</label>
                                    <div className="grid grid-cols-2 gap-2"> <input type="text" className="w-full h-6 py-4 text-sm text-white placeholder-gray-300 bg-gray-800 border-b border-gray-600 focus:outline-none" placeholder="mm"/> <input type="text" className="w-full h-6 py-4 text-sm text-white placeholder-gray-300 bg-gray-800 border-b border-gray-600 focus:outline-none" placeholder="yyyy"/> </div>
                                </div>
                                <div className=""> <label className="text-xs text-gray-400">CVV</label> <input type="text" className="w-full h-6 py-4 text-sm text-white placeholder-gray-300 bg-gray-800 border-b border-gray-600 focus:outline-none" placeholder="XXX"/> </div>
                            </div> <button className="w-full h-12 text-white bg-blue-500 rounded focus:outline-none hover:bg-blue-600">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
  </div>

)
};

export default Cart;
