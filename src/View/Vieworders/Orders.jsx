import { Link } from "react-router-dom";
import { NavRosado } from "../Nav";


const Orders = () => {
  return (
    <section>

      <>
        <NavRosado />
      </>


      <div className="flex flex-col items-center bg-red-50 justify-items-center ">

        <div>
          <button className="px-4 py-2 mt-10 font-sans text-4xl text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 shadow-red-700/50 mb-7">
            <Link to="/Products">Agregar Pedido</Link></button>
        </div>

      </div>



    </section>
  );
};

export default Orders;
