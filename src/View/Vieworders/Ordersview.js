import { Link } from "react-router-dom";
import { NavRosado } from "../componentes/Nav";

const Ordersview = () => {
  return (
    <section className="container">
      
      <>
      <NavRosado/>
      </>
       

      <div className="flex flex-col items-center bg-cover bg-red-50 justify-items-center">
       
        <div>
          <button className="px-4 py-2 mt-10 font-sans text-4xl text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 shadow-red-700/50 mb-7">
            <Link to="/ViewProducts">Agregar Pedido</Link></button>
        </div>
       
       
        <div>aqui van los pedidos generales</div>
      </div>
    </section>
  );
};

export default Ordersview;
