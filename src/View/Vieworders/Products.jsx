
import React, { useContext, useState } from "react";
import { ContextGlobal } from "../../App";
import { NavRojo } from '../Nav';




const Products = ({data}) => {
 const context = useContext (ContextGlobal);
 const cartItem = context.state.cart;
  

  const [bags, setbags] = useState([]);

  const filterBags = (category) => {
    setbags(data[category]);
    
  };
  

  return (
    <>
       
       <NavRojo cartItem = {cartItem}/>

      <button
        className="bg-red-400"
        type="button"
        onClick={() => filterBags("white")}
      >
        TOTEBAG BLANCOS
      </button>

      <button
        className="bg-red-400"
        type="button"
        onClick={() => filterBags("black")}
      >
        TOTEBAG NEGROS
      </button>

      {bags.map((e) => (
        <div key={e.id}>
          <div className="container p-10">
            <div className="w-48 max-w-sm overflow-hidden rounded shadow-lg">
              <img src={e.img} alt="totebags"></img>
              <div className="px-6 py-4">
                <h1 className="mb-2 text-xl font-bold text-center" >{e.name}</h1>
                <p className="text-xl text-center text-gray-700" > $ {e.price}</p>
                <button className="py-2 mt-4 mb-2 font-sans text-base text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 px-9 shadow-red-700/50" onClick={() => context.addProduct(e)}>Agregar</button> 

              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;