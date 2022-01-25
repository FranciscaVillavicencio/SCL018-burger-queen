import React from "react";
import recursos from "../recursos/img";
import totebag from "../../data/totebag.json";
import { useEffect } from "react";

const CardProducts = () => {
  const whiteTotebags = totebag.whiteTotebags;
  const blackTotebags = totebag.blackTotebags;

  return (
    <>
      <div class="bg-white">
        <nav class="flex flex-col sm:flex-row">
          <div>
            <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
              BOLSAS BLANCAS
            </button>
            {whiteTotebags.map((e, index) => {
              return (
                
                <div>
                  <button key={index}>{e.design}</button>

                  <p> {e.description}</p>

                  <img src={e.img} alt="totebags"></img>
                </div>
              );
            })}
          </div>
           <div>
          <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            BOLSAS NEGRAS
          </button>
          {blackTotebags.map((e, index) => {
              return (
                <div>
                  <button key={index}>{e.design}</button>

                  <p> {e.description}</p>

                  <img src={e.img} alt="totebags"></img>
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
