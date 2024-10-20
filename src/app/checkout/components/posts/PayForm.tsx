import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import PhoneNumberInput from "../inputs/PhoneNumberInput";
import { FaAngleLeft } from "react-icons/fa6";
import LoadingSpinner from "../loadding/LoadingSpinner";


export default function PayForm() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="flex justify-between font-koulen w-full p-8">
            <div title="detalle envio" className="m-2 p-2 rounded-md bg-gray-200 w-1/2 flex-grow py-5 px-40 ">
                <div id="header" className="text-gray-700 flex flex-row flex-nowrap justify-center items-baseline content-stretch">
                    <div><h4 className="m-2  flex flex-row flex-nowrap justify-start items-baseline content-stretch text-purple-400">Resumen <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-purple-400" /> <IoRemoveOutline /></h4></div>
                    <div><h4 className="m-2  flex flex-row flex-nowrap justify-start items-baseline content-stretch text-purple-400">Envio <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-gray-800" /> <IoRemoveOutline /></h4></div>
                    <div><h4 className="m-2  flex flex-row flex-nowrap justify-start items-baseline content-stretch">Pago <IoRemoveOutline className="ml-2"/> <FaCheckCircle className="text-gray-800" /> <IoRemoveOutline /></h4></div>
                </div>
                <h1 className="text-2xl text-gray-900 pb-5"></h1>

                {/*CARGANDO */}
                <div className="h-32 flex justify-center items-center ">
          {isLoading ? <LoadingSpinner /> : <p>Contenido cargado</p>}
        </div>

                {/* BOTONES 
                <div id="but" className="flex flex-row flex-nowrap justify-start items-stretch content-start">
                    <button title="decline" type="button" className="text-gray-800 p-4 flex items-center">
                      <FaAngleLeft className="mr-1"/> Volver
                    </button>
                </div>      
                */}
                
            </div>

            <div title="orden" className="m-2 p-10 rounded-md bg-gray-200 flex flex-col flex-nowrap justify-between items-stretch content-stretch">
                <div id="hd1" className="flex flex-row flex-nowrap justify-between items-start content-start">
                <div id="orden" className="mr-64 text-gray-800">
                    <h1 className="mb-3">Resumen de la orden</h1>
                    <h2 className="mb-3">1 x Producto</h2>
                    <h2 className="mb-3">1 x Producto</h2>
                    <h2 className="mb-3">1 x Producto</h2>
                    <h2 className="mb-3">1 x Producto</h2>
                </div>
                <div id="pago" className="text-gray-800">
                    <h1>Pagos con</h1>
                    <img title="paypal" src="/img/paypal-logo-0.png" className=" w-16 border-blue-900 rounded-md border-2 px-3"  />
                </div>
                </div> 

                {/* 
                <div id="hd2" className="flex flex-col space-y-2">
                    <h3 className="text-gray-800 font-inter text-sm">CODIGO DE DESCUENTO</h3>
                    <div className="flex items-center space-x-2">
                      <input title="descuento" type="text" name="descuento" id="" className="flex-grow rounded-md border-none bg-gray-300 text-gray-700 mr-8" />
                      <button type="button" title="aplicar" className="border-purple-400 border-2 text-purple-400 font-inter py-2 px-5 rounded-md">Aplicar</button>
                    </div>
                </div>
                */}

                <div id="hd3" className="flex flex-row flex-nowrap justify-between items-start content-start mt-2 font-inter text-sm">
                <div id="orden" className="mr-64 text-gray-800">
                    <h2 className="mb-3">Subtotal</h2>
                    <h2 className="mb-3">Impuestos</h2>
                    <h2 className="mb-3">Envio</h2>
                    <h2 className="mb-3">Total</h2>
                </div>
                <div id="pago" className="text-gray-800">
                    <h3 className="mb-3">L. 316.00</h3>
                    <h3 className="mb-3">L. 3.00</h3>
                    <h3 className="mb-3">...</h3>
                    <h3 className="mb-3">L. 319.00</h3>
                </div>
                </div> 

                {/* BOTONES */}
                <div id="but" className="flex flex-row flex-nowrap justify-end items-end content-start">
                    <button title="decline" type="button" className="mr-8 text-gray-800 p-4">Cancelar Orden</button>
                    <button title="sending" type="button" className="bg-purple-400 py-4 px-9 rounded-md">Pagar</button>
                </div>
 
            </div>
        </div>
    );
}
