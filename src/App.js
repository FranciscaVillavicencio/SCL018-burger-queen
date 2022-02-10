import React, { createContext, useState }  from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "./View/Inicio";
import Orders from "./View/Vieworders/Orders";
import Products from "./View/Vieworders/Products";
import Cart from "./View/Vieworders/Cart";
import totebagJson from "./totebag.json";



export const ContextGlobal = createContext();

const App = () => {


  const data = totebagJson;
  const [state, setState] = useState ({
   //estado que contiene dos objetos.
    ListProduct: data,
    cart: []
  });

  //para agregar productos al carro.
  const addProduct = (product) => {
    return setState({ 
      ...state,
      cart: state.cart.find((item) => item.id === product.id)
      ? state.cart.map ((cartItem) => 
      cartItem.id === product.id 
      ? {...cartItem, count: cartItem.count + 1 }
     : cartItem
     )
     :[...state.cart, {...product, count: 1 }]    
   });
  }


  //sumar cantidad de producto.
  const sumar = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      )
    });
  };
   
  //restar cantidad de producto.

  const restar = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      )
    });
  };
 
  //eliminar producto.

  const limpiar = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id)
    });
  };




  const global = {state:state, addProduct, restar, sumar, limpiar,  }


  


  return (
    <ContextGlobal.Provider value = {global}>

    <>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Products" element={<Products data = {data} />} />      
          <Route path="/Cart" element={<Cart  />} />
        </Routes>
      </Router>
  
    </>
    </ContextGlobal.Provider>
  );
}

export default App;
