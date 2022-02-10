import { Link } from "react-router-dom";
import recursos from './recursos/img.js';



const Inicio = () => {

  return (
    
      <div className="flex flex-col items-center mt-6 mb-6 ml-6 mr-6 justify-items-center bg-red-50">
       
         <img className = "w-2/5 pt-16 pb-14" src= {recursos.img1} alt = "logo de inicio"/>
           

        <div className="px-4 py-2 mt-10 font-sans text-4xl text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 shadow-red-700/50 mb-7">
            <Link to="/Orders">Pedidos</Link>
        </div>

        <div>
          <button className="py-2 font-sans text-4xl text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 px-9 shadow-red-700/50 mb-14">
            Taller
          </button>
        </div>

      </div>
    
  );
};

export default Inicio;
