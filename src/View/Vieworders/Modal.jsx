import React from "react";




const Modal = ({ img, name, count, estado, cambiarEstadoModal }) => {

    return (
        <>
            {estado &&
                <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-blend-overlay backdrop-opacity-60 bg-black/10">
                    <div className="flex-row w-1/2 pb-20 bg-scroll rounded-md bg-red-50 min-h-30 shadow-indigo-500/50">
                         <div className="flex justify-end justify-items-end">
                        <button onClick={() => cambiarEstadoModal(false)} className="w-16 mt-4 mr-4 font-bold text-white bg-red-400 rounded-full ml-60 hover:bg-red-500">cerrar</button>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center w-48 m-5 bg-white border-8 border-white rounded-md ">
                            <h1 className="mb-2 text-xl font-bold text-center text-gray-600">{name}</h1>
                            <img src={img} className="w-40" alt="totebags"></img>
                            <p className="text-gray-600">Cantidad : {count} unidades</p>
                        </div>

                    </div>
                </div>

            }
        </>

    );
}

export default Modal;





