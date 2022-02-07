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
    </div>
  );
};

export default Cart;


