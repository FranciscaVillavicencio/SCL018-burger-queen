
import React  from "react";
import { Link } from "react-router-dom";
import recursos from "./recursos/img";


const NavRosado = () => {

  return (
    <section className= "pt-5 bg-white bg-cover">
      <nav>
        <div className="flex justify-center h-40 ">
          <img src={recursos.img3} alt="logo rojo" />
        </div>

        <div className="flex justify-between p-4"> 
          
          <div className="justify-item-start basis-1/2 ">
          <Link to="/Inicio">
            <img className= "w-12 ml-6" src={recursos.img4} alt="btn de salida" />
          </Link>
            </div>
          
        </div>

      </nav>
    </section>
  );
};

const NavRojo = ({cartItem}) => {
  return (
    <section className= "pt-5 bg-white bg-cover">
      <nav>
        <div className="flex justify-center h-40 ">
          <img src={recursos.img2} alt="logo rojo" />
        </div>

        <div className="flex justify-between p-4"> 
          
          <div className="justify-item-start basis-1/2 ">
          <Link to="/Inicio">
            <img className= "w-12 ml-6" src={recursos.img4} alt="btn de salida" />
          </Link>
            </div>

      
          <div className="text-red-400 place-items-end">
          <Link to="/Cart">           
              {cartItem.length === 0 ? "0" : cartItem.length}
            <img className = "w-16 mr-6 " src={recursos.img5} alt="btn de envio a taller" />
          </Link>
           </div>
          
        </div>

      </nav>
    </section>
  );
};

const NavNaranjo = () => {
  return (
    
    <section className= "pt-5 bg-white bg-cover">
    <nav>
      <div className="flex justify-center h-40 ">
        <img src={recursos.img6} alt="logo rojo" />
      </div>

      <div className="flex justify-between p-4"> 
        
        <div className="justify-item-start basis-1/2 ">
        <Link to="/Inicio">
          <img className= "w-12 ml-6" src={recursos.img4} alt="btn de salida" />
        </Link>
          </div>

          <div className="justify-item-start basis-1/2 ">
        
          </div>
          <button className="w-32 px-4 py-2 mt-3 mb-5 font-sans text-sm text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 shadow-red-700/50">
          <Link to="/Orders"> Ver Pedidos</Link></button>
          </div>

    </nav>
  </section>
  );
};

export { NavRosado, NavRojo, NavNaranjo };
