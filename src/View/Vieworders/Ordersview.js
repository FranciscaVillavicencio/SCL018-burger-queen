import { Link } from "react-router-dom";
import { NavRosado } from "../componentes/Nav";
import OrderDetail from "../componentes/OrderDetail";

const Ordersview = () => {
  return (
    <section className="container">
      
      <>
      <NavRosado/>
      </>
       

      <div className="flex flex-col items-center justify-items-center">
       
        <div>
          <button className="px-4 py-2 mt-10 font-sans text-4xl text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 shadow-red-700/50 mb-7">
            <Link to="/ViewProducts">Agregar Pedido</Link></button>
        </div>
       
       
        <div>
          <OrderDetail/>
          </div>
      </div>
    </section>
  );
};

export default Ordersview;
