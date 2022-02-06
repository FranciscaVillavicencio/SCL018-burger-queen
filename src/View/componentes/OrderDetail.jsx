import React, { useState } from "react";
import FormPedidos from "./FormPedidos";



const OrderDetail = () => {
  const [client, setclient] = useState("");
  const [date, setdate] = useState("");
  const [condition, setcondition] = useState("");

  const onChange = (evento) => {
   if(evento.target.name === "cliente"){
    setclient(evento.target.value);
   }else if(evento.target.name === "fecha"){
    setdate(evento.target.value);
   }else if(evento.target.name === "condicion"){
    setcondition(evento.target.value);
   }
  }

  return (

    <div>

      <div>
        <input
          className="border-2 border-rose-600"
          type="text"
          name="cliente"
          id="cliente"
          value={client}
          onChange={onChange}
        />
      </div>

      <div>
        <input
          className="border-2 border-rose-600"
          type="date"
          name="fecha"
          id="fecha"
          value={date}
          onChange={onChange}
        />
      </div>

      <div>
        <select id="condicion" name="condicion" value ={condition} onChange={onChange}>
          <option selected disabled>Pokemon</option>
          <option value="grass">Grass</option>
          <option value="poison">Poison</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="water">Water</option>
        </select>
      </div>

      <button className="bg-orange-400">Enviar</button>

      <div className="flex">
        <table className="w-5/6 m-5 mx-auto font-sans text-gray-100 bg-orange-400 ">
          <tr className="text-left border-b-2">
            <th className="px-4 py-3">Cliente</th>
            <th className="px-4 py-3">Fecha</th>
            <th class="px-4 py-3">Estado</th>
          </tr>

          <tr className="bg-orange-300 border-b">
            <td className="px-4 py-3">{client}</td>
            <td className="px-4 py-3">{date}</td>
            <td className="px-4 py-3">{condition}</td>
          </tr>
          
        </table>
      </div>




    </div>
  );
};

export default OrderDetail;
