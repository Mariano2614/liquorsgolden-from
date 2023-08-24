import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userApi } from "../api/userApi.js";

export default function Cards(props) {
  const [Bebidas, setBebidas] = useState([]);

  useEffect(() => {
    getUsers(props.tipo);
  }, [props.tipo]);

  console.log(props)
  
  async function getUsers(tipo) {
    const result = await userApi.get(`http://localhost:8080/api/${tipo}`);
    setBebidas(result.data);
    console.log(result.data);
  }

  function convertir(precio) {
    return precio.toLocaleString("es-CO");
  }

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-1">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-9">
          {Bebidas.map((product) => (
            <div
              key={`${props.tipo}-${product.id}`} 
              className="group relative bg-white rounded-[1rem]"
            >
              <Link to={`/${props.tipo}/${product.id}`}>
              {console.log(product.id)}
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 rounded-[1rem] rounded-b-none">
                  <img
                    src={product.img}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </Link>

              <div className="mt-4 flex justify-start h-34 m-3">
                <div className="flex flex-col justify-between">
                  <h1 className="text-lg text-black">
                    <Link to={`/${props.tipo}/${product.id}`}>
                      <span aria-hidden="true" className="" />
                      <b>{product.name}</b>
                      <div className="flex gap-4">
                        <h3 className="mt-1 text-xl text-black">
                        $ {convertir(product.precio)}
                        </h3>
                      </div>
                      <p className="mt-4 text-lg text-black border border-solid border-black rounded-xl w-[4.5rem] p-1">
                        {product.medida} ml
                      </p>
                    </Link>
                  </h1>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="submit"
                      className="flex w-[16rem] justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 mr-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
