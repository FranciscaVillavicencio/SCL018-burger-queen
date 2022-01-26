import React from "react";
import recursos from "../recursos/img";
import totebag from "../../data/totebag.json";
import { useEffect } from "react";

const CardProducts = () => {
  const whiteTotebags = totebag.whiteTotebags;
  const blackTotebags = totebag.blackTotebags;

  return (
    <>
      <div className="bg-white">
        <nav className="flex flex-col sm:flex-row">
          <div>
            <button className="block px-6 py-4 font-medium text-gray-600 text-blue-500 border-b-2 border-blue-500 hover:text-blue-500 focus:outline-none">
              BOLSAS BLANCAS
            </button>
            {whiteTotebags.map((e, index) => {
              return (
                                  
                <div className ="container flex flex-row items-center mx-auto mt-6 mb-6 ml-6 mr-6 bg-local justify-items-center bg-red-50">
                <div key={index}>
                  <div className="max-w-sm overflow-hidden rounded shadow-lg">
                    <img src={e.img} alt="totebags"></img>
                    <div className="px-6 py-4">
                      <div className="mb-2 text-xl font-bold"></div>
                      <p className="text-base text-gray-700">{e.description}</p>
                      <p className="text-xl text-gray-700">{e.price}</p>
                      <div>
                        <button className="py-2 font-sans text-xl text-white bg-red-400 rounded-full shadow-lg hover:bg-red-500 px-9 shadow-red-700/50 mb-14">
                          Agregar
                        </button>
                      </div>
                    </div>
                    <div className="px-6 pt-4 pb-2"></div>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
};

export default CardProducts;
