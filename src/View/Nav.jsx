import React from "react";
import { Link } from "react-router-dom";
import recursos from "./recursos/img";


const NavRosado = () => {
  return (
    <section className="container">
      <nav className="flex-row px-20 pt-8 pb-4 bg-cover bg-red-50">
        <div className="flex justify-center h-40">
          <img src={recursos.img3} alt="logo rosado" />
        </div>

        <div className="flex justify-end w-10 h-10 aling-items-end">
          <Link to="/Inicio">
            <img src={recursos.img4} alt="btn- de salida" />
          </Link>
        </div>
      </nav>
    </section>
  );
};

const NavRojo = () => {
  return (
    <div>
      <nav className="flex-row px-20 pt-8 pb-4 bg-cover bg-red-50">
        <div className="flex justify-center h-40">
          <img src={recursos.img2} alt="logo rojo" />
        </div>

        <div className="flex justify-end w-10 h-10 aling-items-end">
          <Link to="/Cart">
            <img src={recursos.img5} alt="btn de envio a taller" />
          </Link>
        </div>

        <div className="flex justify-end w-10 h-10 aling-items-end">
          <Link to="/Inicio">
            <img src={recursos.img4} alt="btn de salida " />
          </Link>
        </div>

      </nav>
    </div>
  );
};

const NavNaranjo = () => {
  return (
    <div>
      <nav className="flex-row px-20 pt-8 pb-4 bg-cover bg-red-50">
        <div className="flex justify-center h-40">
          <img src={recursos.img6} alt="logo rojo" />
        </div>

        <div className="flex justify-end w-10 h-10 aling-items-end">
          <Link to="/Inicio">
            <img src={recursos.img4} alt="btn- de salida" />
          </Link>
        </div>

      </nav>
    </div>
  );
};

export { NavRosado, NavRojo, NavNaranjo };
