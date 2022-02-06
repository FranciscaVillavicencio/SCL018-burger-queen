import React, { useState } from "react";

const CarritoCompras = () => {
  const [carrito, setCarrito] = useState([]); //estado//

 //funcion para agregar al carrito//

  const agregarProductoAlCarrito = (idProductoAAgregar, name ) => {
    //si el carrito no tiene productos, entonces agregamos uno.
    if (carrito.length === 0){
      setCarrito([{id: idProductoAAgregar, name: name, cantidad: 1}]);
    } else {
     //revisar que el carrito no tenga ya el producto que queremos agregar.
     //si ya lo tiene hay que actualizar la cantidad.
     //si no tiene el producto entonces hay que agregarlo.
     

     //para poder actualizar el carrito, debemos clonarlo.
      const nuevoCarrito = [...carrito];

      // comprobamos si el carrito ya tiene el id del producto que queremos agregar
       const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
         return productoDeCarrito.id === idProductoAAgregar
       }).length > 0;

       
    }
    
  }


  return (
    <div>
      <h1>carrito de compras</h1>
      {carrito.length > 0 ? (
        carrito.map((product, index) => {
          return (
            <div key={index}>
              <div className="container p-10">
                <div className="w-48 max-w-sm overflow-hidden rounded shadow-lg">
                  <img src={product.img} alt="totebags"></img>
                  <div className="px-6 py-4">
                    <h1 className="mb-2 text-xl font-bold text-center">
                      {product.name}
                    </h1>
                    <p className="text-xl text-center text-gray-700">
                      Valor $ {product.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No hay productos al carrito</p>
      )}
    </div>
  );
};

export default CarritoCompras;
