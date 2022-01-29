import React from "react";

const FormPedidos = () => {
  return (

    <div className="flex">
    <table class=" m-5 w-5/6 mx-auto text-gray-100 bg-orange-400 font-sans">
      <tr class="text-left border-b-2">
        <th class="px-4 py-3">Cliente</th>
        <th class="px-4 py-3">Fecha</th>
        <th class="px-4 py-3">Estado</th>
    
      </tr>
      <tr class="border-b bg-orange-300">
        <td class="px-4 py-3">Jill</td>
        <td class="px-4 py-3">Smith</td>
        <td class="px-4 py-3">50</td>
      </tr>    
    
      <tr class="border-b  bg-orange-300">
        <td class="px-4 py-3">Jill</td>
        <td class="px-4 py-3">Smith</td>
        <td class="px-4 py-3">50</td>   
      </tr>      

    </table>
    </div>
  );
};

export default FormPedidos;
