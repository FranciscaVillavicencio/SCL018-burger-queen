
import React, { useContext, useState } from "react";
import { ContextGlobal } from "../../App";
import { NavRojo } from '../Nav';




const Products = ({ data }) => {
  const context = useContext(ContextGlobal);
  const cartItem = context.state.cart;


  const [bags, setbags] = useState([]);

  const filterBags = (category) => {
    setbags(data[category]);

  };


  return (
    <div>


      <NavRojo cartItem={cartItem} />


      <section className="flex justify-center mb-0 bg-red-50">
        <button
          className="py-2 mt-10 ml-2 mr-4 font-sans text-2xl text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 px-9 shadow-red-700/50 mb-14"
          type="button"
          onClick={() => filterBags("white")}>
          TOTEBAG BLANCOS
        </button>


        <button
          className="py-2 mt-10 ml-4 mr-4 text-2xl text-white bg-red-400 rounded-full shadow-lg marker:font-sans hover:bg-red-500 px-9 shadow-red-700/50 mb-14"
          type="button"
          onClick={() => filterBags("black")}
        >
          TOTEBAG NEGROS
        </button>
      </section>

      
       <div className="grid content-center justify-center grid-cols-3 mt-0 bg-red-50 place-items-center">
       {bags.map((e) => (
        <div key={e.id}>
          
            <div className="flex flex-col w-48 max-w-sm mt-6 bg-white border-8 border-white rounded">
              <img src={e.img} alt="totebags"></img>
              <div className="px-6 py-4">
                <h1 className="mb-2 text-xl font-bold text-center" >{e.name}</h1>
                <p className="text-xl text-center text-gray-700" > $ {e.price}</p>
                <button className="py-2 mt-4 mb-2 font-sans text-base text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 px-9 shadow-red-700/50" onClick={() => context.addProduct(e)}>Agregar</button>

              </div>
            </div>
          </div>
        
      ))}
      </div>
    </div>
  );
};

export default Products;