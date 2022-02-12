import React, { useState, useContext } from "react";
import db from "../../firebase/firebaseConfig";
//funcion para acceder a la colección, donde se guarda la info.
import { collection, addDoc } from "firebase/firestore";
import { ContextGlobal } from "../../App";




const Form = () => {
    const context = useContext(ContextGlobal);

    //const para guardar la info de los pedidos
    const [cliente, setCliente] = useState('');
    const [date, setDate] = useState('');
    const [selectOption, setSelectOption] = useState('');
    
    
    

    //constante para enviar información a la base de datos

    const onSubmit = async (e) => {
        e.preventDefault();

        try {

            await addDoc(collection(db, 'pedidos'), {
                cliente: cliente,
                date: date,
                selectOption: selectOption,
                cartItem: context.state.cart
                
            });
        } catch (error) {
            console.log("No se pudo enviar el pedido");
            console.log('error');

        }
        setCliente('');
        setDate('');
        context.removeAll();
        
       
    }


    return <form onSubmit={onSubmit}>

        <div className="p-5 mt-10 border-8 border-orange-400 border-opacity-100 rounded h-96 after:overflow-visible "> <span className="block pb-2 text-xl font-medium text-gray-400">Detalle del Pedido</span>

            <div className="flex flex-col justify-center pt-3"> <label className="text-lg text-gray-500 ">Nombre Cliente</label> <input type="text" name="cliente" value={cliente} onChange={(e) => setCliente(e.target.value)} className="w-full h-6 py-4 text-sm text-black placeholder-gray-600 bg-white border-b border-red-100 focus:outline-none" placeholder="Giga Tamarashvili" /></div>
            <div className="flex flex-col justify-center pt-3"> <label className="text-lg text-gray-500 ">Fecha Envío</label> <input type="date" name="fecha" value={date} onChange={(e) => setDate(e.target.value)} className="w-full h-6 py-4 text-sm text-black placeholder-gray-600 bg-white border-b border-red-100 focus:outline-none"/> </div>



            <div className="col-span-2 pt-3 "><label className="text-lg text-gray-500 ">Status</label>
                <div>
                    <select value={selectOption} onChange={(e) => setSelectOption(e.target.value)} className="mt-3 text-sm text-black border-2 border-red-100 rounded" >
                        <option></option>
                        <option>Enviado a Taller</option>
                        <option>Recibido de Taller</option>
                        <option>Despachado</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
            </div> <button type="submit" className="w-full h-12 mt-4 mb-6 text-white bg-red-400 rounded focus:outline-none hover:bg-red-100">Enviar</button>


        </div>
    </form>;


};

export default Form;
